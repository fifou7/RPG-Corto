console.log("yo");

let gameScene;
let sceneReady = false;
victoryStarted = false;

class Characters {
  constructor() {
    ((this.isMovingToAttack = true),
      (this.isRetreating = false),
      (this.stepsMade = 0),
      (this.sprite = undefined));
  }
}

let Tidus = new Characters();
let Sora = new Characters();
let Lunafreya = new Characters();
let Bombo1 = new Characters();
let Bombo2 = new Characters();

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
    // Or set parent divId here
    parent: "game-container",

    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: "100%",
    height: "100%",
    zoom: 1 // Size of game canvas = game size * zoom
  },

  // scale: {
  //     mode: Phaser.Scale.RESIZE,
  //     autoCenter: Phaser.Scale.CENTER_BOTH,
  //     width: '100%',
  //     height: '100%'
  // },

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
  this.load.image("Lunafreya-win-1", "../Images/Lunafreya-win-1.png");
  this.load.image("Lunafreya-win-2", "../Images/Lunafreya-win-2.png");
  this.load.image("Lunafreya-win-3", "../Images/Lunafreya-win-3.png");
  this.load.image("Lunafreya-win-4", "../Images/Lunafreya-win-4.png");
  this.load.image("Lunafreya-win-5", "../Images/Lunafreya-win-5.png");
  this.load.image("Lunafreya-win-6", "../Images/Lunafreya-win-6.png");
  this.load.image("Lunafreya-win-7", "../Images/Lunafreya-win-7.png");


  //  Sora
  this.load.image("Sora", "../Images/Sora.png");
  this.load.image("Sora-atk-1", "../Images/Sora-atk-1.png");
  this.load.image("Sora-atk-2", "../Images/Sora-atk-2.png");
  this.load.image("Sora-atk-3", "../Images/Sora-atk-3.png");
  this.load.image("Sora-atk-4", "../Images/Sora-atk-4.png");
  this.load.image("Sora-atk-5", "../Images/Sora-atk-5.png");
  this.load.image("Sora-run","../Images/Sora-run.png");
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


  //  Background-fight
  this.load.image("background-fight", "../Images/image-de-fond-fight.png");

  //  Mob
  this.load.image("Bombo1", "../Images/Bombo.png");
  this.load.image("Bombo2", "../Images/Bombo.png");
  this.load.image("Bombo1-atk-1", "../Images/Bombo-atk-1.png");
  this.load.image("Bombo1-atk-2", "../Images/Bombo-atk-2.png");
  this.load.image("Bombo1-atk-3", "../Images/Bombo-atk-3.png");
  this.load.image("Bombo1-atk-4", "../Images/Bombo-atk-4.png");
  this.load.image("Bombo1-atk-5", "../Images/Bombo-atk-5.png");
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
  gameScene = this;
  // Verification
  const tidusData = characters.find(c => c.name === "Tidus");
  const soraData = characters.find(c => c.name === "Sora");
  const lunaData = characters.find(c => c.name === "Lunafreya");
  const bombo1Data = mobs.find  (m => m.name === "mibombo");
  const bombo2Data = mobs.find(m => m.name === "Mibombo");

  // ATB speeds
  TIDUS_SPEED = 100 / tidusData.atb_jauge;
  SORA_SPEED = 100 / soraData.atb_jauge;
  LUNA_SPEED = 100 / lunaData.atb_jauge;
  BOMBO1_SPEED = 100 / bombo1Data.atb_jauge;
  BOMBO2_SPEED = 100 / bombo2Data.atb_jauge;


  // Background
  var backgroundImage = this.add.sprite(0, 0, "background-fight");
  backgroundImage.setDisplaySize(config.width, config.height);
  backgroundImage.setPosition(config.width / 2, config.height / 2);



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
      { key: "Sora-win-10"}
    ],
    frameRate: 10,
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
    frameRate: 10,
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
    { key: "Lunafreya-win-7" },
  ],
  frameRate: 10,
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



  // Tidus
  Tidus.sprite = this.add.sprite(config.width * 0.26, 150, "Tidus");
  Tidus.sprite.setScale(0.7);
  Tidus.stats = tidusData;
  Tidus.currentHP = tidusData.Health;

  // Lunafreya
  Lunafreya.sprite = this.add.sprite(config.width * 0.22, 290, "Lunafreya");
  Lunafreya.sprite.setScale(0.7);
  Lunafreya.stats = lunaData;
  Lunafreya.currentHP = lunaData.Health;

  // Sora
  Sora.sprite = this.add.sprite(config.width * 0.24, 420, "Sora");
  Sora.sprite.setScale(0.7);
  Sora.stats = soraData;
  Sora.currentHP = soraData.Health;

  // Mobs
  Bombo1.sprite = this.add.sprite(config.width * 0.75, 150, "Bombo1");
  Bombo1.sprite.setScale(0.6);
  Bombo1.stats = bombo1Data;
  Bombo1.currentHP = bombo1Data.Health;
  Bombo1.alive = true;

  Bombo2.sprite = this.add.sprite(config.width * 0.75, 400, "Bombo2");
  Bombo2.sprite.setScale(0.6);
  Bombo2.stats = bombo2Data;
  Bombo2.currentHP = bombo2Data.Health;
  Bombo2.alive = true;

  this.tweens.add({
    targets: Bombo1.sprite,
    x: Bombo1.sprite.x + 10,
    duration: 1500,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut'
  });

  this.tweens.add({
    targets: Bombo2.sprite,
    x: Bombo2.sprite.x + 10,
    duration: 1800,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut'
  });
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
  'Tidus': { min: 150, max: 200 },
  'Sora': { min: 120, max: 170 },
  'Lunafreya': { min: 180, max: 250 },
  'mibombo': { min: 30, max: 50 },
  'Mibombo': { min: 40, max: 60 }
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
  const heroes = [Tidus, Lunafreya, Sora];
  return heroes[Math.floor(Math.random() * heroes.length)];
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

const ATB_MAX = 100;

let BOMBO1_SPEED = 100 / 8;  
let BOMBO2_SPEED = 100 / 10; 
let SORA_SPEED = 100 / 5; 
let TIDUS_SPEED = 100 / 4; 
let LUNA_SPEED = 100 / 6; 

let soraAttacking = false;
let tidusAttacking = false;
let lunaAttacking = false;
let bombo1Attacking = false;
let bombo2Attacking = false;





function update(time, delta)  {
    if (!sceneReady) return;
    if (!gameScene) return;
  let dt = delta / 1000;

  // SORA ATB

  if (!soraAttacking) {
    soraATB += SORA_SPEED * dt;
    document.querySelector(".jaugeATBSora").style.width =
      Math.min(soraATB, ATB_MAX) + "%";
  }

  if (soraATB >= ATB_MAX) {
    soraAttacking = true;

    if (!Bombo1.alive && !Bombo2.alive) {
      soraATB = 0;
      soraAttacking = false;
      return;
    }

    // Sauvegarde la position de départ 
    if (!Sora.startX) {
      Sora.startX = Sora.sprite.x;
      Sora.startY = Sora.sprite.y;
      Sora.attackTarget = getRandomBombo();
      Sora.targetX = Sora.attackTarget.sprite.x - 120;
      Sora.targetY = Sora.attackTarget.sprite.y;
    }

    // ALLER vers le mob
    if (Sora.isMovingToAttack) {
      if (Sora.stepsMade === 0) {
        Sora.sprite.setTexture("Sora-run");
      }

      // Déplacement vers la cible
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
        Sora.sprite.anims.play("Sora-atk");

        Sora.sprite.once("animationcomplete", () => {
          // CALCUL DES DÉGÂTS
          let damage = calculateDamage('Sora');
          Sora.attackTarget.currentHP -= damage;

          // AFFICHER LES DÉGÂTS
          showDamage(gameScene, Sora.attackTarget, damage);

          // Flash rouge
          Sora.attackTarget.sprite.setTint(0xff0000);
          gameScene.time.delayedCall(300, () => {
            if (Sora.attackTarget.sprite && Sora.attackTarget.sprite.active) {
              Sora.attackTarget.sprite.clearTint();
            }
          });

          // MOB MORT ?
          if (Sora.attackTarget.currentHP <= 0) {
            killMob(gameScene, Sora.attackTarget);
          }

          Sora.sprite.setTexture("Sora-back");
          Sora.isRetreating = true;
        });
      }
    }

    // RETOUR vers la position initiale
    if (Sora.isRetreating) {
      let dx = Sora.startX - Sora.sprite.x;
      let dy = Sora.startY - Sora.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 5) {
        Sora.sprite.x += (dx / dist) * 5;
        Sora.sprite.y += (dy / dist) * 5;
      } else {
        Sora.sprite.x = Sora.startX;
        Sora.sprite.y = 420;
        Sora.sprite.setTexture("Sora");
        document.querySelector(".jaugeATBSora").style.width = "0%";
        moveCursor("Sora");
        Sora.stepsMade = 0;
        Sora.startX = null;
        soraATB = 0;
        soraAttacking = false;
        Sora.isRetreating = false;
        Sora.isMovingToAttack = true;
      }
    }
  }

  // TIDUS ATB

  if (!tidusAttacking) {
    tidusATB += TIDUS_SPEED * dt;
    document.querySelector(".jaugeATBTidus").style.width =
      Math.min(tidusATB, ATB_MAX) + "%";
  }

  if (tidusATB >= ATB_MAX) {
    tidusAttacking = true;

    if (!Bombo1.alive && !Bombo2.alive) {
      tidusATB = 0;
      tidusAttacking = false;
      return;
    }

    if (!Tidus.startX) {
      Tidus.startX = Tidus.sprite.x;
      Tidus.startY = Tidus.sprite.y;
      Tidus.attackTarget = getRandomBombo();
      Tidus.targetX = Tidus.attackTarget.sprite.x - 120;
      Tidus.targetY = Tidus.attackTarget.sprite.y;
    }

    if (Tidus.isMovingToAttack) {
      if (Tidus.stepsMade === 0) {
        Tidus.sprite.setTexture("Tidus-run");
      }

      let dx = Tidus.targetX - Tidus.sprite.x;
      let dy = Tidus.targetY - Tidus.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 5) {
        Tidus.sprite.x += (dx / dist) * 5;
        Tidus.sprite.y += (dy / dist) * 5;
        Tidus.stepsMade += 1;
      } else {
        Tidus.isMovingToAttack = false;
        Tidus.stepsMade = 0;
        Tidus.sprite.anims.play("Tidus-atk");

        Tidus.sprite.once("animationcomplete", () => {
          let damage = calculateDamage('Tidus');
          Tidus.attackTarget.currentHP -= damage;
          showDamage(gameScene, Tidus.attackTarget, damage);

          Tidus.attackTarget.sprite.setTint(0xff0000);
          gameScene.time.delayedCall(300, () => {
            if (Tidus.attackTarget.sprite && Tidus.attackTarget.sprite.active) {
              Tidus.attackTarget.sprite.clearTint();
            }
          });

          if (Tidus.attackTarget.currentHP <= 0) {
            killMob(gameScene, Tidus.attackTarget);
          }

          Tidus.sprite.setTexture("Tidus-back");
          Tidus.isRetreating = true;
        });
      }
    }

    if (Tidus.isRetreating) {
      let dx = Tidus.startX - Tidus.sprite.x;
      let dy = Tidus.startY - Tidus.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 5) {
        Tidus.sprite.x += (dx / dist) * 5;
        Tidus.sprite.y += (dy / dist) * 5;
      } else {
        Tidus.sprite.x = Tidus.startX;
        Tidus.sprite.y = 150;
        Tidus.sprite.setTexture("Tidus");
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

  // Permet de récupérer la distance entre deux éléments
  // Je te laisse ça là, ça pourra t'être utile
  // console.log(
  //   Phaser.Math.Distance.BetweenPoints(Tidus.sprite, Bombo1.sprite)
  // );

  // LUNAFREYA ATB
  if (!lunaAttacking) {
    lunaATB += LUNA_SPEED * dt;
    document.querySelector(".jaugeATBLuna").style.width =
      Math.min(lunaATB, ATB_MAX) + "%";

    if (lunaATB >= ATB_MAX) {

      if (!Bombo1.alive && !Bombo2.alive) {
        lunaATB = 0;
        lunaAttacking = false;
        return;
      }

      lunaATB = 0;
      lunaAttacking = true;
      document.querySelector(".jaugeATBLuna").style.width = "0%";
      moveCursor("Lunafreya");

      let target = getRandomBombo();

      Lunafreya.sprite.anims.play("Lunafreya-atk");

      Lunafreya.sprite.once("animationcomplete", () => {
        Lunafreya.sprite.setTexture("Lunafreya");

        // Créer l'effet magique directement SUR le Bombo
        let magicEffect = gameScene.add.sprite(
          target.sprite.x,
          target.sprite.y,
          "Lunafreya-atk-8"
        );
        magicEffect.setScale(0.7);
        magicEffect.anims.play("luna-magic-effect");

        magicEffect.once("animationcomplete", () => {
          let damage = calculateDamage('Lunafreya');
          target.currentHP -= damage;
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

          magicEffect.destroy();
          lunaAttacking = false;
        });
      });
    }
  }

  // BOMBO1 ATB
  if (Bombo1.alive && !bombo1Attacking) {
    bombo1ATB += BOMBO1_SPEED * dt;

    if (bombo1ATB >= ATB_MAX) {
      bombo1Attacking = true;
      bombo1ATB = 0;

      
      let target = getRandomHero();

      let fireball = gameScene.add.sprite(
        Bombo1.sprite.x,
        Bombo1.sprite.y,
        "Bombo1-atk-1"
      );
      fireball.setScale(0.5);
      fireball.anims.play("fireball-anim");

      // Le feu se déplace vers la cible
      gameScene.tweens.add({
        targets: fireball,
        x: target.sprite.x,
        y: target.sprite.y,
        duration: 600,
        ease: 'Power2',
        onComplete: () => {
          target.sprite.setTint(0xff0000);
          gameScene.time.delayedCall(300, () => {
            target.sprite.clearTint();
          });
          fireball.destroy();
          bombo1Attacking = false;
        }
      });
    }
  }

  // BOMBO2 ATB
  if (Bombo2.alive && !bombo2Attacking) {
    bombo2ATB += BOMBO2_SPEED * dt;

    if (bombo2ATB >= ATB_MAX) {
      bombo2Attacking = true;
      bombo2ATB = 0;

      let target = getRandomHero();

      let fireball2 = gameScene.add.sprite(
        Bombo2.sprite.x,
        Bombo2.sprite.y,
        "Bombo1-atk-1"
      );
      fireball2.setScale(0.5);
      fireball2.anims.play("fireball-anim");

      gameScene.tweens.add({
        targets: fireball2,
        x: target.sprite.x,
        y: target.sprite.y,
        duration: 600,
        ease: 'Power2',
        onComplete: () => {
          target.sprite.setTint(0xff0000);
          gameScene.time.delayedCall(300, () => {
            target.sprite.clearTint();
          });
          fireball2.destroy();
          bombo2Attacking = false;
        }
      });
    }
  }

  // Détecte fin de combat
let allMobsDead = !Bombo1.alive && !Bombo2.alive;
console.log("Bombo1.alive:", Bombo1.alive, "Bombo2.alive:", Bombo2.alive);

if (allMobsDead && !victoryStarted) {
  victoryStarted = true;

  // Stopper tous les ATB
  soraAttacking = true;
  tidusAttacking = true;
  lunaAttacking = true;

  // Positions initiales
  let tidusHomeX = config.width * 0.26, tidusHomeY = 150;
  let soraHomeX = config.width * 0.24, soraHomeY = 420;
  let lunaHomeX = config.width * 0.22, lunaHomeY = 290;

  // Repositionner les persos
  gameScene.tweens.add({
    targets: Tidus.sprite,
    x: tidusHomeX, y: tidusHomeY,
    duration: 200,
    onComplete: () => Tidus.sprite.anims.play("Tidus-win")
  });

  gameScene.tweens.add({
    targets: Sora.sprite,
    x: soraHomeX, y: soraHomeY,
    duration: 200,
   onComplete: () => Sora.sprite.anims.play("Sora-win")
  });

  gameScene.tweens.add({
    targets: Lunafreya.sprite,
    x: lunaHomeX, y: lunaHomeY,
    duration: 300,
   onComplete: () => Lunafreya.sprite.anims.play("Lunafreya-win")
  });

  // Après repositionnement : animation victoire
  gameScene.time.delayedCall(800, () => {
    // Masquer le HUD 
    let hud = document.querySelector(".ActionBar");
    if (hud) hud.style.display = "none";

    // Texte VICTORY 
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

    // Transition 
    gameScene.time.delayedCall(3000, () => {
      // window.location.href = "ta-page-suivante.html";
    });
  });
}



}
