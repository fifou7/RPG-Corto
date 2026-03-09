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
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("map", "Level_0.png");
  this.load.image("player", "../../Images/Tidus.png");
}

function create() {
  const mapScale = 2.4;

  this.mapImage = this.add.image(0, 0, "map").setOrigin(0).setScale(mapScale);

  this.player = this.physics.add.sprite(120, 220, "player");
  this.player.setScale(0.5);
  this.player.setCollideWorldBounds(true);

  // Ajuste la hitbox du perso si besoin
  this.player.body.setSize(this.player.width * 0.35, this.player.height * 0.55);
  this.player.body.setOffset(
    this.player.width * 0.32,
    this.player.height * 0.4,
  );

  // Taille réelle de la map une fois agrandie
  const mapWidth = this.mapImage.width * mapScale;
  const mapHeight = this.mapImage.height * mapScale;

  this.physics.world.setBounds(0, 0, mapWidth, mapHeight);

  // Groupe de collisions invisibles
  this.walls = this.add.group();

  const addWall = (x, y, width, height) => {
    const wall = this.add.rectangle(x, y, width, height, 0xff0000, 0.3);
    this.physics.add.existing(wall, true); // true = statique
    this.walls.add(wall);
    return wall;
  };

  // Bordures de la map
  addWall(mapWidth / 2, 5, mapWidth, 65); // haut
  addWall(5, mapHeight / 2, 65, mapHeight); // gauche
  addWall(mapWidth - 20, mapHeight / 2, 39, mapHeight); // droite
  addWall(mapWidth / 2, mapHeight - 5, mapWidth, 10); // bas

  // rond d'herbe
  addWall(325, 250, 112, 90);

  // Grand mur d'entrée gauche
  addWall(156, 551, 238, 105);

  // Grand mur d'entrée droite
  addWall(477, 551, 196, 105);

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
}

function update() {
  const speed = 150;

  this.player.setVelocity(0);

  if (this.keys.left.isDown) {
    this.player.setVelocityX(-speed);
  } else if (this.keys.right.isDown) {
    this.player.setVelocityX(speed);
  }

  if (this.keys.up.isDown) {
    this.player.setVelocityY(-speed);
  } else if (this.keys.down.isDown) {
    this.player.setVelocityY(speed);
  }
}
