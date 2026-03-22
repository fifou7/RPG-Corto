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
  this.load.image("Tidus-run", "../Images/Tidus-run.png");
  this.load.image("Tidus-back", "../Images/Tidus-back.png");
  this.load.image("Tidus-win", "../Images/Tidus-win.png");
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
  this.load.image("Sora-back", "../Images/Sora-back.png");
  this.load.image("Sora-win", "../Images/Sora-win.png");
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

  // Lunafreya
  this.load.image("Lunafreya", "../Images/Lunafreya.png");
  this.load.image("Lunafreya-mid-life", "../Images/Lunafreya-mid-life.png");
  this.load.image("Lunafreya-death", "../Images/Lunafreya-death.png");
  this.load.image("Lunafreya-win", "../Images/Lunafreya-win.png");
  this.load.image("Lunafreya-atk-1", "../Images/Lunafreya-atk-1.png");
  this.load.image("Lunafreya-atk-2", "../Images/Lunafreya-atk-2.png");
  this.load.image("Lunafreya-atk-3", "../Images/Lunafreya-atk-3.png");
  this.load.image("Lunafreya-atk-4", "../Images/Lunafreya-atk-4.png");
  this.load.image("Lunafreya-atk-5", "../Images/Lunafreya-atk-5.png");
  this.load.image("Lunafreya-atk-6", "../Images/Lunafreya-atk-6.png");
  this.load.image("Lunafreya-atk-7", "../Images/Lunafreya-atk-7.png");
  this.load.image("Lunafreya-atk-8", "../Images/Lunafreya-atk-8.png");
  this.load.image("Lunafreya-skill-1", "../Images/Lunafreya-skill-1.png");
  this.load.image("Lunafreya-skill-2", "../Images/Lunafreya-skill-2.png");
  this.load.image("Lunafreya-skill-3", "../Images/Lunafreya-skill-3.png");
  this.load.image("Lunafreya-skill-4", "../Images/Lunafreya-skill-4.png");
  this.load.image("Lunafreya-skill-5", "../Images/Lunafreya-skill-5.png");
  this.load.image("Lunafreya-skill-6", "../Images/Lunafreya-skill-6.png");
  this.load.image("Lunafreya-skill-7", "../Images/Lunafreya-skill-7.png");
  this.load.image("Lunafreya-skill-8", "../Images/Lunafreya-skill-8.png");

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
  this.load.image("Sephiroth-run", "../Images/Sephiroth-run.png");
  this.load.image("Sephiroth-back", "../Images/Sephiroth-back.png");

  // Background
  this.load.image("background-fight", "../Images/image-de-fond-fight.png");
}

async function create() {
  gameScene = this;

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
    frameRate: 3,
    repeat: -1,
  });

  //
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
    repeat: -1,
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
    ],
    frameRate: 12,
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
    frameRate: 10,
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
    frameRate: 10,
    repeat: 0,
  });

  // Luna magic effects
  this.anims.create({
    key: "luna-magic-effect",
    frames: [{ key: "Lunafreya-atk-8" }],
    frameRate: 6,
    repeat: 0,
  });

  this.anims.create({
    key: "luna-magic-effect-skill",
    frames: [{ key: "Lunafreya-skill-8" }],
    frameRate: 6,
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
  Sephiroth.sprite.anims.play("Sephiroth-atk");

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
  Tidus: { min: 50, max: 100 },
  Sora: { min: 90, max: 100 },
  Lunafreya: { min: 90, max: 100 },
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

function getRandomHero() {
  let aliveHeroes = [Tidus, Sora, Lunafreya].filter((h) => h.alive);
  if (aliveHeroes.length === 0) return null;
  return aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
}

let soraATB = 0;
let tidusATB = 0;
let lunaATB = 0;

const ATB_MAX = 100;

let SORA_SPEED = 100 / 4;
let TIDUS_SPEED = 100 / 2;
let LUNA_SPEED = 100 / 3;

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
      }
    }

    if (Sora.alive && !soraAttacking) {
      soraATB += SORA_SPEED * dt;
      if (soraATB >= ATB_MAX) {
        soraATB = ATB_MAX;
        soraAttacking = true;
        actionQueue.push("Sora");
      }
    }

    if (Lunafreya.alive && !lunaAttacking) {
      lunaATB += LUNA_SPEED * dt;
      if (lunaATB >= ATB_MAX) {
        lunaATB = ATB_MAX;
        lunaAttacking = true;
        actionQueue.push("Lunafreya");
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

  // DÉFAITE
  if (!Tidus.alive && !Sora.alive && !Lunafreya.alive && !defeatStarted) {
    defeatStarted = true;
    atbPaused = true;
    currentAction = null;
    actionQueue = [];

    [Tidus, Sora, Lunafreya].forEach((hero) => {
      gameScene.tweens.killTweensOf(hero.sprite);
      if (hero.sprite.anims) hero.sprite.anims.stop();
      hero.sprite.setTexture(hero.stats.name + "-death");
    });

    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    gameScene.time.delayedCall(500, () => {
      let defeatText = gameScene.add
        .text(config.width / 2, config.height / 2 - 80, "DEFEAT...", {
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

      gameScene.time.delayedCall(3000, () => {
        // window.location.href = "game-over.html";
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
  }

  if (!attacker || !attacker.alive) {
    finishAction(who);
    return;
  }

  // === LUNAFREYA (attaque à distance) ===
  if (who === "Lunafreya") {
    if (!Lunafreya.hasHit) {
      Lunafreya.hasHit = true;
      let target = Lunafreya.attackTarget;
      let animKey = Lunafreya.useSkill ? "Lunafreya-skill" : "Lunafreya-atk";
      Lunafreya.sprite.anims.play(animKey);

      Lunafreya.sprite.once("animationcomplete", () => {
        if (!Lunafreya.alive) {
          finishAction(who);
          return;
        }

        if (Lunafreya.useSkill) {
          Lunafreya.sprite.setTexture("Lunafreya-skill-7");
        } else {
          Lunafreya.sprite.setTexture("Lunafreya-atk-7");
        }

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

            if (target.currentHP <= 0) {
              // TODO: killBoss ou logique boss
            }
          }

          Lunafreya.sprite.setTexture(getIdleTexture(Lunafreya));
          finishAction(who);
        });
      });
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
    if (!attacker.startX) {
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
      attacker.isMovingToAttack = false;
      attacker.sprite.anims.play(atkAnim);

      attacker.sprite.once("animationcomplete", () => {
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

          if (target.currentHP <= 0) {
            // TODO: killBoss ou logique boss
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

      attacker.sprite.setTexture(getIdleTexture(attacker));
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
  if (who === "Tidus") tidusATB = 0;
  if (who === "Sora") soraATB = 0;
  if (who === "Lunafreya") lunaATB = 0;

  let attacker;

  if (who === "Tidus") attacker = Tidus;
  if (who === "Sora") attacker = Sora;
  if (who === "Lunafreya") attacker = Lunafreya;

  // TODO: target = le boss
  // attacker.attackTarget = Boss;

  attacker.isMovingToAttack = true;
  attacker.isRetreating = false;
  attacker.hasHit = false;

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
    // TODO: attacker.targetX = Boss.sprite.x - 120;
    // TODO: attacker.targetY = Boss.sprite.y;
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
    // TODO: attacker.targetX = Boss.sprite.x - 120;
    // TODO: attacker.targetY = Boss.sprite.y;
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
  }
}
