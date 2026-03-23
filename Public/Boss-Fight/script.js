let gameScene;
let sceneReady = false;
let defeatStarted = false;
let victoryStarted = false;
let sephirothATB = 0;
let sephirothAttacking = false;

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
let Sephiroth = new Characters();

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
  // Tidus
  this.load.image("Tidus", "../Images/Tidus.png");
  this.load.image("Tidus-mid-life", "../Images/Tidus-mid-life.png");
  this.load.image("Tidus-death", "../Images/Tidus-death.png");
  this.load.image("Tidus-run", "../Images/Tidus-sprinte.png");
  this.load.image("Tidus-back", "../Images/Tidus-atk-7.png");
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
  this.load.image("Tidus-atk-1", "../Images/Tidus-atk-1.png");
  this.load.image("Tidus-atk-2", "../Images/Tidus-atk-2.png");
  this.load.image("Tidus-atk-3", "../Images/Tidus-atk-3.png");
  this.load.image("Tidus-atk-4", "../Images/Tidus-atk-4.png");
  this.load.image("Tidus-atk-5", "../Images/Tidus-atk-5.png");
  this.load.image("Tidus-atk-6", "../Images/Tidus-atk-6.png");
  this.load.image("Tidus-atk-7", "../Images/Tidus-atk-7.png");
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

  // Sora
  this.load.image("Sora", "../Images/Sora.png");
  this.load.image("Sora-mid-life", "../Images/Sora-mid-life.png");
  this.load.image("Sora-death", "../Images/Sora-death.png");
  this.load.image("Sora-run", "../Images/Sora-run.png");
  this.load.image("Sora-back", "../Images/Sora-atk-5.png");
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
  this.load.image("Sora-atk-1", "../Images/Sora-atk-1.png");
  this.load.image("Sora-atk-2", "../Images/Sora-atk-2.png");
  this.load.image("Sora-atk-3", "../Images/Sora-atk-3.png");
  this.load.image("Sora-atk-4", "../Images/Sora-atk-4.png");
  this.load.image("Sora-atk-5", "../Images/Sora-atk-5.png");
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

  // Lunafreya
  this.load.image("Lunafreya", "../Images/Lunafreya.png");
  this.load.image("Lunafreya-mid-life", "../Images/Lunafreya-mid-life.png");
  this.load.image("Lunafreya-death", "../Images/Lunafreya-death.png");
  this.load.image("Lunafreya-win-1", "../Images/Lunafreya-win-1.png");
  this.load.image("Lunafreya-win-2", "../Images/Lunafreya-win-2.png");
  this.load.image("Lunafreya-win-3", "../Images/Lunafreya-win-3.png");
  this.load.image("Lunafreya-win-4", "../Images/Lunafreya-win-4.png");
  this.load.image("Lunafreya-win-5", "../Images/Lunafreya-win-5.png");
  this.load.image("Lunafreya-win-6", "../Images/Lunafreya-win-6.png");
  this.load.image("Lunafreya-win-7", "../Images/Lunafreya-win-7.png");
  this.load.image("Lunafreya-atk-1", "../Images/Lunafreya-atk-1.png");
  this.load.image("Lunafreya-atk-2", "../Images/Lunafreya-atk-2.png");
  this.load.image("Lunafreya-atk-3", "../Images/Lunafreya-atk-3.png");
  this.load.image("Lunafreya-atk-4", "../Images/Lunafreya-atk-4.png");
  this.load.image("Lunafreya-atk-5", "../Images/Lunafreya-atk-5.png");
  this.load.image("Lunafreya-atk-6", "../Images/Lunafreya-atk-6.png");
  this.load.image("Lunafreya-atk-7", "../Images/Lunafreya-atk-7.png");
  this.load.image("Lunafreya-atk-8", "../Images/Lunafreya-atk-8.png");
  this.load.image("Lunafreya-atk-9", "../Images/Lunafreya-atk-9.png");
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

  // Sephiroth
  this.load.image("Sephiroth-state-1", "../Images/Sephiroth-state-1.png");
  this.load.image("Sephiroth-state-2", "../Images/Sephiroth-state-2.png");
  this.load.image("Sephiroth-state-3", "../Images/Sephiroth-state-3.png");
  this.load.image("Sephiroth-atk-1", "../Images/Sephiroth-atk-1.png");
  this.load.image("Sephiroth-atk-2", "../Images/Sephiroth-atk-2.png");
  this.load.image("Sephiroth-atk-3", "../Images/Sephiroth-atk-3.png");
  this.load.image("Sephiroth-atk-4", "../Images/Sephiroth-atk-4.png");
  this.load.image("Sephiroth-atk-5", "../Images/Sephiroth-atk-5.png");
  this.load.image("Sephiroth-atk-6", "../Images/Sephiroth-atk-6.png");
  this.load.image("Sephiroth-atk-7", "../Images/Sephiroth-atk-7.png");
  this.load.image("Sephiroth-atk-8", "../Images/Sephiroth-atk-8.png");
  this.load.image("Sephiroth-atk-9", "../Images/Sephiroth-atk-9.png");
  this.load.image("Sephiroth-atk-10", "../Images/Sephiroth-atk-10.png");
  this.load.image("Sephiroth-atk-11", "../Images/Sephiroth-atk-11.png");
  this.load.image("Sephiroth-atk-12", "../Images/Sephiroth-atk-12.png");
  this.load.image("Sephiroth-atk-13", "../Images/Sephiroth-atk-13.png");
  this.load.image("Sephiroth-atk-14", "../Images/Sephiroth-atk-14.png");
  this.load.image("Sephiroth-atk-15", "../Images/Sephiroth-atk-15.png");
  this.load.image("Sephiroth-atk-16", "../Images/Sephiroth-atk-16.png");
  this.load.image("Sephiroth-atk-17", "../Images/Sephiroth-atk-17.png");
  this.load.image("Sephiroth-atk-18", "../Images/Sephiroth-atk-18.png");
  this.load.image("Sephiroth-atk-19", "../Images/Sephiroth-atk-19.png");
  this.load.image("Sephiroth-skill-1", "../Images/Sephiroth-skill-1.png");
  this.load.image("Sephiroth-skill-2", "../Images/Sephiroth-skill-2.png");
  this.load.image("Sephiroth-skill-3", "../Images/Sephiroth-skill-3.png");
  this.load.image("Sephiroth-skill-4", "../Images/Sephiroth-skill-4.png");
  this.load.image("Sephiroth-skill-5", "../Images/Sephiroth-skill-5.png");
  this.load.image("Sephiroth-skill-6", "../Images/Sephiroth-skill-6.png");
  this.load.image("Sephiroth-skill-7", "../Images/Sephiroth-skill-7.png");
  this.load.image("Sephiroth-skill-8", "../Images/Sephiroth-skill-8.png");
  this.load.image("Sephiroth-skill-9", "../Images/Sephiroth-skill-9.png");
  this.load.image("Sephiroth-skill-10", "../Images/Sephiroth-skill-10.png");
  this.load.image("Sephiroth-skill-11", "../Images/Sephiroth-skill-11.png");
  this.load.image("Sephiroth-skill-12", "../Images/Sephiroth-skill-12.png");
  this.load.image("Sephiroth-skill-13", "../Images/Sephiroth-skill-13.png");
  this.load.image("Sephiroth-skill-14", "../Images/Sephiroth-skill-14.png");
  this.load.image("Sephiroth-skill-15", "../Images/Sephiroth-skill-15.png");
  this.load.image("Sephiroth-skill-16", "../Images/Sephiroth-skill-16.png");
  this.load.image("Sephiroth-skill-17", "../Images/Sephiroth-skill-17.png");
  this.load.image("Sephiroth-skill-18", "../Images/Sephiroth-skill-18.png");
  this.load.image("Sephiroth-skill-19", "../Images/Sephiroth-skill-19.png");
  this.load.image("Sephiroth-skill-20", "../Images/Sephiroth-skill-20.png");
  this.load.image("Sephiroth-run", "../Images/Sephiroth-run.png");
  this.load.image("Sephiroth-back", "../Images/Sephiroth-back.png");

  // Background
  this.load.image("background-fight", "../Images/Boss-fight-background.jpg");

  this.load.audio("Boss-fight-theme", "../Audio/Boss-fight-theme.mp3");
}

async function create() {
  gameScene = this;
  const battleData = JSON.parse(sessionStorage.getItem("battleData") || "null");
  console.log("Données reçues depuis la map :", battleData);

  // fetch persos
  const response = await fetch("http://localhost:3000/characters");
  const characters = await response.json();

  // fetch skills
  const responseSkills = await fetch("http://localhost:3000/skills");
  const skills = await responseSkills.json();

  // fetch boss
  const responseboss = await fetch("http://localhost:3000/boss");
  const SephirothData = await responseboss.json();

  console.log(SephirothData);
  console.log(skills);

  const tidusSkill = skills.find((s) => s.name === "Enchainement dévastateur");
  const soraSkill = skills.find((s) => s.name === "KeyBlade rush");
  const lunaSkill = skills.find((s) => s.name === "Big bang");
  const sephirothSkill = skills.find((s) => s.name === "Octaslash");

  Tidus.skill = tidusSkill;
  Sora.skill = soraSkill;
  Lunafreya.skill = lunaSkill;
  Sephiroth.skill = sephirothSkill;

  const tidusData = characters.find((c) => c.name === "Tidus");
  const soraData = characters.find((c) => c.name === "Sora");
  const lunaData = characters.find((c) => c.name === "Lunafreya");

  // ATB speeds
  TIDUS_SPEED = 100 / tidusData.atb_jauge;
  SORA_SPEED = 100 / soraData.atb_jauge;
  LUNA_SPEED = 100 / lunaData.atb_jauge;
  SEPHIROTH_SPEED = 100 / SephirothData.atb_jauge;
  Sephiroth.atbSpeed = SEPHIROTH_SPEED;

  this.battleMusic = this.sound.add("Boss-fight-theme", {
    loop: true,
    volume: 0.5,
  });
  this.sound.context.resume().then(() => {
    this.battleMusic.play();
  });

  // Background
  var backgroundImage = this.add.sprite(0, 0, "background-fight");
  backgroundImage.setDisplaySize(config.width, config.height);
  backgroundImage.setPosition(config.width / 2, config.height / 2);

  Tidus.alive = true;
  Sora.alive = true;
  Lunafreya.alive = true;

  // ANIMATIONS

  // Sephiroth state
  this.anims.create({
    key: "Sephiroth-state",
    frames: [
      { key: "Sephiroth-state-1" },
      { key: "Sephiroth-state-2" },
      { key: "Sephiroth-state-3" },
    ],
    frameRate: 5,
    repeat: -1,
  });

  // Sephiroth atk
  this.anims.create({
    key: "Sephiroth-atk",
    frames: [
      { key: "Sephiroth-atk-1" },
      { key: "Sephiroth-atk-2" },
      { key: "Sephiroth-atk-3" },
      { key: "Sephiroth-atk-4" },
      { key: "Sephiroth-atk-5" },
      { key: "Sephiroth-atk-6" },
      { key: "Sephiroth-atk-7" },
      { key: "Sephiroth-atk-8" },
      { key: "Sephiroth-atk-9" },
      { key: "Sephiroth-atk-10" },
      { key: "Sephiroth-atk-12" },
      { key: "Sephiroth-atk-13" },
      { key: "Sephiroth-atk-14" },
      { key: "Sephiroth-atk-16" },
      { key: "Sephiroth-atk-17" },
      { key: "Sephiroth-atk-18" },
      { key: "Sephiroth-atk-19" },
    ],
    frameRate: 10,
    repeat: 0,
  });

  // Sephiroth skill
  this.anims.create({
    key: "Sephiroth-skill",
    frames: [
      { key: "Sephiroth-skill-1" },
      { key: "Sephiroth-skill-2" },
      { key: "Sephiroth-skill-3" },
      { key: "Sephiroth-skill-4" },
      { key: "Sephiroth-skill-5" },
      { key: "Sephiroth-skill-6" },
      { key: "Sephiroth-skill-7" },
      { key: "Sephiroth-skill-8" },
      { key: "Sephiroth-skill-9" },
      { key: "Sephiroth-skill-10" },
      { key: "Sephiroth-skill-12" },
      { key: "Sephiroth-skill-13" },
      { key: "Sephiroth-skill-14" },
      { key: "Sephiroth-skill-16" },
      { key: "Sephiroth-skill-17" },
      { key: "Sephiroth-skill-18" },
      { key: "Sephiroth-skill-19" },
      { key: "Sephiroth-skill-20" },
    ],
    frameRate: 10,
    repeat: 0,
  });

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
      { key: "Sora-skill-25" },
      { key: "Sora-skill-26" },
      { key: "Sora-skill-27" },
    ],
    frameRate: 6,
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
    frameRate: 6,
    repeat: 0,
  });

  this.anims.create({
    key: "luna-magic-effect",
    frames: [{ key: "Lunafreya-atk-8" }, { key: "Lunafreya-atk-9" }],
    frameRate: 6,
    repeat: 0,
  });

  // Luna magic effect SKILL
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
    frameRate: 6,
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

  // === PERSONNAGES ===
  Tidus.stats = tidusData;
  Tidus.currentHP = tidusData.Health;
  Tidus.currentMana = tidusData.MANA;
  Tidus.sprite = this.add.sprite(config.width * 0.26, 150, "Tidus");
  Tidus.sprite.setScale(0.7);

  Sora.stats = soraData;
  Sora.currentHP = soraData.Health;
  Sora.currentMana = soraData.MANA;
  Sora.sprite = this.add.sprite(config.width * 0.24, 420, "Sora");
  Sora.sprite.setScale(0.7);

  Lunafreya.stats = lunaData;
  Lunafreya.currentHP = lunaData.Health;
  Lunafreya.currentMana = lunaData.MANA;
  Lunafreya.sprite = this.add.sprite(config.width * 0.22, 290, "Lunafreya");
  Lunafreya.sprite.setScale(0.7);

  // === SEPHIROTH ===
  Sephiroth.stats = SephirothData;
  Sephiroth.currentHP = SephirothData.Health;
  Sephiroth.currentMana = SephirothData.MANA;
  Sephiroth.sprite = this.add.sprite(config.width * 0.75, 280, "Sephiroth");
  Sephiroth.sprite.anims.play("Sephiroth-state");
  Sephiroth.alive = true;
  Sephiroth.attackCount = 0;
  Sephiroth.useSkill = false;
  Sephiroth.isMovingToAttack = false;
  Sephiroth.isRetreating = false;
  Sephiroth.hasHit = false;
  Sephiroth.startX = Sephiroth.sprite.x;
  Sephiroth.startY = Sephiroth.sprite.y;

  sceneReady = true;
}

// Afficher dégâts
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
  Tidus: { min: 250, max: 450 },
  Sora: { min: 250, max: 400 },
  Lunafreya: { min: 250, max: 500 },
};

function calculateDamage(attackerName) {
  let range = ATTACK_TABLE[attackerName];
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

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

// map return

function returnToMap(result) {
  const battleData = JSON.parse(sessionStorage.getItem("battleData") || "null");

  const returnPayload = {
    result: result,
    returnX: battleData?.returnX ?? 120,
    returnY: battleData?.returnY ?? 220,
    encounterType: battleData?.encounterType ?? "boss",
    bossId: battleData?.bossId ?? null,
    bossName: battleData?.bossName ?? null,
  };

  sessionStorage.setItem("battleReturn", JSON.stringify(returnPayload));

  const returnUrl = battleData?.returnMap || "../../assets/maps/index.html";
  window.location.href = returnUrl;
}

function getRandomHero() {
  let aliveHeroes = [Tidus, Sora, Lunafreya].filter((h) => h.alive);
  if (aliveHeroes.length === 0) return null;
  return aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
}

let soraATB = 0;
let tidusATB = 0;
let lunaATB = 0;

const ATB_MAX = 100;

// let SORA_SPEED = 100 / 4;
// let TIDUS_SPEED = 100 / 2;
// let LUNA_SPEED = 100 / 3;
// let SEPHIROTH_SPEED = 100 / SephirothData.atb_jauge;

let soraAttacking = false;
let tidusAttacking = false;
let lunaAttacking = false;

function checkDeath(character) {
  if (character.currentHP <= 0 && character.alive) {
    character.alive = false;
    character.currentHP = 0;

    gameScene.tweens.killTweensOf(character.sprite);
    if (character.sprite.anims) character.sprite.anims.stop();

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

    let barre = document.querySelector(".jaugePV" + character.stats.name);
    if (barre) barre.style.width = "0%";
    let barreATB = document.querySelector(".jaugeATB" + character.stats.name);
    if (barreATB) barreATB.style.width = "0%";
  }
}

function checkMidLife(character) {
  if (!character.alive) return;
  if (
    character.currentHP <= character.stats.Health / 2 &&
    character.currentHP > 0
  ) {
    let currentTexture = character.sprite.texture.key;
    let idleName = character.stats.name;
    if (currentTexture === idleName) {
      character.sprite.setTexture(idleName + "-mid-life");
    }
  }
}

let actionQueue = [];
let currentAction = null;
let atbPaused = false;

function update(time, delta) {
  if (!sceneReady) return;
  let dt = delta / 1000;

  if (!atbPaused) {
    // ATB Héros
    if (Tidus.alive && !tidusAttacking) {
      tidusATB += TIDUS_SPEED * dt;
      if (tidusATB >= ATB_MAX) {
        tidusATB = ATB_MAX;
        tidusAttacking = true;
        actionQueue.push("Tidus");
        moveCursor("Tidus");
      }
    }

    if (Sora.alive && !soraAttacking) {
      soraATB += SORA_SPEED * dt;
      if (soraATB >= ATB_MAX) {
        soraATB = ATB_MAX;
        soraAttacking = true;
        actionQueue.push("Sora");
        moveCursor("Sora");
      }
    }

    if (Lunafreya.alive && !lunaAttacking) {
      lunaATB += LUNA_SPEED * dt;
      if (lunaATB >= ATB_MAX) {
        lunaATB = ATB_MAX;
        lunaAttacking = true;
        actionQueue.push("Lunafreya");
        moveCursor("Lunafreya");
      }
    }

    // ATB Sephiroth
    if (Sephiroth.alive && !sephirothAttacking) {
      sephirothATB += Sephiroth.atbSpeed * dt;
      if (sephirothATB >= ATB_MAX) {
        sephirothATB = ATB_MAX;
        sephirothAttacking = true;
        actionQueue.push("Sephiroth");
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

  if (currentAction) {
    updateCurrentAction();
  }

  // === VICTOIRE ===
  if (victoryStarted && !defeatStarted) {
    victoryStarted = false;
    atbPaused = true;
    currentAction = null;
    actionQueue = [];
    document.querySelectorAll(".cursor").forEach((c) => c.remove());

    // Stopper tous les ATB
    tidusAttacking = true;
    soraAttacking = true;
    lunaAttacking = true;
    sephirothAttacking = true;

    // Cacher le HUD combat
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Changer les sprites des héros vivants en pose victoire
    if (Tidus.alive) {
      gameScene.tweens.killTweensOf(Tidus.sprite);
      Tidus.sprite.anims.play("Tidus-win");
    }
    if (Sora.alive) {
      gameScene.tweens.killTweensOf(Sora.sprite);
      Sora.sprite.anims.play("Sora-win");
    }
    if (Lunafreya.alive) {
      gameScene.tweens.killTweensOf(Lunafreya.sprite);
      Lunafreya.sprite.anims.play("Lunafreya-win");
    }
    // Fond noir progressif
    let blackOverlay = gameScene.add
      .rectangle(
        config.width / 2,
        config.height / 2,
        config.width,
        config.height,
        0x000000,
        0,
      )
      .setDepth(100);

    gameScene.tweens.add({
      targets: blackOverlay,
      alpha: 0.6,
      duration: 1500,
      ease: "Power2",
    });

    // Texte VICTORY
    gameScene.time.delayedCall(1000, () => {
      let victoryText = gameScene.add
        .text(config.width / 2, config.height / 2 - 50, "VICTORY", {
          fontSize: "72px",
          fontFamily: "Arial",
          color: "#FFD700",
          stroke: "#000000",
          strokeThickness: 6,
          fontStyle: "bold",
        })
        .setOrigin(0.5)
        .setDepth(101);

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

  // === DÉFAITE ===
  let allDead = !Tidus.alive && !Sora.alive && !Lunafreya.alive;
  if (allDead && !defeatStarted && !victoryStarted) {
    defeatStarted = true;
    gameScene.battleMusic.stop();
    atbPaused = true;
    currentAction = null;
    actionQueue = [];
    sephirothAttacking = true;

    // Cacher le HUD combat
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Sephiroth retourne en idle
    Sephiroth.sprite.setPosition(config.width * 0.75, 280);
    Sephiroth.sprite.anims.play("Sephiroth-state");

    // Fond noir progressif
    let blackOverlay = gameScene.add
      .rectangle(
        config.width / 2,
        config.height / 2,
        config.width,
        config.height,
        0x000000,
        0,
      )
      .setDepth(100);

    gameScene.tweens.add({
      targets: blackOverlay,
      alpha: 0.7,
      duration: 1500,
      ease: "Power2",
    });

    // Texte GAME OVER
    gameScene.time.delayedCall(1000, () => {
      let defeatText = gameScene.add
        .text(config.width / 2, config.height / 2 - 50, "GAME OVER", {
          fontSize: "72px",
          fontFamily: "Arial",
          color: "#FF0000",
          stroke: "#000000",
          strokeThickness: 6,
          fontStyle: "bold",
        })
        .setOrigin(0.5)
        .setDepth(101);

      defeatText.setScale(0);
      gameScene.tweens.add({
        targets: defeatText,
        scale: 1,
        duration: 600,
        ease: "Back.easeOut",
      });
      gameScene.time.delayedCall(3000, () => {
        returnToMap("defeat");
      });
    });
  }

  // Nettoyer la queue des morts
  actionQueue = actionQueue.filter((a) => {
    if (a === "Tidus" && !Tidus.alive) return false;
    if (a === "Sora" && !Sora.alive) return false;
    if (a === "Lunafreya" && !Lunafreya.alive) return false;
    return true;
  });
}

// === MISE À JOUR DE L'ACTION EN COURS ===
function updateCurrentAction() {
  let attacker,
    who = currentAction;

  switch (who) {
    case "Tidus":
      attacker = Tidus;
      break;
    case "Sora":
      attacker = Sora;
      break;
    case "Lunafreya":
      attacker = Lunafreya;
      break;
    case "Sephiroth":
      attacker = Sephiroth;
      break;
  }

  if (!attacker || !attacker.alive) {
    finishAction(who);
    return;
  }

  // === LUNAFREYA (attaque à distance) ===
  if (who === "Lunafreya") {
    if (!Lunafreya.hasHit) {
      Lunafreya.hasHit = true;
      Lunafreya.animDone = false;
      let target = Lunafreya.attackTarget;
      let animKey = Lunafreya.useSkill ? "Lunafreya-skill" : "Lunafreya-atk";

      Lunafreya.sprite.anims.stop();
      Lunafreya.sprite.anims.play(animKey);

      Lunafreya.sprite.once("animationcomplete", (anim) => {
        if (anim.key !== animKey) return;
        Lunafreya.animDone = true;

        if (!Lunafreya.alive) {
          finishAction(who);
          return;
        }

        // Luna reste sur frame 7
        Lunafreya.sprite.setTexture("Lunafreya-skill-7");

        // Effet magique sur Sephiroth
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
        magicEffect.setScale(0.8);
        magicEffect.anims.play(effectKey);

        magicEffect.once("animationcomplete", () => {
          magicEffect.destroy();

          if (target.alive) {
            let damage = calculateDamage("Lunafreya");
            if (Lunafreya.useSkill)
              damage = Math.floor(damage * (1 + Lunafreya.skill.DMG / 100));
            target.currentHP -= damage;
            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active)
                target.sprite.clearTint();
            });

            let barrePV = document.querySelector(
              ".jaugePV" + target.stats.name,
            );
            if (barrePV) {
              barrePV.style.width =
                Math.max(0, (target.currentHP / target.stats.Health) * 100) +
                "%";
            }

            checkDeath(target);
            checkMidLife(target);

            if (target.currentHP <= 0) {
              target.currentHP = 0;
              Sephiroth.alive = false;
              gameScene.battleMusic.stop();
              Sephiroth.sprite.anims.stop();
              Sephiroth.sprite.setVisible(false);
              victoryStarted = true;
              return;
            }
          }

          if (Lunafreya.alive) {
            Lunafreya.sprite.setTexture(getIdleTexture(Lunafreya));
          }
          Lunafreya.useSkill = false;
          finishAction(who);
        });
      });
    }
    return;
  }

  // === SEPHIROTH (mêlée boss) ===
  if (who === "Sephiroth") {
    let moveSpeed = 5;
    let target = attacker.attackTarget;

    if (attacker.isMovingToAttack) {
      if (
        attacker.sprite.anims.isPlaying &&
        attacker.sprite.anims.currentAnim.key === "Sephiroth-state"
      ) {
        attacker.sprite.anims.stop();
        attacker.sprite.setTexture("Sephiroth-run");
      }

      let dx = attacker.targetX - attacker.sprite.x;
      let dy = attacker.targetY - attacker.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 10) {
        attacker.sprite.x += (dx / dist) * moveSpeed;
        attacker.sprite.y += (dy / dist) * moveSpeed;
      } else {
        attacker.isMovingToAttack = false;
        attacker.animDone = false;
        let atkAnim = attacker.useSkill ? "Sephiroth-skill" : "Sephiroth-atk";

        attacker.sprite.anims.stop();
        attacker.sprite.anims.play(atkAnim);

        attacker.sprite.once("animationcomplete", (anim) => {
          if (anim.key !== atkAnim) return;
          attacker.animDone = true;

          if (target && target.alive) {
            let minDmg = Sephiroth.stats.ATK;
            let maxDmg = Sephiroth.stats.DMG;
            let damage =
              Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;

            if (attacker.useSkill) {
              damage = Math.floor(damage * (1 + Sephiroth.skill.DMG / 100));
            }

            target.currentHP -= damage;
            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active)
                target.sprite.clearTint();
            });

            let barrePV = document.querySelector(
              ".jaugePV" + target.stats.name,
            );
            if (barrePV) {
              barrePV.style.width =
                Math.max(0, (target.currentHP / target.stats.Health) * 100) +
                "%";
            }

            checkDeath(target);
            checkMidLife(target);
          }

          attacker.useSkill = false;
          attacker.isRetreating = true;
          attacker.sprite.setTexture("Sephiroth-back");
        });
      }
      return;
    }

    if (attacker.isRetreating) {
      let dx = Sephiroth.startX - attacker.sprite.x;
      let dy = Sephiroth.startY - attacker.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 5) {
        attacker.sprite.x += (dx / dist) * moveSpeed;
        attacker.sprite.y += (dy / dist) * moveSpeed;
      } else {
        attacker.sprite.x = Sephiroth.startX;
        attacker.sprite.y = Sephiroth.startY;
        attacker.isRetreating = false;
        attacker.isMovingToAttack = true;
        attacker.sprite.anims.play("Sephiroth-state");
        finishAction(who);
      }
    }
    return;
  }

  // === PERSONNAGES MÊLÉE (Tidus, Sora) ===
  let moveSpeed = 5;
  let runTexture, atkAnim, backTexture;

  if (who === "Tidus") {
    runTexture = "Tidus-run";
    atkAnim = attacker.useSkill ? "Tidus-skill" : "Tidus-atk";
    backTexture = "Tidus-back";
  } else if (who === "Sora") {
    runTexture = "Sora-run";
    atkAnim = attacker.useSkill ? "Sora-skill" : "Sora-atk";
    backTexture = "Sora-back";
  }

  // PHASE 1 : Avancer vers la cible
  if (attacker.isMovingToAttack) {
    if (!attacker.runStarted) {
      attacker.runStarted = true;
      attacker.animDone = false;
      attacker.startX = attacker.sprite.x;
      attacker.startY = attacker.sprite.y;
      attacker.sprite.setTexture(runTexture);
    }

    let target = attacker.attackTarget;
    let dx = attacker.targetX - attacker.sprite.x;
    let dy = attacker.targetY - attacker.sprite.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 10) {
      attacker.sprite.x += (dx / dist) * moveSpeed;
      attacker.sprite.y += (dy / dist) * moveSpeed;
    } else {
      // Arrivé à destination - lancer l'attaque UNE SEULE FOIS
      if (!attacker.attackStarted) {
        attacker.attackStarted = true;
        attacker.isMovingToAttack = false;

        attacker.sprite.anims.stop();
        attacker.sprite.anims.play(atkAnim);

        attacker.sprite.once("animationcomplete", (anim) => {
          if (anim.key !== atkAnim) return;
          attacker.animDone = true;

          if (target && target.alive) {
            let damage = calculateDamage(who);
            if (attacker.useSkill && who === "Tidus")
              damage = Math.floor(damage * (1 + Tidus.skill.DMG / 100));
            if (attacker.useSkill && who === "Sora")
              damage = Math.floor(damage * (1 + Sora.skill.DMG / 100));
            target.currentHP -= damage;
            showDamage(gameScene, target, damage);

            target.sprite.setTint(0xff0000);
            gameScene.time.delayedCall(300, () => {
              if (target.sprite && target.sprite.active)
                target.sprite.clearTint();
            });

            // Mise à jour barre PV boss
            let barrePV = document.querySelector(
              ".jaugePV" + target.stats.name,
            );
            if (barrePV) {
              barrePV.style.width =
                Math.max(0, (target.currentHP / target.stats.Health) * 100) +
                "%";
            }

            if (target.currentHP <= 0) {
              target.currentHP = 0;
              Sephiroth.alive = false;
              Sephiroth.sprite.anims.stop();
              Sephiroth.sprite.setVisible(false);
              victoryStarted = true;
            }
          }

          attacker.useSkill = false;
          attacker.isRetreating = true;
          attacker.sprite.setTexture(backTexture);
        });
      }
    }
    return;
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
      attacker.runStarted = false;
      attacker.attackStarted = false;
      attacker.startX = null;

      attacker.sprite.setTexture(getIdleTexture(attacker));
      finishAction(who);
    }
  }
}

// === TERMINER UNE ACTION ===
function finishAction(who) {
  if (who === "Tidus") {
    tidusAttacking = false;
    tidusATB = 0;
    Tidus.startX = null;
  }
  if (who === "Sora") {
    soraAttacking = false;
    soraATB = 0;
    Sora.startX = null;
  }
  if (who === "Lunafreya") {
    lunaAttacking = false;
    lunaATB = 0;
    Lunafreya.startX = null;
  }
  if (who === "Sephiroth") {
    sephirothAttacking = false;
    sephirothATB = 0;
    Sephiroth.startX = config.width * 0.75;
    Sephiroth.startY = 280;
  }

  currentAction = null;
  atbPaused = false;
}

// === DÉMARRER UNE ACTION ===
function startAction(who) {
  if (who === "Tidus") tidusATB = 0;
  if (who === "Sora") soraATB = 0;
  if (who === "Lunafreya") lunaATB = 0;
  if (who === "Sephiroth") sephirothATB = 0;

  let attacker;
  if (who === "Tidus") attacker = Tidus;
  if (who === "Sora") attacker = Sora;
  if (who === "Lunafreya") attacker = Lunafreya;
  if (who === "Sephiroth") attacker = Sephiroth;

  // Pour les héros, cible = Sephiroth
  if (who !== "Sephiroth") {
    attacker.attackTarget = Sephiroth;
  }

  attacker.isMovingToAttack = true;
  attacker.isRetreating = false;
  attacker.hasHit = false;

  // === SEPHIROTH ===
  if (who === "Sephiroth") {
    let target = getRandomHero();
    if (!target) {
      finishAction(who);
      return;
    }
    attacker.attackTarget = target;

    Sephiroth.attackCount = (Sephiroth.attackCount || 0) + 1;
    if (
      Sephiroth.attackCount >= 3 &&
      Sephiroth.currentMana >= Sephiroth.skill.mana_cost
    ) {
      Sephiroth.attackCount = 0;
      Sephiroth.useSkill = true;
      Sephiroth.currentMana -= Sephiroth.skill.mana_cost;
    } else {
      Sephiroth.useSkill = false;
      if (Sephiroth.attackCount >= 3) Sephiroth.attackCount = 0;
    }

    attacker.targetX = target.sprite.x + 120;
    attacker.targetY = target.sprite.y;
    return;
  }

  // === TIDUS ===
  if (who === "Tidus") {
    Tidus.attackCount = (Tidus.attackCount || 0) + 1;
    if (Tidus.attackCount >= 3 && Tidus.currentMana >= Tidus.skill.mana_cost) {
      attacker.attackCount = 0;
      Tidus.useSkill = true;
      Tidus.currentMana -= Tidus.skill.mana_cost;
      let barreMana = document.querySelector(".jaugeManaTidus");
      if (barreMana)
        barreMana.style.width =
          Math.max(0, (Tidus.currentMana / Tidus.stats.MANA) * 100) + "%";
    } else {
      Tidus.useSkill = false;
      if (Tidus.attackCount >= 3) Tidus.attackCount = 0;
    }
    attacker.targetX = Sephiroth.sprite.x - 120;
    attacker.targetY = Sephiroth.sprite.y;
  }

  // === SORA ===
  if (who === "Sora") {
    Sora.attackCount = (Sora.attackCount || 0) + 1;
    if (Sora.attackCount >= 3 && Sora.currentMana >= Sora.skill.mana_cost) {
      attacker.attackCount = 0;
      Sora.useSkill = true;
      Sora.currentMana -= Sora.skill.mana_cost;
      let barreMana = document.querySelector(".jaugeManaSora");
      if (barreMana)
        barreMana.style.width =
          Math.max(0, (Sora.currentMana / Sora.stats.MANA) * 100) + "%";
    } else {
      Sora.useSkill = false;
      if (Sora.attackCount >= 3) Sora.attackCount = 0;
    }
    attacker.targetX = Sephiroth.sprite.x - 120;
    attacker.targetY = Sephiroth.sprite.y;
  }

  // === LUNAFREYA ===
  if (who === "Lunafreya") {
    Lunafreya.attackCount = (Lunafreya.attackCount || 0) + 1;
    if (
      Lunafreya.attackCount >= 3 &&
      Lunafreya.currentMana >= Lunafreya.skill.mana_cost
    ) {
      attacker.attackCount = 0;
      Lunafreya.useSkill = true;
      Lunafreya.currentMana -= Lunafreya.skill.mana_cost;
      let barreMana = document.querySelector(".jaugeManaLunafreya");
      if (barreMana)
        barreMana.style.width =
          Math.max(0, (Lunafreya.currentMana / Lunafreya.stats.MANA) * 100) +
          "%";
    } else {
      Lunafreya.useSkill = false;
      if (Lunafreya.attackCount >= 3) Lunafreya.attackCount = 0;
    }
    // Luna ne bouge pas, elle cast à distance
    attacker.targetX = Lunafreya.sprite.x;
    attacker.targetY = Lunafreya.sprite.y;
  }
}
