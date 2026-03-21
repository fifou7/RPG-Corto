console.log("yo");

let gameScene;
let sceneReady = false;
let defeatStarted = false;
let victoryStarted = false;

class Characters {
  constructor() {
    this.isMovingToAttack = true;
    this.isRetreating = false;
    this.stepsMade = 0;
    this.sprite = undefined;
  }
}

let Tidus = new Characters();
let Sora = new Characters();
let Lunafreya = new Characters();
let Bombo1 = new Characters();
let Bombo2 = new Characters();
let BlackKnight = new Characters();

const config = {
  type: Phaser.AUTO,
  height: window.innerHeight,
  width: window.innerWidth,
  parent: "game-container",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },

  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: "100%",
    height: "100%",
    zoom: 1,
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);

console.log(game);

// Fonction helper pour récupérer le bon sprite idle (normal ou mid-life)
function getIdleTexture(character) {
  if (
    character.currentHP <= character.stats.Health / 2 &&
    character.currentHP > 0
  ) {
    return character.stats.name + "-mid-life";
  }
  return character.stats.name;
}

function preload() {
  //  Tidus
  this.load.image("Tidus", "../Images/Tidus.png");
  this.load.image("Tidus-atk-1", "../Images/Tidus-atk-1.png");
  this.load.image("Tidus-atk-2", "../Images/Tidus-atk-2.png");
  this.load.image("Tidus-atk-3", "../Images/Tidus-atk-3.png");
  this.load.image("Tidus-atk-4", "../Images/Tidus-atk-4.png");
  this.load.image("Tidus-atk-5", "../Images/Tidus-atk-5.png");
  this.load.image("Tidus-atk-6", "../Images/Tidus-atk-6.png");
  this.load.image("Tidus-atk-7", "../Images/Tidus-atk-7.png");
  this.load.image("Tidus-run", "../Images/Tidus-sprinte.png");
  this.load.image("Tidus-back", "../Images/Tidus-atk-7.png");
  this.load.image("Tidus-mid-life", "../Images/Tidus-mid-life.png");
  this.load.image("Tidus-win-1", "../Images/Tidus-win-1.png");
  this.load.image("Tidus-win-2", "../Images/Tidus-win-2.png");
  this.load.image("Tidus-win-3", "../Images/Tidus-win-3.png");
  this.load.image("Tidus-win-4", "../Images/Tidus-win-4.png");
  this.load.image("Tidus-win-5", "../Images/Tidus-win-5.png");
  this.load.image("Tidus-win-6", "../Images/Tidus-win-6.png");
  this.load.image("Tidus-win-7", "../Images/Tidus-win-7.png");
  this.load.image("Tidus-win-8", "../Images/Tidus-win-8.png");
  this.load.image("Tidus-win-9", "../Images/Tidus-win-9.png");
  this.load.image("Tidus-win-10", "../Images/Tidus-win-10.png");
  this.load.image("Tidus-death", "../Images/Tidus-death.png");
  this.load.image("Tidus-skill-1", "../Images/Tidus-skill-1.png");
  this.load.image("Tidus-skill-2", "../Images/Tidus-skill-2.png");
  this.load.image("Tidus-skill-3", "../Images/Tidus-skill-3.png");
  this.load.image("Tidus-skill-4", "../Images/Tidus-skill-4.png");
  this.load.image("Tidus-skill-5", "../Images/Tidus-skill-5.png");
  this.load.image("Tidus-skill-6", "../Images/Tidus-skill-6.png");
  this.load.image("Tidus-skill-7", "../Images/Tidus-skill-7.png");
  this.load.image("Tidus-skill-8", "../Images/Tidus-skill-8.png");
  this.load.image("Tidus-skill-9", "../Images/Tidus-skill-9.png");
  this.load.image("Tidus-skill-10", "../Images/Tidus-skill-10.png");
  this.load.image("Tidus-skill-11", "../Images/Tidus-skill-11.png");
  this.load.image("Tidus-skill-12", "../Images/Tidus-skill-12.png");
  this.load.image("Tidus-skill-13", "../Images/Tidus-skill-13.png");
  this.load.image("Tidus-skill-14", "../Images/Tidus-skill-14.png");
  this.load.image("Tidus-skill-15", "../Images/Tidus-skill-15.png");
  this.load.image("Tidus-skill-16", "../Images/Tidus-skill-16.png");
  this.load.image("Tidus-skill-17", "../Images/Tidus-skill-17.png");
  this.load.image("Tidus-skill-18", "../Images/Tidus-skill-18.png");
  this.load.image("Tidus-skill-19", "../Images/Tidus-skill-19.png");
  this.load.image("Tidus-skill-20", "../Images/Tidus-skill-20.png");
  this.load.image("Tidus-skill-21", "../Images/Tidus-skill-21.png");
  this.load.image("Tidus-skill-22", "../Images/Tidus-skill-22.png");
  this.load.image("Tidus-skill-23", "../Images/Tidus-skill-23.png");
  this.load.image("Tidus-skill-24", "../Images/Tidus-skill-24.png");

  //  Lunafreya
  this.load.image("Lunafreya", "../Images/Lunafreya.png");
  this.load.image("Lunafreya-atk-1", "../Images/Lunafreya-atk-1.png");
  this.load.image("Lunafreya-atk-2", "../Images/Lunafreya-atk-2.png");
  this.load.image("Lunafreya-atk-3", "../Images/Lunafreya-atk-3.png");
  this.load.image("Lunafreya-atk-4", "../Images/Lunafreya-atk-4.png");
  this.load.image("Lunafreya-atk-5", "../Images/Lunafreya-atk-5.png");
  this.load.image("Lunafreya-atk-6", "../Images/Lunafreya-atk-6.png");
  this.load.image("Lunafreya-atk-7", "../Images/Lunafreya-atk-7.png");
  this.load.image("Lunafreya-atk-8", "../Images/Lunafreya-atk-8.png");
  this.load.image("Lunafreya-atk-9", "../Images/Lunafreya-atk-9.png");
  this.load.image("Lunafreya-mid-life", "../Images/Lunafreya-mid-life.png");
  this.load.image("Lunafreya-win-1", "../Images/Lunafreya-win-1.png");
  this.load.image("Lunafreya-win-2", "../Images/Lunafreya-win-2.png");
  this.load.image("Lunafreya-win-3", "../Images/Lunafreya-win-3.png");
  this.load.image("Lunafreya-win-4", "../Images/Lunafreya-win-4.png");
  this.load.image("Lunafreya-win-5", "../Images/Lunafreya-win-5.png");
  this.load.image("Lunafreya-win-6", "../Images/Lunafreya-win-6.png");
  this.load.image("Lunafreya-win-7", "../Images/Lunafreya-win-7.png");
  this.load.image("Lunafreya-death", "../Images/Lunafreya-death.png");
  this.load.image("Lunafreya-skill-1", "../Images/Lunafreya-skill-1.png");
  this.load.image("Lunafreya-skill-2", "../Images/Lunafreya-skill-2.png");
  this.load.image("Lunafreya-skill-3", "../Images/Lunafreya-skill-3.png");
  this.load.image("Lunafreya-skill-4", "../Images/Lunafreya-skill-4.png");
  this.load.image("Lunafreya-skill-5", "../Images/Lunafreya-skill-5.png");
  this.load.image("Lunafreya-skill-6", "../Images/Lunafreya-skill-6.png");
  this.load.image("Lunafreya-skill-7", "../Images/Lunafreya-skill-7.png");
  this.load.image("Lunafreya-skill-8", "../Images/Lunafreya-skill-8.png");
  this.load.image("Lunafreya-skill-9", "../Images/Lunafreya-skill-9.png");
  this.load.image("Lunafreya-skill-10", "../Images/Lunafreya-skill-10.png");
  this.load.image("Lunafreya-skill-11", "../Images/Lunafreya-skill-11.png");
  this.load.image("Lunafreya-skill-12", "../Images/Lunafreya-skill-12.png");
  this.load.image("Lunafreya-skill-13", "../Images/Lunafreya-skill-13.png");
  this.load.image("Lunafreya-skill-14", "../Images/Lunafreya-skill-14.png");
  this.load.image("Lunafreya-skill-15", "../Images/Lunafreya-skill-15.png");
  this.load.image("Lunafreya-skill-16", "../Images/Lunafreya-skill-16.png");
  this.load.image("Lunafreya-skill-17", "../Images/Lunafreya-skill-17.png");

  //  Sora
  this.load.image("Sora", "../Images/Sora.png");
  this.load.image("Sora-atk-1", "../Images/Sora-atk-1.png");
  this.load.image("Sora-atk-2", "../Images/Sora-atk-2.png");
  this.load.image("Sora-atk-3", "../Images/Sora-atk-3.png");
  this.load.image("Sora-atk-4", "../Images/Sora-atk-4.png");
  this.load.image("Sora-atk-5", "../Images/Sora-atk-5.png");
  this.load.image("Sora-run", "../Images/Sora-run.png");
  this.load.image("Sora-back", "../Images/Sora-atk-5.png");
  this.load.image("Sora-mid-life", "../Images/Sora-mid-life.png");
  this.load.image("Sora-win-1", "../Images/Sora-win-1.png");
  this.load.image("Sora-win-2", "../Images/Sora-win-2.png");
  this.load.image("Sora-win-3", "../Images/Sora-win-3.png");
  this.load.image("Sora-win-4", "../Images/Sora-win-4.png");
  this.load.image("Sora-win-5", "../Images/Sora-win-5.png");
  this.load.image("Sora-win-6", "../Images/Sora-win-6.png");
  this.load.image("Sora-win-7", "../Images/Sora-win-7.png");
  this.load.image("Sora-win-8", "../Images/Sora-win-8.png");
  this.load.image("Sora-win-9", "../Images/Sora-win-9.png");
  this.load.image("Sora-win-10", "../Images/Sora-win-10.png");
  this.load.image("Sora-death", "../Images/Sora-death.png");
  this.load.image("Sora-skill-1", "../Images/Sora-skill-1.png");
  this.load.image("Sora-skill-2", "../Images/Sora-skill-2.png");
  this.load.image("Sora-skill-3", "../Images/Sora-skill-3.png");
  this.load.image("Sora-skill-4", "../Images/Sora-skill-4.png");
  this.load.image("Sora-skill-5", "../Images/Sora-skill-5.png");
  this.load.image("Sora-skill-6", "../Images/Sora-skill-6.png");
  this.load.image("Sora-skill-7", "../Images/Sora-skill-7.png");
  this.load.image("Sora-skill-8", "../Images/Sora-skill-8.png");
  this.load.image("Sora-skill-9", "../Images/Sora-skill-9.png");
  this.load.image("Sora-skill-10", "../Images/Sora-skill-10.png");
  this.load.image("Sora-skill-11", "../Images/Sora-skill-11.png");
  this.load.image("Sora-skill-12", "../Images/Sora-skill-12.png");
  this.load.image("Sora-skill-13", "../Images/Sora-skill-13.png");
  this.load.image("Sora-skill-14", "../Images/Sora-skill-14.png");
  this.load.image("Sora-skill-15", "../Images/Sora-skill-15.png");
  this.load.image("Sora-skill-16", "../Images/Sora-skill-16.png");
  this.load.image("Sora-skill-17", "../Images/Sora-skill-17.png");
  this.load.image("Sora-skill-18", "../Images/Sora-skill-18.png");
  this.load.image("Sora-skill-19", "../Images/Sora-skill-19.png");
  this.load.image("Sora-skill-20", "../Images/Sora-skill-20.png");
  this.load.image("Sora-skill-21", "../Images/Sora-skill-21.png");
  this.load.image("Sora-skill-22", "../Images/Sora-skill-22.png");
  this.load.image("Sora-skill-23", "../Images/Sora-skill-23.png");
  this.load.image("Sora-skill-24", "../Images/Sora-skill-24.png");
  this.load.image("Sora-skill-25", "../Images/Sora-skill-25.png");
  this.load.image("Sora-skill-26", "../Images/Sora-skill-26.png");
  this.load.image("Sora-skill-27", "../Images/Sora-skill-27.png");

  //  Background-fight
  this.load.image("background-fight", "../Images/image-de-fond-fight.png");

  //  Mob - BOMBO
  this.load.image("Bombo1", "../Images/Bombo.png");
  this.load.image("Bombo2", "../Images/Bombo.png");
  this.load.image("Bombo1-atk-1", "../Images/Bombo-atk-1.png");
  this.load.image("Bombo1-atk-2", "../Images/Bombo-atk-2.png");
  this.load.image("Bombo1-atk-3", "../Images/Bombo-atk-3.png");
  this.load.image("Bombo1-atk-4", "../Images/Bombo-atk-4.png");
  this.load.image("Bombo1-atk-5", "../Images/Bombo-atk-5.png");

  //  Mob - BlackKnight - State
  this.load.image("BlackKnight", "../Images/BlackKnight.png");
  this.load.image("BlackKnight-1", "../Images/BlackKnight-1.png");
  this.load.image("BlackKnight-2", "../Images/BlackKnight-2.png");

  //  Mob - BlackKnight - State
  this.load.image("BlackKnight-atk-1", "../Images/BlackKnight-atk-1.png");
  this.load.image("BlackKnight-atk-2", "../Images/BlackKnight-atk-2.png");
  this.load.image("BlackKnight-atk-3", "../Images/BlackKnight-atk-3.png");
  this.load.image("BlackKnight-atk-4", "../Images/BlackKnight-atk-4.png");
  this.load.image("BlackKnight-atk-5", "../Images/BlackKnight-atk-5.png");
  this.load.image("BlackKnight-atk-6", "../Images/BlackKnight-atk-6.png");
  this.load.image("BlackKnight-atk-7", "../Images/BlackKnight-atk-7.png");
  this.load.image("BlackKnight-atk-8", "../Images/BlackKnight-atk-8.png");
  this.load.image("BlackKnight-atk-9", "../Images/BlackKnight-atk-9.png");

  //  Mob - BlackKnight - run and back
  this.load.image("BlackKnight-run", "../Images/BlackKnight-run.png");
  this.load.image("BlackKnight-back", "../Images/BlackKnight-back.png");
}

async function create() {
  gameScene = this;
  const battleData = JSON.parse(sessionStorage.getItem("battleData") || "{}");
  console.log("battleData reçu :", battleData);

  // fetch
  const response = await fetch("http://localhost:3000/characters");
  const characters = await response.json();

  // fetch des mobs
  const responseMobs = await fetch("http://localhost:3000/mobs");
  const mobsRaw = await responseMobs.json();
  const mobs = Array.isArray(mobsRaw)
    ? mobsRaw
    : mobsRaw.mobs || mobsRaw.data || [];

  console.log(characters, mobs);

  // Verification
  const tidusData = characters.find((c) => c.name === "Tidus");
  const soraData = characters.find((c) => c.name === "Sora");
  const lunaData = characters.find((c) => c.name === "Lunafreya");

  const bomboData = mobs.find((m) => m.name === "Mibombo");
  const blackKnightData = mobs.find((m) => m.name === "BlackKnight");

  const mobPool = [bomboData, blackKnightData];
  // Tirer 2 mobs aléatoires
  let mob1Data = mobPool[Math.floor(Math.random() * mobPool.length)];
  let mob2Data = mobPool[Math.floor(Math.random() * mobPool.length)];

  console.log("Mob1:", mob1Data.name, "Mob2:", mob2Data.name);

  // Positions des slots
  const slot1 = { x: config.width * 0.75, y: 150 };
  const slot2 = { x: config.width * 0.75, y: 400 };

  // ATB speeds
  TIDUS_SPEED = 100 / tidusData.atb_jauge;
  SORA_SPEED = 100 / soraData.atb_jauge;
  LUNA_SPEED = 100 / lunaData.atb_jauge;
  BOMBO1_SPEED = 100 / mob1Data.atb_jauge;
  BOMBO2_SPEED = 100 / mob2Data.atb_jauge;

  // Background
  var backgroundImage = this.add.sprite(0, 0, "background-fight");
  backgroundImage.setDisplaySize(config.width, config.height);
  backgroundImage.setPosition(config.width / 2, config.height / 2);

  Tidus.alive = true;
  Sora.alive = true;
  Lunafreya.alive = true;

  // ANIMATIONS

  // Sora attaque
  this.anims.create({
    key: "Sora-atk",
    frames: [
      { key: "Sora-atk-1" },
      { key: "Sora-atk-2" },
      { key: "Sora-atk-3" },
      { key: "Sora-atk-4" },
      { key: "Sora-atk-5" },
    ],
    frameRate: 10,
    repeat: 0,
  });

  // Sora skill
  this.anims.create({
    key: "Sora-skill",
    frames: [
      { key: "Sora-skill-1" },
      { key: "Sora-skill-2" },
      { key: "Sora-skill-3" },
      { key: "Sora-skill-4" },
      { key: "Sora-skill-5" },
      { key: "Sora-skill-6" },
      { key: "Sora-skill-7" },
      { key: "Sora-skill-8" },
      { key: "Sora-skill-9" },
      { key: "Sora-skill-10" },
      { key: "Sora-skill-11" },
      { key: "Sora-skill-12" },
      { key: "Sora-skill-13" },
      { key: "Sora-skill-14" },
      { key: "Sora-skill-15" },
      { key: "Sora-skill-16" },
      { key: "Sora-skill-17" },
      { key: "Sora-skill-18" },
      { key: "Sora-skill-19" },
      { key: "Sora-skill-20" },
      { key: "Sora-skill-21" },
      { key: "Sora-skill-22" },
      { key: "Sora-skill-23" },
      { key: "Sora-skill-24" },
      { key: "Sora-skill-25" },
      { key: "Sora-skill-26" },
      { key: "Sora-skill-27" },
    ],
    frameRate: 9,
    repeat: 0,
  });

  // Sora win
  this.anims.create({
    key: "Sora-win",
    frames: [
      { key: "Sora-win-1" },
      { key: "Sora-win-2" },
      { key: "Sora-win-3" },
      { key: "Sora-win-4" },
      { key: "Sora-win-5" },
      { key: "Sora-win-6" },
      { key: "Sora-win-7" },
      { key: "Sora-win-8" },
      { key: "Sora-win-9" },
      { key: "Sora-win-10" },
    ],
    frameRate: 5,
    repeat: 0,
  });

  // Tidus attaque
  this.anims.create({
    key: "Tidus-atk",
    frames: [
      { key: "Tidus-atk-1" },
      { key: "Tidus-atk-2" },
      { key: "Tidus-atk-3" },
      { key: "Tidus-atk-4" },
      { key: "Tidus-atk-5" },
      { key: "Tidus-atk-6" },
      { key: "Tidus-atk-7" },
    ],
    frameRate: 12,
    repeat: 0,
  });

  // Tidus skill
  this.anims.create({
    key: "Tidus-skill",
    frames: [
      { key: "Tidus-skill-1" },
      { key: "Tidus-skill-2" },
      { key: "Tidus-skill-3" },
      { key: "Tidus-skill-4" },
      { key: "Tidus-skill-5" },
      { key: "Tidus-skill-6" },
      { key: "Tidus-skill-7" },
      { key: "Tidus-skill-8" },
      { key: "Tidus-skill-9" },
      { key: "Tidus-skill-10" },
      { key: "Tidus-skill-11" },
      { key: "Tidus-skill-12" },
      { key: "Tidus-skill-13" },
      { key: "Tidus-skill-14" },
      { key: "Tidus-skill-15" },
      { key: "Tidus-skill-16" },
      { key: "Tidus-skill-17" },
      { key: "Tidus-skill-18" },
      { key: "Tidus-skill-19" },
      { key: "Tidus-skill-20" },
      { key: "Tidus-skill-21" },
      { key: "Tidus-skill-22" },
      { key: "Tidus-skill-23" },
      { key: "Tidus-skill-24" },
    ],
    frameRate: 12,
    repeat: 0,
  });

  // Tidus win
  this.anims.create({
    key: "Tidus-win",
    frames: [
      { key: "Tidus-win-1" },
      { key: "Tidus-win-2" },
      { key: "Tidus-win-3" },
      { key: "Tidus-win-4" },
      { key: "Tidus-win-5" },
      { key: "Tidus-win-6" },
      { key: "Tidus-win-7" },
      { key: "Tidus-win-8" },
      { key: "Tidus-win-9" },
      { key: "Tidus-win-10" },
    ],
    frameRate: 6,
    repeat: 0,
  });

  // Lunafreya attaque
  this.anims.create({
    key: "Lunafreya-atk",
    frames: [
      { key: "Lunafreya-atk-1" },
      { key: "Lunafreya-atk-2" },
      { key: "Lunafreya-atk-3" },
      { key: "Lunafreya-atk-4" },
      { key: "Lunafreya-atk-5" },
      { key: "Lunafreya-atk-6" },
      { key: "Lunafreya-atk-7" },
    ],
    frameRate: 6,
    repeat: 0,
  });

  // Effet magique de Luna sur le mob
  this.anims.create({
    key: "luna-magic-effect",
    frames: [{ key: "Lunafreya-atk-8" }, { key: "Lunafreya-atk-9" }],
    frameRate: 6,
    repeat: 2,
  });

  // Lunafreya skill
  this.anims.create({
    key: "Lunafreya-skill",
    frames: [
      { key: "Lunafreya-skill-1" },
      { key: "Lunafreya-skill-2" },
      { key: "Lunafreya-skill-3" },
      { key: "Lunafreya-skill-4" },
      { key: "Lunafreya-skill-5" },
      { key: "Lunafreya-skill-6" },
      { key: "Lunafreya-skill-7" },
    ],
    frameRate: 7,
    repeat: 0,
  });

  // Effet magique de Luna sur le mob pour le skill
  this.anims.create({
    key: "luna-magic-effect-skill",
    frames: [
      { key: "Lunafreya-skill-8" },
      { key: "Lunafreya-skill-9" },
      { key: "Lunafreya-skill-10" },
      { key: "Lunafreya-skill-11" },
      { key: "Lunafreya-skill-12" },
      { key: "Lunafreya-skill-13" },
      { key: "Lunafreya-skill-14" },
      { key: "Lunafreya-skill-15" },
      { key: "Lunafreya-skill-16" },
      { key: "Lunafreya-skill-17" },
    ],
    frameRate: 7,
    repeat: 0,
  });

  // Lunafreya win
  this.anims.create({
    key: "Lunafreya-win",
    frames: [
      { key: "Lunafreya-win-1" },
      { key: "Lunafreya-win-2" },
      { key: "Lunafreya-win-3" },
      { key: "Lunafreya-win-4" },
      { key: "Lunafreya-win-5" },
      { key: "Lunafreya-win-6" },
      { key: "Lunafreya-win-7" },
    ],
    frameRate: 10,
    repeat: 0,
  });

  // Fireball des Bombos
  this.anims.create({
    key: "fireball-anim",
    frames: [
      { key: "Bombo1-atk-1" },
      { key: "Bombo1-atk-2" },
      { key: "Bombo1-atk-3" },
      { key: "Bombo1-atk-4" },
      { key: "Bombo1-atk-5" },
    ],
    frameRate: 10,
    repeat: 0,
  });

  // BlackKnight State
  this.anims.create({
    key: "BlackKnight-state-anim",
    frames: [
      { key: "BlackKnight" },
      { key: "BlackKnight-1" },
      { key: "BlackKnight-2" },
    ],
    frameRate: 3,
    repeat: -1,
  });

  // BlackKnight ATK
  this.anims.create({
    key: "BlackKnight-atk",
    frames: [
      { key: "BlackKnight-atk-1" },
      { key: "BlackKnight-atk-2" },
      { key: "BlackKnight-atk-3" },
      { key: "BlackKnight-atk-4" },
      { key: "BlackKnight-atk-5" },
      { key: "BlackKnight-atk-6" },
      { key: "BlackKnight-atk-7" },
      { key: "BlackKnight-atk-8" },
      { key: "BlackKnight-atk-9" },
    ],
    frameRate: 6,
    repeat: 0,
  });

  // Tidus
  Tidus.sprite = this.add.sprite(config.width * 0.26, 150, "Tidus");
  Tidus.sprite.setScale(0.7);
  Tidus.stats = tidusData;
  Tidus.currentHP = tidusData.Health;
  Tidus.currentMana = tidusData.MANA;
  Tidus.attackCount = 0;

  // Lunafreya
  Lunafreya.sprite = this.add.sprite(config.width * 0.22, 290, "Lunafreya");
  Lunafreya.sprite.setScale(0.7);
  Lunafreya.stats = lunaData;
  Lunafreya.currentHP = lunaData.Health;
  Lunafreya.attackCount = 0;
  Lunafreya.currentMana = Lunafreya.stats.MANA;
  Lunafreya.useSkill = false;

  // Sora
  Sora.sprite = this.add.sprite(config.width * 0.24, 420, "Sora");
  Sora.sprite.setScale(0.7);
  Sora.stats = soraData;
  Sora.currentHP = soraData.Health;
  Sora.currentMana = soraData.MANA;
  Sora.attackCount = 0;

  // ===== MOB 1 =====
  Bombo1.stats = mob1Data;
  Bombo1.currentHP = mob1Data.Health;
  Bombo1.alive = true;
  Bombo1.mobType = mob1Data.name;
  BOMBO1_SPEED = 100 / mob1Data.atb_jauge;

  if (mob1Data.name === "BlackKnight") {
    Bombo1.sprite = this.add.sprite(slot1.x, slot1.y, "BlackKnight");
    Bombo1.sprite.anims.play("BlackKnight-state-anim");
  } else {
    Bombo1.sprite = this.add.sprite(slot1.x, slot1.y, "Bombo1");
    Bombo1.sprite.setScale(0.6);
    this.tweens.add({
      targets: Bombo1.sprite,
      x: Bombo1.sprite.x + 10,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  // ===== MOB 2 =====
  Bombo2.stats = mob2Data;
  Bombo2.currentHP = mob2Data.Health;
  Bombo2.alive = true;
  Bombo2.mobType = mob2Data.name;
  BOMBO2_SPEED = 100 / mob2Data.atb_jauge;

  if (mob2Data.name === "BlackKnight") {
    Bombo2.sprite = this.add.sprite(slot2.x, slot2.y, "BlackKnight");
    Bombo2.sprite.anims.play("BlackKnight-state-anim");
  } else {
    Bombo2.sprite = this.add.sprite(slot2.x, slot2.y, "Bombo2");
    Bombo2.sprite.setScale(0.6);
    this.tweens.add({
      targets: Bombo2.sprite,
      x: Bombo2.sprite.x + 10,
      duration: 1800,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  sceneReady = true;
}

//afficher dmg
function showDamage(scene, target, damage) {
  let dmgText = scene.add
    .text(target.sprite.x, target.sprite.y - 50, damage, {
      fontSize: "32px",
      fontFamily: "Arial",
      color: "#ffffff",
      stroke: "#ff0000",
      strokeThickness: 4,
      fontStyle: "bold",
    })
    .setOrigin(0.5);

  scene.tweens.add({
    targets: dmgText,
    y: dmgText.y - 60,
    alpha: 0,
    duration: 1000,
    ease: "Power2",
    onComplete: () => dmgText.destroy(),
  });
}

const ATTACK_TABLE = {
  Tidus: { min: 120, max: 200 },
  Sora: { min: 129, max: 220 },
  Lunafreya: { min: 110, max: 145 },
  mibombo: { min: 100, max: 150 },
  Mibombo: { min: 100, max: 150 },
};

function calculateDamage(attackerName) {
  let range = ATTACK_TABLE[attackerName];
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

function killMob(scene, mob) {
  mob.alive = false;
  // Effet de disparition style FF
  scene.tweens.add({
    targets: mob.sprite,
    alpha: 0,
    duration: 300,
    yoyo: true,
    repeat: 3,
    onComplete: () => {
      mob.sprite.setVisible(false);
      mob.sprite.destroy();
    },
  });
}

// map return

function returnToMap(result) {
  const battleData = JSON.parse(sessionStorage.getItem("battleData") || "{}");

  sessionStorage.setItem(
    "battleReturn",
    JSON.stringify({
      result: result,
      returnX: battleData.returnX ?? 120,
      returnY: battleData.returnY ?? 220,
    }),
  );

  window.location.href = battleData.returnMap || "../assets/maps/index.html";
}

// Fonction pour déplacer le curseur
function moveCursor(persoName) {
  document.querySelectorAll(".perso-ligne").forEach((ligne) => {
    const cursor = ligne.querySelector(".cursor");
    if (cursor) cursor.remove();
  });

  document.querySelectorAll(".perso-ligne").forEach((ligne) => {
    const name = ligne.querySelector(".NamePerso");
    if (name && name.textContent.trim().includes(persoName)) {
      const img = document.createElement("img");
      img.className = "cursor";
      img.src = "../Images/cursor.png";
      name.prepend(img);
    }
  });
}

function getRandomHero() {
  let aliveHeroes = [Tidus, Sora, Lunafreya].filter((h) => h.alive);
  if (aliveHeroes.length === 0) return null;
  return aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
}

function getRandomBombo() {
  let aliveMobs = [];
  if (Bombo1.alive) aliveMobs.push(Bombo1);
  if (Bombo2.alive) aliveMobs.push(Bombo2);
  if (aliveMobs.length === 0) return null;
  return aliveMobs[Math.floor(Math.random() * aliveMobs.length)];
}

let soraATB = 0;
let tidusATB = 0;
let lunaATB = 0;
let bombo1ATB = 0;
let bombo2ATB = -30;
let blackknightATB = 0;

const ATB_MAX = 100;

let BOMBO1_SPEED = 100 / 8;
let BOMBO2_SPEED = 100 / 10;
let SORA_SPEED = 100 / 4;
let TIDUS_SPEED = 100 / 2;
let LUNA_SPEED = 100 / 3;
let BLACKKNIGHT_SPEED = 100 / 8;

let soraAttacking = false;
let tidusAttacking = false;
let lunaAttacking = false;
let bombo1Attacking = false;
let bombo2Attacking = false;
let blackknightAttacking = false;

function checkDeath(character) {
  if (character.currentHP <= 0 && character.alive) {
    character.alive = false;
    character.currentHP = 0;

    // Stopper TOUT
    gameScene.tweens.killTweensOf(character.sprite);
    if (character.sprite.anims) character.sprite.anims.stop();

    // Retour position initiale + sprite mort
    let homeX, homeY;
    if (character === Tidus) {
      homeX = config.width * 0.26;
      homeY = 150;
      tidusAttacking = true;
      tidusATB = 0;
      Tidus.isMovingToAttack = true;
      Tidus.isRetreating = false;
      Tidus.startX = null;
      Tidus.stepsMade = 0;
    }
    if (character === Sora) {
      homeX = config.width * 0.24;
      homeY = 420;
      soraAttacking = true;
      soraATB = 0;
      Sora.isMovingToAttack = true;
      Sora.isRetreating = false;
      Sora.startX = null;
      Sora.stepsMade = 0;
    }
    if (character === Lunafreya) {
      homeX = config.width * 0.22;
      homeY = 290;
      lunaAttacking = true;
      lunaATB = 0;
      Lunafreya.isMovingToAttack = true;
      Lunafreya.isRetreating = false;
      Lunafreya.startX = null;
      Lunafreya.stepsMade = 0;
    }

    character.sprite.setPosition(homeX, homeY);
    character.sprite.setTexture(character.stats.name + "-death");

    // Barre PV à 0
    let barre = document.querySelector(".jaugePV" + character.stats.name);
    if (barre) barre.style.width = "0%";
    let barreATB = document.querySelector(".jaugeATB" + character.stats.name);
    if (barreATB) barreATB.style.width = "0%";
  }
}

// Vérifie et applique le sprite mid-life
function checkMidLife(character) {
  if (!character.alive) return;
  if (
    character.currentHP <= character.stats.Health / 2 &&
    character.currentHP > 0
  ) {
    // Seulement changer si en idle
    let currentTexture = character.sprite.texture.key;
    let idleName = character.stats.name;
    // Si le sprite actuel est le idle normal
    if (currentTexture === idleName) {
      character.sprite.setTexture(idleName + "-mid-life");
    }
  }
}

function update(time, delta) {
  if (!sceneReady) return;
  if (!gameScene) return;

  checkDeath(Tidus);
  checkDeath(Sora);
  checkDeath(Lunafreya);

  // Vérifier mid-life en continu pour les persos au repos
  checkMidLife(Tidus);
  checkMidLife(Sora);
  checkMidLife(Lunafreya);

  let dt = delta / 1000;

  // ==================== SORA ATB ====================
  if (Sora.alive) {
    if (!soraAttacking) {
      soraATB += SORA_SPEED * dt;
      if (soraATB > ATB_MAX) soraATB = ATB_MAX;
      document.querySelector(".jaugeATBSora").style.width = soraATB + "%";
    }

    if (soraATB >= ATB_MAX && !soraAttacking) {
      if (!Bombo1.alive && !Bombo2.alive) {
        soraATB = 0;
        soraAttacking = false;
      } else {
        soraAttacking = true;
        soraATB = 0;
        document.querySelector(".jaugeATBSora").style.width = "0%";
        moveCursor("Sora");

        Sora.attackCount = (Sora.attackCount || 0) + 1;

        if (Sora.attackCount === 3 && Sora.currentMana >= 50) {
          Sora.useSkill = true;
          Sora.currentMana -= 50;
          Sora.attackCount = 0;

          let manaPercent = Math.max(
            0,
            (Sora.currentMana / Sora.stats.MANA) * 100,
          );
          let barreMana = document.querySelector(".jaugeManaSora");
          if (barreMana) barreMana.style.width = manaPercent + "%";
          console.log(">>> SORA SKILL ACTIVÉ !");
        } else {
          Sora.useSkill = false;
          if (Sora.attackCount >= 3) Sora.attackCount = 0;
        }

        if (!Sora.startX) {
          Sora.startX = Sora.sprite.x;
          Sora.startY = Sora.sprite.y;
          Sora.attackTarget = getRandomBombo();
          Sora.targetX = Sora.attackTarget.sprite.x - 120;
          Sora.targetY = Sora.attackTarget.sprite.y;
        }
      }
    }

    if (soraAttacking && Sora.startX) {
      // ALLER vers le mob
      if (Sora.isMovingToAttack) {
        if (Sora.stepsMade === 0) {
          Sora.sprite.setTexture("Sora-run");
        }

        let dx = Sora.targetX - Sora.sprite.x;
        let dy = Sora.targetY - Sora.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Sora.sprite.x += (dx / dist) * 5;
          Sora.sprite.y += (dy / dist) * 5;
          Sora.stepsMade += 1;
        } else {
          // Arrivé au contact
          Sora.isMovingToAttack = false;
          Sora.stepsMade = 0;

          let animKey = Sora.useSkill ? "Sora-skill" : "Sora-atk";
          Sora.sprite.anims.play(animKey);

          Sora.sprite.once("animationcomplete", () => {
            if (!Sora.alive) {
              soraAttacking = false;
              return;
            }

            let damage = calculateDamage("Sora");
            if (Sora.useSkill) damage = Math.floor(damage * 2.5);

            Sora.attackTarget.currentHP -= damage;

            // Barre de vie du mob
            let hpPercent = Math.max(
              0,
              (Sora.attackTarget.currentHP / Sora.attackTarget.stats.Health) *
                100,
            );
            let barreClass = ".jaugePV" + Sora.attackTarget.stats.name;
            let barre = document.querySelector(barreClass);
            if (barre) barre.style.width = hpPercent + "%";

            // Afficher dégâts
            showDamage(gameScene, Sora.attackTarget, damage);

            // Flash rouge
            Sora.attackTarget.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (Sora.attackTarget.sprite && Sora.attackTarget.sprite.active) {
                Sora.attackTarget.sprite.clearTint();
              }
            });

            // Mob mort ?
            if (Sora.attackTarget.currentHP <= 0) {
              killMob(gameScene, Sora.attackTarget);
            }

            // RETOUR
            Sora.isRetreating = true;
            Sora.sprite.setTexture("Sora-atk-5");
            // Sora.sprite.flipX = true;
          });
        }
      }

      // RETOUR vers la position de départ
      if (Sora.isRetreating) {
        let dx = Sora.startX - Sora.sprite.x;
        let dy = Sora.startY - Sora.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Sora.sprite.x += (dx / dist) * 5;
          Sora.sprite.y += (dy / dist) * 5;
        } else {
          Sora.sprite.x = Sora.startX;
          Sora.sprite.y = Sora.startY;
          Sora.sprite.flipX = false;
          Sora.sprite.setTexture(getIdleTexture(Sora));

          // Reset
          soraATB = 0;
          soraAttacking = false;
          Sora.useSkill = false;
          Sora.startX = null;
          Sora.startY = null;
          Sora.isRetreating = false;
          Sora.isMovingToAttack = true;
          Sora.stepsMade = 0;
        }
      }
    }
  }

  // ==================== TIDUS ATB ====================
  if (Tidus.alive) {
    if (!tidusAttacking) {
      tidusATB += TIDUS_SPEED * dt;
      if (tidusATB > ATB_MAX) tidusATB = ATB_MAX;
      document.querySelector(".jaugeATBTidus").style.width = tidusATB + "%";
    }

    if (tidusATB >= ATB_MAX && !tidusAttacking) {
      if (!Bombo1.alive && !Bombo2.alive) {
        tidusATB = 0;
        tidusAttacking = false;
      } else {
        tidusAttacking = true;
        Tidus.attackCount = (Tidus.attackCount || 0) + 1;
        console.log(
          "Tidus attackCount:",
          Tidus.attackCount,
          "mana:",
          Tidus.currentMana,
        );

        // À la 3e attaque, skill + reset compteur
        if (Tidus.attackCount === 3 && Tidus.currentMana >= 50) {
          Tidus.useSkill = true;
          Tidus.currentMana -= 50;
          Tidus.attackCount = 0;

          let manaPercent = Math.max(
            0,
            (Tidus.currentMana / Tidus.stats.MANA) * 100,
          );
          let barreMana = document.querySelector(".jaugeManaTidus");
          if (barreMana) barreMana.style.width = manaPercent + "%";
          console.log(">>> SKILL ACTIVÉ !");
        } else {
          Tidus.useSkill = false;
          if (Tidus.attackCount >= 3) Tidus.attackCount = 0;
        }

        if (!Tidus.startX) {
          Tidus.startX = Tidus.sprite.x;
          Tidus.startY = Tidus.sprite.y;
          Tidus.attackTarget = getRandomBombo();
          Tidus.targetX = Tidus.attackTarget.sprite.x - 120;
          Tidus.targetY = Tidus.attackTarget.sprite.y;
        }
      }
    }

    // ===== MOUVEMENT + ATTAQUE + RETOUR DE TIDUS =====
    if (tidusAttacking && Tidus.startX) {
      // PHASE 1 : COURSE VERS L'ENNEMI
      if (Tidus.isMovingToAttack) {
        Tidus.sprite.setTexture("Tidus-run");
        let dx = Tidus.targetX - Tidus.sprite.x;
        let dy = Tidus.targetY - Tidus.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Tidus.sprite.x += (dx / dist) * 5;
          Tidus.sprite.y += (dy / dist) * 5;
        } else {
          // Arrivé devant l'ennemi → lancer l'animation d'attaque
          Tidus.isMovingToAttack = false;

          let animKey = Tidus.useSkill ? "Tidus-skill" : "Tidus-atk";
          Tidus.sprite.anims.play(animKey);

          Tidus.sprite.once("animationcomplete", () => {
            if (!Tidus.alive) {
              tidusAttacking = false;
              return;
            }

            // Calcul dégâts
            let damage = calculateDamage("Tidus");
            if (Tidus.useSkill) damage = Math.floor(damage * 2.5);

            Tidus.attackTarget.currentHP -= damage;

            // Barre de vie du mob
            let hpPercent = Math.max(
              0,
              (Tidus.attackTarget.currentHP / Tidus.attackTarget.stats.Health) *
                100,
            );
            let barreClass = ".jaugePV" + Tidus.attackTarget.stats.name;
            let barre = document.querySelector(barreClass);
            if (barre) barre.style.width = hpPercent + "%";

            // Afficher dégâts
            showDamage(gameScene, Tidus.attackTarget, damage);

            // Flash rouge
            Tidus.attackTarget.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (
                Tidus.attackTarget.sprite &&
                Tidus.attackTarget.sprite.active
              ) {
                Tidus.attackTarget.sprite.clearTint();
              }
            });

            // Mob mort ?
            if (Tidus.attackTarget.currentHP <= 0) {
              killMob(gameScene, Tidus.attackTarget);
            }

            Tidus.sprite.setTexture("Tidus-back");
            Tidus.isRetreating = true;
          });
        }
      }

      // PHASE 2 : RETOUR À LA POSITION INITIALE
      if (Tidus.isRetreating) {
        let dx = Tidus.startX - Tidus.sprite.x;
        let dy = Tidus.startY - Tidus.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Tidus.sprite.x += (dx / dist) * 5;
          Tidus.sprite.y += (dy / dist) * 5;
        } else {
          Tidus.sprite.x = Tidus.startX;
          Tidus.sprite.y = Tidus.startY;
          Tidus.sprite.setTexture(getIdleTexture(Tidus));
          document.querySelector(".jaugeATBTidus").style.width = "0%";
          moveCursor("Tidus");
          Tidus.stepsMade = 0;
          Tidus.startX = null;
          tidusATB = 0;
          tidusAttacking = false;
          Tidus.isRetreating = false;
          Tidus.isMovingToAttack = true;
        }
      }
    }
  } // ← fin du if (Tidus.alive)

  // Permet de récupérer la distance entre deux éléments
  // Je te laisse ça là, ça pourra t'être utile
  // console.log(
  //   Phaser.Math.Distance.BetweenPoints(Tidus.sprite, Bombo1.sprite)
  // );

  // ==================== LUNAFREYA ATB ====================
  if (Lunafreya.alive) {
    if (!lunaAttacking) {
      lunaATB += LUNA_SPEED * dt;
      if (lunaATB > ATB_MAX) lunaATB = ATB_MAX;
      let barreLuna = document.querySelector(".jaugeATBLuna");
      if (barreLuna) barreLuna.style.width = lunaATB + "%";
    }

    if (lunaATB >= ATB_MAX && !lunaAttacking) {
      if (!Bombo1.alive && !Bombo2.alive) {
        lunaATB = 0;
        lunaAttacking = false;
      } else {
        lunaATB = 0;
        lunaAttacking = true;
        document.querySelector(".jaugeATBLuna").style.width = "0%";
        moveCursor("Lunafreya");

        Lunafreya.attackCount = (Lunafreya.attackCount || 0) + 1;
        console.log(
          "Luna attackCount:",
          Lunafreya.attackCount,
          "Mana:",
          Lunafreya.currentMana,
        );

        // Skill à la 3e attaque si assez de mana
        if (Lunafreya.attackCount >= 3 && Lunafreya.currentMana >= 50) {
          Lunafreya.useSkill = true;
          Lunafreya.currentMana -= 50;
          Lunafreya.attackCount = 0;

          let manaPercent = Math.max(
            0,
            (Lunafreya.currentMana / Lunafreya.stats.MANA) * 100,
          );
          let barreMana = document.querySelector(".jaugeManaLunafreya");
          if (barreMana) barreMana.style.width = manaPercent + "%";
          console.log(">>> LUNA SKILL ACTIVÉ !");
        } else {
          Lunafreya.useSkill = false;
        }

        let target = getRandomBombo();

        let animKey = Lunafreya.useSkill ? "Lunafreya-skill" : "Lunafreya-atk";
        Lunafreya.sprite.anims.play(animKey);

        Lunafreya.sprite.once("animationcomplete", () => {
          if (!Lunafreya.alive) {
            lunaAttacking = false;
            return;
          }

          // Luna reste sur la dernière frame pendant l'effet
          if (Lunafreya.useSkill) {
            Lunafreya.sprite.setTexture("Lunafreya-skill-7");
          } else {
            Lunafreya.sprite.setTexture("Lunafreya-atk-7");
          }

          // Effet magique sur le mob
          let effectKey = Lunafreya.useSkill
            ? "luna-magic-effect-skill"
            : "luna-magic-effect";
          let effectTexture = Lunafreya.useSkill
            ? "Lunafreya-skill-8"
            : "Lunafreya-atk-8";

          let magicEffect = gameScene.add.sprite(
            target.sprite.x,
            target.sprite.y,
            effectTexture,
          );
          magicEffect.setScale(0.5);
          magicEffect.anims.play(effectKey);

          magicEffect.once("animationcomplete", () => {
            magicEffect.destroy();

            // Calcul dégâts
            let damage = calculateDamage("Lunafreya");
            if (Lunafreya.useSkill) damage = Math.floor(damage * 2.5);

            target.currentHP -= damage;

            let hpPercent = Math.max(
              0,
              (target.currentHP / target.stats.Health) * 100,
            );
            let barreClass = ".jaugePV" + target.stats.name;
            let barre = document.querySelector(barreClass);
            if (barre) barre.style.width = hpPercent + "%";

            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active) {
                target.sprite.clearTint();
              }
            });

            if (target.currentHP <= 0) {
              killMob(gameScene, target);
            }

            // Luna retourne en idle
            Lunafreya.sprite.setTexture(getIdleTexture(Lunafreya));
            lunaAttacking = false;
            Lunafreya.useSkill = false;
          });
        });
      }
    }
  }

  // ==================== MOB SLOT 1 ATB ====================
  if (Bombo1.alive) {
    if (!bombo1Attacking) {
      bombo1ATB += BOMBO1_SPEED * dt;
      if (bombo1ATB > ATB_MAX) bombo1ATB = ATB_MAX;
    }

    if (bombo1ATB >= ATB_MAX && !bombo1Attacking) {
      let allHeroesDead = !Tidus.alive && !Sora.alive && !Lunafreya.alive;
      if (allHeroesDead) {
        bombo1ATB = 0;
        bombo1Attacking = false;
      } else {
        bombo1Attacking = true;
        bombo1ATB = 0;
        let target = getRandomHero();
        Bombo1.attackTarget = target;

        if (Bombo1.mobType === "BlackKnight") {
          // === BLACKKNIGHT : avance, frappe, revient ===
          Bombo1.startX = Bombo1.sprite.x;
          Bombo1.startY = Bombo1.sprite.y;
          Bombo1.targetX = target.sprite.x + 120;
          Bombo1.targetY = target.sprite.y;
          Bombo1.isMovingToAttack = true;
          Bombo1.isRetreating = false;
          Bombo1.sprite.anims.stop();
          Bombo1.sprite.setTexture("BlackKnight-run");
        } else {
          // === BOMBO : lance fireball ===
          let fireball = gameScene.add.sprite(
            Bombo1.sprite.x,
            Bombo1.sprite.y,
            "Bombo1-atk-1",
          );
          fireball.setScale(0.5);
          fireball.anims.play("fireball-anim");

          gameScene.tweens.add({
            targets: fireball,
            x: target.sprite.x,
            y: target.sprite.y,
            duration: 800,
            ease: "Linear",
            onComplete: () => {
              let damage = calculateDamage("Mibombo");
              target.currentHP -= damage;
              showDamage(gameScene, target, damage);

              target.sprite.setTint(0xff0000);
              gameScene.time.delayedCall(300, () => {
                if (target.sprite && target.sprite.active)
                  target.sprite.clearTint();
              });

              checkDeath(target);

              let hpPercent = Math.max(
                0,
                (target.currentHP / target.stats.Health) * 100,
              );
              let barre = document.querySelector(
                ".jaugePV" + target.stats.name,
              );
              if (barre) barre.style.width = hpPercent + "%";

              fireball.destroy();
              bombo1Attacking = false;
            },
          });
        }
      }
    }

    // === BLACKKNIGHT MOUVEMENT (slot 1) ===
    if (Bombo1.mobType === "BlackKnight" && bombo1Attacking && Bombo1.startX) {
      if (Bombo1.isMovingToAttack && !Bombo1.isRetreating) {
        let dx = Bombo1.targetX - Bombo1.sprite.x;
        let dy = Bombo1.targetY - Bombo1.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Bombo1.sprite.x += (dx / dist) * 4;
          Bombo1.sprite.y += (dy / dist) * 4;
        } else {
          Bombo1.isMovingToAttack = false;
          Bombo1.sprite.anims.play("BlackKnight-atk");

          Bombo1.sprite.once("animationcomplete", () => {
            let target = Bombo1.attackTarget;
            let damage = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
            target.currentHP -= damage;
            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active)
                target.sprite.clearTint();
            });

            let hpPercent = Math.max(
              0,
              (target.currentHP / target.stats.Health) * 100,
            );
            let barre = document.querySelector(".jaugePV" + target.stats.name);
            if (barre) barre.style.width = hpPercent + "%";

            checkDeath(target);

            Bombo1.isRetreating = true;
            Bombo1.sprite.anims.stop();
            Bombo1.sprite.setTexture("BlackKnight-back");
          });
        }
      }

      if (Bombo1.isRetreating) {
        let dx = Bombo1.startX - Bombo1.sprite.x;
        let dy = Bombo1.startY - Bombo1.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Bombo1.sprite.x += (dx / dist) * 4;
          Bombo1.sprite.y += (dy / dist) * 4;
        } else {
          Bombo1.sprite.x = Bombo1.startX;
          Bombo1.sprite.y = Bombo1.startY;
          Bombo1.isRetreating = false;
          Bombo1.isMovingToAttack = true;
          Bombo1.startX = null;
          bombo1Attacking = false;
          Bombo1.sprite.anims.play("BlackKnight-state-anim");
        }
      }
    }
  }

  // ==================== MOB SLOT 2 ATB ====================
  if (Bombo2.alive) {
    if (!bombo2Attacking) {
      bombo2ATB += BOMBO2_SPEED * dt;
      if (bombo2ATB > ATB_MAX) bombo2ATB = ATB_MAX;
    }

    if (bombo2ATB >= ATB_MAX && !bombo2Attacking) {
      let allHeroesDead = !Tidus.alive && !Sora.alive && !Lunafreya.alive;
      if (allHeroesDead) {
        bombo2ATB = 0;
        bombo2Attacking = false;
      } else {
        bombo2Attacking = true;
        bombo2ATB = 0;
        let target = getRandomHero();
        Bombo2.attackTarget = target;

        if (Bombo2.mobType === "BlackKnight") {
          // === BLACKKNIGHT : avance, frappe, revient ===
          Bombo2.startX = Bombo2.sprite.x;
          Bombo2.startY = Bombo2.sprite.y;
          Bombo2.targetX = target.sprite.x + 120;
          Bombo2.targetY = target.sprite.y;
          Bombo2.isMovingToAttack = true;
          Bombo2.isRetreating = false;
          Bombo2.sprite.anims.stop();
          Bombo2.sprite.setTexture("BlackKnight-run");
        } else {
          // === BOMBO : lance fireball ===
          let fireball = gameScene.add.sprite(
            Bombo2.sprite.x,
            Bombo2.sprite.y,
            "Bombo1-atk-1",
          );
          fireball.setScale(0.5);
          fireball.anims.play("fireball-anim");

          gameScene.tweens.add({
            targets: fireball,
            x: target.sprite.x,
            y: target.sprite.y,
            duration: 600,
            ease: "Linear",
            onComplete: () => {
              fireball.destroy();
              if (!target.alive) {
                bombo2Attacking = false;
                return;
              }

              let damage = calculateDamage("Mibombo");
              target.currentHP -= damage;
              showDamage(gameScene, target, damage);

              target.sprite.setTint(0xff0000);
              gameScene.time.delayedCall(300, () => {
                if (target.sprite && target.sprite.active)
                  target.sprite.clearTint();
              });

              let pvPercent = Math.max(
                0,
                (target.currentHP / target.stats.Health) * 100,
              );
              let barre = document.querySelector(
                ".jaugePV" + target.stats.name,
              );
              if (barre) barre.style.width = pvPercent + "%";

              checkDeath(target);
              bombo2Attacking = false;
            },
          });
        }
      }
    }

    // === BLACKKNIGHT SLOT 2 : mouvement vers héros ===
    if (bombo2Attacking && Bombo2.mobType === "BlackKnight" && Bombo2.startX) {
      if (Bombo2.isMovingToAttack) {
        Bombo2.sprite.setTexture("BlackKnight-run");
        let dx = Bombo2.targetX - Bombo2.sprite.x;
        let dy = Bombo2.targetY - Bombo2.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Bombo2.sprite.x += (dx / dist) * 4;
          Bombo2.sprite.y += (dy / dist) * 4;
        } else {
          Bombo2.isMovingToAttack = false;
          Bombo2.sprite.anims.play("BlackKnight-atk");

          Bombo2.sprite.once("animationcomplete", () => {
            let target = Bombo2.attackTarget;
            if (!target || !target.alive) {
              Bombo2.isRetreating = true;
              Bombo2.sprite.anims.stop();
              Bombo2.sprite.setTexture("BlackKnight-back");
              return;
            }

            let damage = calculateDamage("Mibombo");
            target.currentHP -= damage;
            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active)
                target.sprite.clearTint();
            });

            let pvPercent = Math.max(
              0,
              (target.currentHP / target.stats.Health) * 100,
            );
            let barre = document.querySelector(".jaugePV" + target.stats.name);
            if (barre) barre.style.width = pvPercent + "%";

            checkDeath(target);

            Bombo2.isRetreating = true;
            Bombo2.sprite.anims.stop();
            Bombo2.sprite.setTexture("BlackKnight-back");
          });
        }
      }

      if (Bombo2.isRetreating) {
        let dx = Bombo2.startX - Bombo2.sprite.x;
        let dy = Bombo2.startY - Bombo2.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Bombo2.sprite.x += (dx / dist) * 4;
          Bombo2.sprite.y += (dy / dist) * 4;
        } else {
          Bombo2.sprite.x = Bombo2.startX;
          Bombo2.sprite.y = Bombo2.startY;
          Bombo2.isRetreating = false;
          Bombo2.isMovingToAttack = true;
          Bombo2.startX = null;
          bombo2Attacking = false;
          Bombo2.sprite.anims.play("BlackKnight-state-anim");
        }
      }
    }
  }

  // ==================== Détecte fin de combat ====================
  let allMobsDead = !Bombo1.alive && !Bombo2.alive;
  console.log("Bombo1.alive:", Bombo1.alive, "Bombo2.alive:", Bombo2.alive);

  if (allMobsDead && !victoryStarted) {
    victoryStarted = true;

    // Stopper tous les ATB
    soraAttacking = true;
    tidusAttacking = true;
    lunaAttacking = true;
    blackknightAttacking = true;

    // STOPPER toutes les anims et tweens en cours
    gameScene.tweens.killTweensOf(Tidus.sprite);
    gameScene.tweens.killTweensOf(Sora.sprite);
    gameScene.tweens.killTweensOf(Lunafreya.sprite);
    if (Tidus.sprite.anims) Tidus.sprite.anims.stop();
    if (Sora.sprite.anims) Sora.sprite.anims.stop();
    if (Lunafreya.sprite.anims) Lunafreya.sprite.anims.stop();

    // Forcer reset des états
    Tidus.isMovingToAttack = true;
    Tidus.isRetreating = false;
    Tidus.startX = null;
    Sora.isMovingToAttack = true;
    Sora.isRetreating = false;
    Sora.startX = null;
    Lunafreya.isMovingToAttack = true;
    Lunafreya.isRetreating = false;
    Lunafreya.startX = null;

    // Positions initiales
    let tidusHomeX = config.width * 0.26,
      tidusHomeY = 150;
    let soraHomeX = config.width * 0.24,
      soraHomeY = 420;
    let lunaHomeX = config.width * 0.22,
      lunaHomeY = 290;

    // TÉLÉPORTER immédiatement puis animer
    Tidus.sprite.setPosition(tidusHomeX, tidusHomeY);
    Sora.sprite.setPosition(soraHomeX, soraHomeY);
    Lunafreya.sprite.setPosition(lunaHomeX, lunaHomeY);

    // Lancer les anims de victoire (seulement si vivant)
    if (Tidus.alive) Tidus.sprite.anims.play("Tidus-win");
    if (Sora.alive) Sora.sprite.anims.play("Sora-win");
    if (Lunafreya.alive) Lunafreya.sprite.anims.play("Lunafreya-win");

    // Après repositionnement : texte VICTORY
    gameScene.time.delayedCall(800, () => {
      let hud = document.querySelector(".ActionBar");
      if (hud) hud.style.display = "none";

      let victoryText = gameScene.add
        .text(config.width / 2, config.height / 2 - 80, "VICTORY!", {
          fontSize: "64px",
          fontFamily: "Arial",
          color: "#FFD700",
          stroke: "#000",
          strokeThickness: 6,
        })
        .setOrigin(0.5);

      victoryText.setScale(0);
      gameScene.tweens.add({
        targets: victoryText,
        scale: 1,
        duration: 600,
        ease: "Back.easeOut",
      });

      gameScene.time.delayedCall(3000, () => {
        returnToMap("victory");
      });
    });
  }

  // Détecte défaite
  let allHeroesDead =
    Tidus.currentHP <= 0 && Sora.currentHP <= 0 && Lunafreya.currentHP <= 0;

  if (allHeroesDead && !victoryStarted && !defeatStarted) {
    defeatStarted = true;

    // Stopper tous les ATB
    soraAttacking = true;
    tidusAttacking = true;
    lunaAttacking = true;
    bombo1Attacking = true;
    bombo2Attacking = true;

    // Masquer le HUD
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Texte LOOSE
    let defeatText = gameScene.add
      .text(config.width / 2, config.height / 2 - 80, "LOOSE...", {
        fontSize: "64px",
        fontFamily: "Arial",
        color: "#FF0000",
        stroke: "#000",
        strokeThickness: 6,
      })
      .setOrigin(0.5);

    defeatText.setScale(0);
    gameScene.tweens.add({
      targets: defeatText,
      scale: 1,
      duration: 600,
      ease: "Back.easeOut",
    });

    // Transition après 3 secondes
    gameScene.time.delayedCall(3000, () => {
      returnToMap("defeat");
    });
  }
}
