var config = {
  type: Phaser.WEBGL,
  backgroundColor: "#2d2d2d",
  parent: "phaser-example",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },

  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: "1920px",
    height: "1080px",
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("map", "Level_0.png");
  this.load.image("map2", "Level_1.png");
  this.load.image("map3", "Level_2.png");

  //static frames

  this.load.image("tidus_right", "../../Images/Tidus_static_right.png");
  this.load.image("tidus_left", "../../Images/Tidus_static_left.png");
  this.load.image("tidus_front", "../../Images/Tidus_static_front.png");
  this.load.image("tidus_back", "../../Images/Tidus_static_back.png");

  // animated frames

  this.load.image("tidus_right_t1", "../../Images/Tidus_walking_right_t1.png");
  this.load.image("tidus_right_t2", "../../Images/Tidus_walking_right_t2.png");
  this.load.image("tidus_right_t3", "../../Images/Tidus_walking_right_t3.png");
  this.load.image("tidus_right_t4", "../../Images/Tidus_walking_right_t4.png");

  this.load.image("tidus_left_t1", "../../Images/Tidus_walking_left_t1.png");
  this.load.image("tidus_left_t2", "../../Images/Tidus_walking_left_t2.png");
  this.load.image("tidus_left_t3", "../../Images/Tidus_walking_left_t3.png");
  this.load.image("tidus_left_t4", "../../Images/Tidus_walking_left_t4.png");

  this.load.image("tidus_front_t1", "../../Images/Tidus_walking_front_t1.png");
  this.load.image("tidus_front_t2", "../../Images/Tidus_walking_front_t2.png");
  this.load.image("tidus_front_t3", "../../Images/Tidus_walking_front_t3.png");

  this.load.image("tidus_back_t1", "../../Images/Tidus_walking_back_t1.png");
  this.load.image("tidus_back_t2", "../../Images/Tidus_walking_back_t2.png");
  this.load.image("tidus_back_t3", "../../Images/Tidus_walking_back_t3.png");

  //npc

  this.load.image("NPC-1", "../../Images/NPC-1.png");
  this.load.image("NPC-2", "../../Images/NPC-2.png");
  this.load.image("old-man", "../../Images/old-man.png");
}

async function create() {
  // img map size
  const mapScale = 3.1;

  // map installation
  this.map1 = this.add.image(0, 0, "map").setOrigin(0).setScale(mapScale);

  this.map2 = this.add
    .image(this.map1.displayWidth, 0, "map2")
    .setOrigin(0)
    .setScale(mapScale);

  this.map3 = this.add
    .image(this.map1.displayWidth + this.map2.displayWidth, -650, "map3")
    .setOrigin(0)
    .setScale(mapScale);

  //player

  this.player = this.physics.add.sprite(120, 220, "tidus_right");
  this.player.setScale(0.6);
  this.player.setCollideWorldBounds(true);
  this.direction = "right";
  this.frameIndex = 1;
  this.frameTimer = 0;
  this.frameDelay = 80;

  // size world
  const worldX = 0;
  const worldY = -700;
  const worldWidth =
    this.map1.displayWidth + this.map2.displayWidth + this.map3.displayWidth;
  const worldHeight = this.map1.displayHeight + 700;

  this.physics.world.setBounds(worldX, worldY, worldWidth, worldHeight);

  // collision walls
  this.walls = this.add.group();

  const addWall = (x, y, width, height) => {
    const wall = this.add.rectangle(x, y, width, height, 0xff0000, 0.3);
    this.physics.add.existing(wall, true);
    this.walls.add(wall);
    return wall;
  };

  // Map 1 border
  addWall(419, 24, 744, 48); // Up
  addWall(0, 400, 94, 800); // Left
  addWall(769, 158, 45, 220); // top-right
  addWall(769, 643, 45, 294); // bottom-right

  // Round of grass
  addWall(420, 321, 145, 116);

  // Great wall left
  addWall(199, 718, 305, 146);

  // Great wall right
  addWall(619, 718, 255, 146);

  // Map 2 border
  addWall(1188, 5, 795, 12); // Up
  addWall(1188, 785, 795, 12); // Bottom
  addWall(1580, 461, 12, 636); // Right

  // bush
  addWall(843, 245, 100, 95);
  addWall(843, 492, 100, 95);

  addWall(1190, 245, 100, 95);
  addWall(1190, 492, 100, 95);

  addWall(1536, 245, 100, 95);
  addWall(1536, 492, 100, 95);

  // cliff
  addWall(1190, 104, 283, 187);

  // rock
  addWall(998, 54, 101, 87);

  // broken trees
  addWall(1165, 647, 145, 98);
  addWall(1490, 645, 100, 100);

  // Map 3 border
  addWall(1983, -630, 790, 45); // Up
  addWall(1983, 135, 795, 20); // Bottom
  addWall(2355, -241, 45, 732); // Right
  addWall(1609, -300, 45, 615); // Left

  // Pillars
  addWall(1760, -352, 52, 100);
  addWall(1760, -154, 52, 100);
  addWall(2206, -352, 52, 100);
  addWall(2206, -154, 52, 100);

  // broken pillars
  addWall(1760, -30, 52, 50);
  addWall(2206, -30, 52, 50);

  // hero statue
  addWall(1982, -518, 80, 130);

  // player collision
  this.walls.children.each((wall) => {
    this.physics.add.collider(this.player, wall);
  });

  // keys

  this.keys = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.Z,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });

  // interraction npc

  this.interactKey = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.E,
  );

  //fetch npc

  const response = await fetch("http://localhost:3000/pnj");
  const pnjs = await response.json();
  console.log("PNJ récupérés :", pnjs);

  this.npcs = this.physics.add.staticGroup();

  pnjs.forEach((pnj) => {
    const imageKey = pnj.image.replace(".png", "");

    if (pnj.id === 1) {
      const npcSprite = this.npcs.create(230, 100, imageKey).setScale(0.65);
      npcSprite.refreshBody();
      npcSprite.setData("id", pnj.id);
      npcSprite.setData("name", pnj.name);
    }

    if (pnj.id === 2) {
      const npcSprite = this.npcs.create(1365, 32, imageKey).setScale(0.65);
      npcSprite.refreshBody();
      npcSprite.setData("id", pnj.id);
      npcSprite.setData("name", pnj.name);
    }

    if (pnj.id === 3) {
      const npcSprite = this.npcs.create(1983, -415, imageKey).setScale(0.15);
      npcSprite.refreshBody();
      npcSprite.setData("id", pnj.id);
      npcSprite.setData("name", pnj.name);
    }
  });

  this.loadDialogue = async (npcId) => {
    const response = await fetch(`http://localhost:3000/dialogues/${npcId}`);
    const dialogues = await response.json();

    this.currentDialogue = dialogues;
    this.currentDialogueIndex = 0;

    if (this.currentDialogue.length > 0) {
      this.isDialogueActive = true;
      this.dialogueBox.setVisible(true);
      this.dialogueText.setVisible(true);
      this.dialogueText.setText(this.currentDialogue[0].text);
    }
    console.log("dialogues récupérés :", dialogues);
  };

  // Dialogue box

  const camWidth = this.cameras.main.width;
  const camHeight = this.cameras.main.height;

  this.dialogueBox = this.add
    .rectangle(
      camWidth / 2,
      camHeight - 100,
      camWidth - 100,
      140,
      0x000000,
      0.7,
    )
    .setScrollFactor(0)
    .setDepth(1000)
    .setVisible(false);

  this.dialogueText = this.add
    .text(80, camHeight - 145, "", {
      fontSize: "28px",
      fill: "#ffffff",
      wordWrap: { width: camWidth - 160 },
    })
    .setScrollFactor(0)
    .setDepth(1001)
    .setVisible(false);

  this.physics.add.collider(this.player, this.npcs);

  // Camera

  this.normalCameraTop = 0;
  this.caveCameraTop = -700;
  this.cameraUnlockedForCave = false;

  this.cameras.main.setBounds(
    0,
    this.normalCameraTop,
    worldWidth,
    this.map1.displayHeight,
  );
  this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
}

function update(time, delta) {
  if (!this.keys || !this.interactKey || !this.npcs) return;

  const speed = 200;
  let moving = false;

  this.player.setVelocity(0);

  if (!this.isDialogueActive) {
    if (this.keys.left.isDown) {
      this.player.setVelocityX(-speed);
      this.direction = "left";
      moving = true;
    } else if (this.keys.right.isDown) {
      this.player.setVelocityX(speed);
      this.direction = "right";
      moving = true;
    }

    if (this.keys.up.isDown) {
      this.player.setVelocityY(-speed);
      this.direction = "back";
      moving = true;
    } else if (this.keys.down.isDown) {
      this.player.setVelocityY(speed);
      this.direction = "front";
      moving = true;
    }
  }

  // walking animation

  if (moving) {
    this.frameTimer += delta;

    if (this.frameTimer > this.frameDelay) {
      this.frameTimer = 0;
      this.frameIndex++;

      if (this.direction === "left" || this.direction === "right") {
        if (this.frameIndex > 4) this.frameIndex = 1;
      } else {
        if (this.frameIndex > 3) this.frameIndex = 1;
      }
    }

    this.player.setTexture(`tidus_${this.direction}_t${this.frameIndex}`);
  } else {
    this.frameIndex = 1;
    this.frameTimer = 0;
    this.player.setTexture(`tidus_${this.direction}`);
  }

  // State 2 cave camera

  const nearCave =
    this.player.x > this.map1.displayWidth + 650 && this.player.y < 250;

  if (nearCave && !this.cameraUnlockedForCave) {
    this.cameraUnlockedForCave = true;
    this.cameras.main.setBounds(
      0,
      this.caveCameraTop,
      this.physics.world.bounds.width,
      this.map1.displayHeight + 700,
    );
  } else if (!nearCave && this.cameraUnlockedForCave) {
    this.cameraUnlockedForCave = false;
    this.cameras.main.setBounds(
      0,
      this.normalCameraTop,
      this.physics.world.bounds.width,
      this.map1.displayHeight,
    );
  }

  // Detection NPCs interaction
  let nearbyNpc = null;

  this.npcs.children.each((npc) => {
    const distance = Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      npc.x,
      npc.y,
    );

    if (distance < 80) {
      nearbyNpc = npc;
    }
  });

  if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
    if (!this.isDialogueActive && nearbyNpc) {
      this.loadDialogue(nearbyNpc.getData("id"));
      return;
    }

    if (this.isDialogueActive) {
      this.currentDialogueIndex++;

      if (this.currentDialogueIndex < this.currentDialogue.length) {
        this.dialogueText.setText(
          this.currentDialogue[this.currentDialogueIndex].text,
        );
      } else {
        this.isDialogueActive = false;
        this.currentDialogue = [];
        this.currentDialogueIndex = 0;
        this.dialogueBox.setVisible(false);
        this.dialogueText.setVisible(false);
      }
    }
  }
}
