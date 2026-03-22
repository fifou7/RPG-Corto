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
    update: update
  },

  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: "100%",
    height: "100%",
    zoom: 1
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);

console.log(game);

// Fonction helper pour récupérer le bon sprite idle (normal ou mid-life)
function getIdleTexture(character) {
  if (character.currentHP <= character.stats.Health / 2 && character.currentHP > 0) {
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

  // fetch
  const response = await fetch("http://localhost:3000/characters");
  const characters = await response.json();

  // fetch des mobs
  const responseMobs = await fetch("http://localhost:3000/mobs");
  const mobsRaw = await responseMobs.json();
  const mobs = Array.isArray(mobsRaw) ? mobsRaw : mobsRaw.mobs || mobsRaw.data || [];

  console.log(characters, mobs);

  // Verification
  const tidusData = characters.find(c => c.name === "Tidus");
  const soraData = characters.find(c => c.name === "Sora");
  const lunaData = characters.find(c => c.name === "Lunafreya");

  const bomboData = mobs.find(m => m.name === "Mibombo");
  const blackKnightData = mobs.find(m => m.name === "BlackKnight");

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
      { key: "Sora-atk-5" }
    ],
    frameRate: 10,
    repeat: 0
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
      { key: "Sora-skill-27" }
    ],
    frameRate: 9,
    repeat: 0
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
      { key: "Sora-win-10" }
    ],
    frameRate: 5,
    repeat: 0
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
      { key: "Tidus-atk-7" }
    ],
    frameRate: 12,
    repeat: 0
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
      { key: "Tidus-skill-24" }
    ],
    frameRate: 12,
    repeat: 0
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
      { key: "Tidus-win-10" }
    ],
    frameRate: 6,
    repeat: 0
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
      { key: "Lunafreya-atk-7" }
    ],
    frameRate: 6,
    repeat: 0
  });

  // Effet magique de Luna sur le mob
  this.anims.create({
    key: "luna-magic-effect",
    frames: [
      { key: "Lunafreya-atk-8" },
      { key: "Lunafreya-atk-9" }
    ],
    frameRate: 6,
    repeat: 2
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
      { key: "Lunafreya-skill-7" }
    ],
    frameRate: 7,
    repeat: 0
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
      { key: "Lunafreya-skill-17" }
    ],
    frameRate: 7,
    repeat: 0
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
      { key: "Lunafreya-win-7" }
    ],
    frameRate: 10,
    repeat: 0
  });

  // Fireball des Bombos
  this.anims.create({
    key: "fireball-anim",
    frames: [
      { key: "Bombo1-atk-1" },
      { key: "Bombo1-atk-2" },
      { key: "Bombo1-atk-3" },
      { key: "Bombo1-atk-4" },
      { key: "Bombo1-atk-5" }
    ],
    frameRate: 10,
    repeat: 0
  });

  // BlackKnight State
  this.anims.create({
    key: "BlackKnight-state-anim",
    frames: [
      { key: "BlackKnight" },
      { key: "BlackKnight-1" },
      { key: "BlackKnight-2" }
    ],
    frameRate: 3,
    repeat: -1
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
      { key: "BlackKnight-atk-9" }
    ],
    frameRate: 6,
    repeat: 0
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
      ease: 'Sine.easeInOut'
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
      ease: 'Sine.easeInOut'
    });
  }

  sceneReady = true;
}


//afficher dmg
function showDamage(scene, target, damage) {
  let dmgText = scene.add.text(target.sprite.x, target.sprite.y - 50, damage, {
    fontSize: '32px',
    fontFamily: 'Arial',
    color: '#ffffff',
    stroke: '#ff0000',
    strokeThickness: 4,
    fontStyle: 'bold'
  }).setOrigin(0.5);

  scene.tweens.add({
    targets: dmgText,
    y: dmgText.y - 60,
    alpha: 0,
    duration: 1000,
    ease: 'Power2',
    onComplete: () => dmgText.destroy()
  });
}

const ATTACK_TABLE = {
  'Tidus': { min: 515, max: 620 },
  'Sora': { min: 290, max: 611 },
  'Lunafreya': { min: 411, max: 712 },
  'mibombo': { min: 100, max: 150 },
  'Mibombo': { min: 100, max: 150 }
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
    }
  });
}

// Fonction pour déplacer le curseur
function moveCursor(persoName) {
  document.querySelectorAll(".perso-ligne").forEach(ligne => {
    const cursor = ligne.querySelector(".cursor");
    if (cursor) cursor.remove();
  });

  document.querySelectorAll(".perso-ligne").forEach(ligne => {
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
  let aliveHeroes = [Tidus, Sora, Lunafreya].filter(h => h.alive);
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
      homeX = config.width * 0.26; homeY = 150;
      tidusAttacking = true; tidusATB = 0;
      Tidus.isMovingToAttack = true; Tidus.isRetreating = false; Tidus.startX = null; Tidus.stepsMade = 0;
    }
    if (character === Sora) {
      homeX = config.width * 0.24; homeY = 420;
      soraAttacking = true; soraATB = 0;
      Sora.isMovingToAttack = true; Sora.isRetreating = false; Sora.startX = null; Sora.stepsMade = 0;
    }
    if (character === Lunafreya) {
      homeX = config.width * 0.22; homeY = 290;
      lunaAttacking = true; lunaATB = 0;
      Lunafreya.isMovingToAttack = true; Lunafreya.isRetreating = false; Lunafreya.startX = null; Lunafreya.stepsMade = 0;
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
  if (character.currentHP <= character.stats.Health / 2 && character.currentHP > 0) {
    // Seulement changer si en idle
    let currentTexture = character.sprite.texture.key;
    let idleName = character.stats.name;
    // Si le sprite actuel est le idle normal
    if (currentTexture === idleName) {
      character.sprite.setTexture(idleName + "-mid-life");
    }
  }
}


let actionQueue = []; // File d'attente des actions
let currentAction = null; // L'action en cours
let atbPaused = false; // Pause pendant une action


function update(time, delta) {
    if (!sceneReady) return;
    let dt = delta / 1000;

    if (!atbPaused) {
        if (Tidus.alive) {
            tidusATB += TIDUS_SPEED * dt;
            if (tidusATB >= ATB_MAX && !actionQueue.includes("Tidus")) {
                tidusATB = ATB_MAX;
                actionQueue.push("Tidus");
            }
        }
        if (Sora.alive) {
            soraATB += SORA_SPEED * dt;
            if (soraATB >= ATB_MAX && !actionQueue.includes("Sora")) {
                soraATB = ATB_MAX;
                actionQueue.push("Sora");
            }
        }
        if (Lunafreya.alive) {
            lunaATB += LUNA_SPEED * dt;
            if (lunaATB >= ATB_MAX && !actionQueue.includes("Lunafreya")) {
                lunaATB = ATB_MAX;
                actionQueue.push("Lunafreya");
            }
        }
        if (Bombo1.alive) {
            bombo1ATB += BOMBO1_SPEED * dt;
            if (bombo1ATB >= ATB_MAX && !actionQueue.includes("Bombo1")) {
                bombo1ATB = ATB_MAX;
                actionQueue.push("Bombo1");
            }
        }
        if (Bombo2.alive) {
            bombo2ATB += BOMBO2_SPEED * dt;
            if (bombo2ATB >= ATB_MAX && !actionQueue.includes("Bombo2")) {
                bombo2ATB = ATB_MAX;
                actionQueue.push("Bombo2");
            }
        }

        // Barres visuelles
        let barreATBTidus = document.querySelector(".jaugeATBTidus");
        if (barreATBTidus) barreATBTidus.style.width = tidusATB + "%";
        let barreATBSora = document.querySelector(".jaugeATBSora");
        if (barreATBSora) barreATBSora.style.width = soraATB + "%";
        let barreATBLuna = document.querySelector(".jaugeATBLuna");
        if (barreATBLuna) barreATBLuna.style.width = lunaATB + "%";

        if (actionQueue.length > 0 && !currentAction) {
            atbPaused = true;
            currentAction = actionQueue.shift();
            startAction(currentAction);
        }
    }

    // APPEL de updateCurrentAction
    if (currentAction) {
        updateCurrentAction();
    }

    // VICTOIRE
    // VICTOIRE
if (!Bombo1.alive && !Bombo2.alive && !victoryStarted && !defeatStarted) {
    victoryStarted = true;
    atbPaused = true;
    currentAction = null;
    actionQueue = [];

    // Stopper les héros
    [Tidus, Sora, Lunafreya].forEach(hero => {
        gameScene.tweens.killTweensOf(hero.sprite);
        if (hero.sprite.anims) hero.sprite.anims.stop();
        hero.isMovingToAttack = true;
        hero.isRetreating = false;
        hero.startX = null;
    });

    // Repositionner et jouer anim win
    let homes = {
        Tidus:     { x: config.width * 0.26, y: 150 },
        Sora:      { x: config.width * 0.24, y: 420 },
        Lunafreya: { x: config.width * 0.22, y: 290 }
    };

    [Tidus, Sora, Lunafreya].forEach(hero => {
        let home = homes[hero.stats.name];
        hero.sprite.setPosition(home.x, home.y);
        if (hero.alive) {
            hero.sprite.anims.play(hero.stats.name + "-win");
        }
    });

    // Cacher le HUD
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Texte VICTORY style FF
    gameScene.time.delayedCall(500, () => {
        let victoryText = gameScene.add.text(
            config.width / 2, config.height / 2 - 80,
            "VICTORY!",
            {
                fontSize: "64px",
                fontFamily: "Arial",
                color: "#FFD700",
                stroke: "#000",
                strokeThickness: 6
            }
        ).setOrigin(0.5);

        victoryText.setScale(0);
        gameScene.tweens.add({
            targets: victoryText,
            scale: 1,
            duration: 600,
            ease: "Back.easeOut"
        });

        gameScene.time.delayedCall(3000, () => {
            // window.location.href = "page-suivante.html";
        });
    });
}

// DÉFAITE
if (!Tidus.alive && !Sora.alive && !Lunafreya.alive && !victoryStarted && !defeatStarted) {
    defeatStarted = true;
    atbPaused = true;
    currentAction = null;
    actionQueue = [];

    // Stopper les mobs (Mibombo OU BlackKnight)
    [Bombo1, Bombo2].forEach(mob => {
        if (mob.alive && mob.sprite && mob.sprite.active) {
            gameScene.tweens.killTweensOf(mob.sprite);
            if (mob.sprite.anims) mob.sprite.anims.stop();

            // Remettre le BlackKnight en idle state ou juste stopper le Mibombo
            if (mob.mobType === "BlackKnight") {
                mob.sprite.setTexture("BlackKnight");
            }
        }
    });

    // S'assurer que chaque héros mort a son sprite death
    [Tidus, Sora, Lunafreya].forEach(hero => {
        gameScene.tweens.killTweensOf(hero.sprite);
        if (hero.sprite.anims) hero.sprite.anims.stop();
        hero.sprite.setTexture(hero.stats.name + "-death");
    });

    // Cacher le HUD
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Texte DEFEAT style FF
    gameScene.time.delayedCall(500, () => {
        let defeatText = gameScene.add.text(
            config.width / 2, config.height / 2 - 80,
            "DEFEAT...",
            {
                fontSize: "64px",
                fontFamily: "Arial",
                color: "#FF0000",
                stroke: "#000",
                strokeThickness: 6
            }
        ).setOrigin(0.5);

        defeatText.setScale(0);
        gameScene.tweens.add({
            targets: defeatText,
            scale: 1,
            duration: 600,
            ease: "Back.easeOut"
        });

        gameScene.time.delayedCall(3000, () => {
            // window.location.href = "game-over.html";
        });
    });
}


    // Nettoyer la queue des morts
    actionQueue = actionQueue.filter(a => {
        if (a === "Tidus" && !Tidus.alive) return false;
        if (a === "Sora" && !Sora.alive) return false;
        if (a === "Lunafreya" && !Lunafreya.alive) return false;
        if (a === "Bombo1" && !Bombo1.alive) return false;
        if (a === "Bombo2" && !Bombo2.alive) return false;
        return true;
    });
}


// === MISE À JOUR DE L'ACTION EN COURS ===
function updateCurrentAction() {
    let attacker, who = currentAction;

    switch (who) {
        case "Tidus": attacker = Tidus; break;
        case "Sora": attacker = Sora; break;
        case "Lunafreya": attacker = Lunafreya; break;
        case "Bombo1": attacker = Bombo1; break;
        case "Bombo2": attacker = Bombo2; break;
    }

    if (!attacker || !attacker.alive) {
        finishAction(who);
        return;
    }

    // === LUNAFREYA (attaque à distance, pas de déplacement) ===
    if (who === "Lunafreya") {
        if (!Lunafreya.hasHit) {
            Lunafreya.hasHit = true;
            let target = Lunafreya.attackTarget;
            let animKey = Lunafreya.useSkill ? "Lunafreya-skill" : "Lunafreya-atk";
            Lunafreya.sprite.anims.play(animKey);

            Lunafreya.sprite.once('animationcomplete', () => {
                if (!Lunafreya.alive) { finishAction(who); return; }

                if (Lunafreya.useSkill) {
                    Lunafreya.sprite.setTexture("Lunafreya-skill-7");
                } else {
                    Lunafreya.sprite.setTexture("Lunafreya-atk-7");
                }

                let effectKey = Lunafreya.useSkill ? "luna-magic-effect-skill" : "luna-magic-effect";
                let effectTexture = Lunafreya.useSkill ? "Lunafreya-skill-8" : "Lunafreya-atk-8";
                let magicEffect = gameScene.add.sprite(target.sprite.x, target.sprite.y, effectTexture);
                magicEffect.setScale(0.5);
                magicEffect.anims.play(effectKey);

                magicEffect.once('animationcomplete', () => {
                    magicEffect.destroy();

                    if (target.alive) {
                        let damage = calculateDamage("Lunafreya");
                        if (Lunafreya.useSkill) damage = Math.floor(damage * 2.5);
                        target.currentHP -= damage;
                        showDamage(gameScene, target, damage);

                        target.sprite.setTint(0xff0000);
                        gameScene.time.delayedCall(300, () => {
                            if (target.sprite && target.sprite.active) target.sprite.clearTint();
                        });

                        if (target.currentHP <= 0) {
                            killMob(gameScene, target);
                        }
                    }

                    // Remettre Luna en idle
                    Lunafreya.sprite.setTexture(getIdleTexture(Lunafreya));
                    finishAction(who);
                });
            });
        }
        return;
    }

    // === BOMBO MIBOMBO (attaque à distance fireball) ===
    let isMibombo = (who === "Bombo1" && Bombo1.mobType === "Mibombo") ||
                    (who === "Bombo2" && Bombo2.mobType === "Mibombo");

    if (isMibombo) {
        if (!attacker.hasHit) {
            attacker.hasHit = true;
            let target = attacker.attackTarget;

            let fireball = gameScene.add.sprite(attacker.sprite.x, attacker.sprite.y, "Bombo1-atk-1");
            fireball.setScale(0.5);
            fireball.anims.play("fireball-anim");

            gameScene.tweens.add({
                targets: fireball,
                x: target.sprite.x,
                y: target.sprite.y,
                duration: 600,
                ease: 'Power1',
                onComplete: () => {
                    fireball.destroy();

                    if (target.alive) {
                        let damage = calculateDamage("Mibombo");
                        target.currentHP -= damage;
                        showDamage(gameScene, target, damage);

                        target.sprite.setTint(0xff0000);
                        gameScene.time.delayedCall(300, () => {
                            if (target.sprite && target.sprite.active) target.sprite.clearTint();
                        });

                        let pvPercent = Math.max(0, (target.currentHP / target.stats.Health) * 100);
                        let barre = document.querySelector(".jaugePV" + target.stats.name);
                        if (barre) barre.style.width = pvPercent + "%";

                        checkDeath(target);
                    }

                    finishAction(who);
                }
            });
        }
        return;
    }

    // === PERSONNAGES MÊLÉE (Tidus, Sora, BlackKnight) ===
    let moveSpeed = 5;
    let runTexture, atkAnim, backTexture;
    let isHero = (who === "Tidus" || who === "Sora");
    let isBK = (who === "Bombo1" && Bombo1.mobType === "BlackKnight") ||
               (who === "Bombo2" && Bombo2.mobType === "BlackKnight");

   if (who === "Tidus") {
    runTexture = "Tidus-run";
    atkAnim = attacker.useSkill ? "Tidus-skill" : "Tidus-atk";
    backTexture = "Tidus-back";
} else if (who === "Sora") {
    runTexture = "Sora-run";
    atkAnim = attacker.useSkill ? "Sora-skill" : "Sora-atk";
    backTexture = "Sora-back";
} else if (isBK) {
    runTexture = "BlackKnight-run";
    atkAnim = "BlackKnight-atk";
    backTexture = "BlackKnight-back";
}

    // PHASE 1 : Déplacement vers la cible
    if (attacker.isMovingToAttack && !attacker.isRetreating) {
        let dx = attacker.targetX - attacker.sprite.x;
        let dy = attacker.targetY - attacker.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
            attacker.sprite.setTexture(runTexture);
            attacker.sprite.x += (dx / dist) * moveSpeed;
            attacker.sprite.y += (dy / dist) * moveSpeed;
        } else {
            attacker.isMovingToAttack = false;
            attacker.sprite.anims.play(atkAnim);

            attacker.sprite.once("animationcomplete", () => {
                let target = attacker.attackTarget;
                if (target && target.alive) {
                    let damage;
                    if (isHero) {
                        damage = calculateDamage(attacker.stats.name);
                        if (attacker.useSkill) damage = Math.floor(damage * 2.5);
                    } else {
                        damage = calculateDamage("Mibombo");
                    }

                    target.currentHP -= damage;
                    showDamage(gameScene, target, damage);

                    target.sprite.setTint(0xff0000);
                    gameScene.time.delayedCall(300, () => {
                        if (target.sprite && target.sprite.active) target.sprite.clearTint();
                    });

                    // Mise à jour barre PV
                    if (isHero) {
                        // Cible = mob
                        if (target.currentHP <= 0) killMob(gameScene, target);
                    } else {
                        // Cible = héros
                        let pvPercent = Math.max(0, (target.currentHP / target.stats.Health) * 100);
                        let barre = document.querySelector(".jaugePV" + target.stats.name);
                        if (barre) barre.style.width = pvPercent + "%";
                        checkDeath(target);
                    }
                }

                attacker.useSkill = false;
                attacker.isRetreating = true;
                attacker.sprite.setTexture(backTexture);
            });
        }
    }

    // PHASE 2 : Retour à la position initiale
    if (attacker.isRetreating) {
        let dx = attacker.startX - attacker.sprite.x;
        let dy = attacker.startY - attacker.sprite.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
            attacker.sprite.x += (dx / dist) * moveSpeed;
            attacker.sprite.y += (dy / dist) * moveSpeed;
        } else {
            attacker.sprite.x = attacker.startX;
            attacker.sprite.y = attacker.startY;
            attacker.isRetreating = false;
            attacker.isMovingToAttack = true;
            attacker.startX = null;

            // Remettre le sprite idle
            if (isHero) {
                attacker.sprite.setTexture(getIdleTexture(attacker));
            } else if (isBK) {
                attacker.sprite.anims.play("BlackKnight-state-anim");
            }

            finishAction(who);
        }
    }
}


// === TERMINER UNE ACTION ===
function finishAction(who) {
    currentAction = null;
    atbPaused = false;
}


// === DÉMARRER UNE ACTION ===
function startAction(who) {
    // Reset ATB du personnage qui agit
    if (who === "Tidus") tidusATB = 0;
    if (who === "Sora") soraATB = 0;
    if (who === "Lunafreya") lunaATB = 0;
    if (who === "Bombo1") bombo1ATB = 0;
    if (who === "Bombo2") bombo2ATB = 0;

    let attacker, target;

    switch (who) {
        case "Tidus":
            attacker = Tidus;
            target = getRandomBombo();
            moveCursor("Tidus");
            break;
        case "Sora":
            attacker = Sora;
            target = getRandomBombo();
            moveCursor("Sora");
            break;
        case "Lunafreya":
            attacker = Lunafreya;
            target = getRandomBombo();
            moveCursor("Lunafreya");
            break;
        case "Bombo1":
            attacker = Bombo1;
            target = getRandomHero();
            break;
        case "Bombo2":
            attacker = Bombo2;
            target = getRandomHero();
            break;
    }

    if (!attacker || !attacker.alive || !target || !target.alive) {
        finishAction(who);
        return;
    }

    // Stocker les infos de l'action  
    if (who === "Tidus" || who === "Sora") {
    attacker.sprite.setTexture(attacker.stats.name + "-run");
} else if ((who === "Bombo1" && Bombo1.mobType === "BlackKnight") || 
           (who === "Bombo2" && Bombo2.mobType === "BlackKnight")) {
    attacker.sprite.anims.stop();
    attacker.sprite.setTexture("BlackKnight-run");
}
    attacker.attackTarget = target;
    attacker.startX = attacker.sprite.x;
    attacker.startY = attacker.sprite.y;
    attacker.isMovingToAttack = true;
    attacker.isRetreating = false;
    attacker.hasHit = false;  
  

    // === TIDUS ===
    if (who === "Tidus") {
        Tidus.attackCount = (Tidus.attackCount || 0) + 1;
        if (Tidus.attackCount >= 3 && Tidus.currentMana >= 30) {
            attacker.attackCount = 0;
            Tidus.useSkill = true;
            Tidus.currentMana -= 30;
            let barreMana = document.querySelector(".jaugeManaTidus");
            if (barreMana) barreMana.style.width = Math.max(0, (Tidus.currentMana / Tidus.stats.MANA) * 100) + "%";
        } else {
            Tidus.useSkill = false;
            if (Tidus.attackCount >= 3) Tidus.attackCount = 0;
        }
        attacker.targetX = target.sprite.x - 120;
        attacker.targetY = target.sprite.y;
    }

    // === SORA ===
    if (who === "Sora") {
        Sora.attackCount = (Sora.attackCount || 0) + 1;
        if (Sora.attackCount >= 3 && Sora.currentMana >= 30) {
             attacker.attackCount = 0;
            Sora.useSkill = true;
            Sora.currentMana -= 30;
            let barreMana = document.querySelector(".jaugeManaSora");
            if (barreMana) barreMana.style.width = Math.max(0, (Sora.currentMana / Sora.stats.MANA) * 100) + "%";
        } else {
            Sora.useSkill = false;
            if (Sora.attackCount >= 3) Sora.attackCount = 0;
        }
        attacker.targetX = target.sprite.x - 120;
        attacker.targetY = target.sprite.y;
    }

    // === LUNAFREYA ===
    if (who === "Lunafreya") {
        Lunafreya.attackCount = (Lunafreya.attackCount || 0) + 1;
        if (Lunafreya.attackCount >= 3 && Lunafreya.currentMana >= 30) {
            attacker.attackCount = 0;
            Lunafreya.useSkill = true;
            Lunafreya.currentMana -= 30;
            let barreMana = document.querySelector(".jaugeManaLunafreya");
            if (barreMana) barreMana.style.width = Math.max(0, (Lunafreya.currentMana / Lunafreya.stats.MANA) * 100) + "%";
        } else {
            Lunafreya.useSkill = false;
            if (Lunafreya.attackCount >= 3) Lunafreya.attackCount = 0;
        }
    }

    // === BOMBO1 ===
    if (who === "Bombo1") {
        if (Bombo1.mobType === "BlackKnight") {
            attacker.targetX = target.sprite.x + 120;
            attacker.targetY = target.sprite.y;
        }
    }

    // === BOMBO2 ===
    if (who === "Bombo2") {
        if (Bombo2.mobType === "BlackKnight") {
            attacker.targetX = target.sprite.x + 120;
            attacker.targetY = target.sprite.y;
        }
    }
}
