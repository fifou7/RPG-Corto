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
  this.load.image("tidus_right", "../../Images/Tidus_static_right.png");
  this.load.image("tidus_left", "../../Images/Tidus_static_left.png");
  this.load.image("tidus_front", "../../Images/Tidus_static_front.png");
  this.load.image("tidus_back", "../../Images/Tidus_static_back.png");
}

function create() {
  //size
  const mapScale = 3.1;

  this.map1 = this.add.image(0, 0, "map").setOrigin(0).setScale(mapScale);

  this.map2 = this.add
    .image(this.map1.displayWidth, 0, "map2")
    .setOrigin(0)
    .setScale(mapScale);

  this.player = this.physics.add.sprite(120, 220, "tidus_right");
  this.player.setScale(0.6);
  this.player.setCollideWorldBounds(true);

  // size map with scale
  const mapWidth = this.map1.displayWidth + this.map2.displayWidth;
  const mapHeight = this.map1.displayHeight;

  this.physics.world.setBounds(0, 0, mapWidth, mapHeight);

  // collision group
  this.walls = this.add.group();

  const addWall = (x, y, width, height) => {
    const wall = this.add.rectangle(x, y, width, height, 0xff0000, 0.3);
    this.physics.add.existing(wall, true); // true = statique
    this.walls.add(wall);
    return wall;
  };

  // Map 1 border
  addWall(419, 0, 744, 95); // Up
  addWall(0, 400, 94, 800); // Left
  addWall(769, 158, 45, 220); // top-right
  addWall(769, 643, 45, 294); // bottom-right

  // Round of grass
  addWall(420, 321, 145, 116);

  // Great wall left
  addWall(199, 718, 305, 146);

  // Great wall right
  addWall(619, 718, 255, 146);

  // Collision joueur <-> murs
  this.walls.children.each((wall) => {
    this.physics.add.collider(this.player, wall);
  });

  this.keys = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.Z,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });

  // Camera
  this.cameras.main.setBounds(0, 0, mapWidth, mapHeight);
  this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
}

function update() {
  const speed = 150;

  this.player.setVelocity(0);

  if (this.keys.left.isDown) {
    this.player.setVelocityX(-speed);
    this.player.setTexture("tidus_left");
  } else if (this.keys.right.isDown) {
    this.player.setVelocityX(speed);
    this.player.setTexture("tidus_right");
  }

  if (this.keys.up.isDown) {
    this.player.setVelocityY(-speed);
    this.player.setTexture("tidus_back");
  } else if (this.keys.down.isDown) {
    this.player.setVelocityY(speed);
    this.player.setTexture("tidus_front");
  }
}
