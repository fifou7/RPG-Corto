
console.log("yo");

let gameScene;

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


  //  Lunafreya
  this.load.image("Lunafreya", "../Images/Lunafreya.png");
  this.load.image("Lunafreya-atk-1", "../Images/Lunafreya-atk-1.png");
  this.load.image("Lunafreya-atk-2", "../Images/Lunafreya-atk-2.png");
  this.load.image("Lunafreya-atk-3", "../Images/Lunafreya-atk-3.png");
  this.load.image("Lunafreya-atk-4", "../Images/Lunafreya-atk-4.png");
  this.load.image("Lunafreya-atk-5", "../Images/Lunafreya-atk-5.png");
  this.load.image("Lunafreya-atk-6", "../Images/Lunafreya-atk-6.png");
  this.load.image("Lunafreya-atk-7", "../Images/Lunafreya-atk-7.png");

  //  Sora
  this.load.image("Sora", "../Images/Sora.png");
  this.load.image("Sora-atk-1", "../Images/Sora-atk-1.png");
  this.load.image("Sora-atk-2", "../Images/Sora-atk-2.png");
  this.load.image("Sora-atk-3", "../Images/Sora-atk-3.png");
  this.load.image("Sora-atk-4", "../Images/Sora-atk-4.png");
  this.load.image("Sora-atk-5", "../Images/Sora-atk-5.png");
  this.load.image("Sora-run","../Images/Sora-run.png");
  this.load.image("Sora-back", "../Images/Sora-atk-5.png");


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

  const response = await fetch("http://localhost:3000/characters");
  const characters = await response.json();
  console.log(characters);
  gameScene = this;

  // Récupérer chaque perso par son nom
  const tidusData = characters.find(c => c.name === "Tidus");
  const soraData = characters.find(c => c.name === "Sora");
  const lunaData = characters.find(c => c.name === "Lunafreya");


  // Stocker les speeds pour l'ATB
  TIDUS_SPEED = 100 / tidusData.atb_jauge;
  SORA_SPEED = 100 / soraData.atb_jauge;
  LUNA_SPEED = 100 / lunaData.atb_jauge;

  // Animations d'atk Tidus
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
      { key: "Tidus" }
    ],
    frameRate: 10
  });

  // Animations d'atk Sora
  this.anims.create({
    key: "Sora-atk",
    frames: [
      { key: "Sora-atk-1" },
      { key: "Sora-atk-2" },
      { key: "Sora-atk-3" },
      { key: "Sora-atk-4" },
      { key: "Sora-atk-5" },
      { key: "Sora" }
    ],
    frameRate: 10
  });

  // Animations d'atk Lunafreya
  this.anims.create({
    key: "Lunafreya-atk",
    frames: [
      { key: "Lunafreya-atk-1" },
      { key: "Lunafreya-atk-2" },
      { key: "Lunafreya-atk-3" },
      { key: "Lunafreya-atk-4" },
      { key: "Lunafreya-atk-5" },
      { key: "Lunafreya-atk-7" },
      { key: "Lunafreya" }
    ],
    frameRate: 6
  });

// Animations d'atk Bombo
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
    repeat: -1
});

  
  // Background
  var backgroundImage = this.add.sprite(0, 0, "background-fight");
  backgroundImage.setDisplaySize(config.width, config.height);
  backgroundImage.setPosition(config.width / 2, config.height / 2);

  // Tidus
  Tidus.sprite = this.add.sprite(config.width * 0.26, 150, "Tidus");
  Tidus.sprite.setScale(0.7);
  Tidus.sprite.data = tidusData; // pour stocker les stats sur le sprite

  // Lunafreya
  Lunafreya = this.add.sprite(config.width * 0.22, 290, "Lunafreya");
  Lunafreya.setScale(0.7);
  Lunafreya.data = lunaData;

  // Sora
  Sora.sprite = this.add.sprite(config.width * 0.24, 420, "Sora");
  Sora.sprite.setScale(0.7);
  Sora.data = soraData;

  // Mobs
  Bombo1.sprite = this.add.sprite(config.width * 0.75, 150, "Bombo1");
  Bombo2.sprite = this.add.sprite(config.width * 0.75, 400, "Bombo2");
  Bombo1.sprite.setScale(0.6);
  Bombo2.sprite.setScale(0.6);

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
    const heroes = [
        { sprite: Tidus.sprite, name: "Tidus" },
        { sprite: Lunafreya, name: "Lunafreya" },
        { sprite: Sora.sprite, name: "Sora" }
    ];
    return heroes[Math.floor(Math.random() * heroes.length)];
}

let soraATB = 0;
let tidusATB = 0;
let lunaATB = 0;
let bombo1ATB = 0;
let bombo2ATB = 0;

const ATB_MAX = 100;

let BOMBO1_SPEED = 100 / 8;  // attaque toutes les 8 sec
let BOMBO2_SPEED = 100 / 10; // attaque toutes les 10 sec
let SORA_SPEED = 100 / 5; // 5 sec
let TIDUS_SPEED = 100 / 4; // 4 sec
let LUNA_SPEED = 100 / 6; // 6 sec


let soraAttacking = false;
let tidusAttacking = false;
let lunaAttacking = false;
let bombo1Attacking = false;
let bombo2Attacking = false;

function update(time, delta) {
  let dt = delta / 1000;

  // SORA ATB

  if (!soraAttacking) {
    soraATB += SORA_SPEED * dt;
    document.querySelector(".jaugeATBSora").style.width =
      Math.min(soraATB, ATB_MAX) + "%";
}

if (soraATB >= ATB_MAX) {
    soraAttacking = true;

    // ALLER vers le mob
    if (Sora.isMovingToAttack) {
      if (Sora.stepsMade === 0) {
        Sora.sprite.setTexture("Sora-run");
      }

      Sora.sprite.x += 5;
      Sora.stepsMade += 1;

      if (Sora.stepsMade >= 100) {
        Sora.isMovingToAttack = false;
        Sora.stepsMade = 0;
        Sora.sprite.anims.play("Sora-atk");

        Sora.sprite.once("animationcomplete", () => {
          Sora.sprite.setTexture("Sora-back");
          Sora.isRetreating = true;
        });
      }
    }

    // RETOUR vers la position initiale
    if (Sora.isRetreating) {
      Sora.sprite.x -= 5;
      Sora.stepsMade += 1;

      if (Sora.stepsMade >= 100) {
        Sora.sprite.setTexture("Sora");
        document.querySelector(".jaugeATBSora").style.width = "0%";
        moveCursor("Sora");
        Sora.stepsMade = 0;
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

    //  Tous permet d'aller vers le bombo1 
    if (Tidus.isMovingToAttack) {
      // Change le sprite permet de donner l'illusion 
      if (Tidus.stepsMade === 0) {
        Tidus.sprite.setTexture("Tidus-run");
      }

      Tidus.sprite.x += 5;
      Tidus.stepsMade += 1;

      if (Tidus.stepsMade >= 100) {
        Tidus.isMovingToAttack = false;
        Tidus.stepsMade = 0;
        // Lance l'anim d'attaque
        Tidus.sprite.anims.play("Tidus-atk");

        Tidus.sprite.once("animationcomplete", () => {
          // Passe en sprite de retour
          Tidus.sprite.setTexture("Tidus-back");
          Tidus.isRetreating = true;
        });
      }
    }

    // RETOUR vers la position initiale
    if (Tidus.isRetreating) {
      Tidus.sprite.x -= 5;
      Tidus.stepsMade += 1;

      if (Tidus.stepsMade >= 100) {
        // Remet le sprite idle
        Tidus.sprite.setTexture("Tidus");
        document.querySelector(".jaugeATBTidus").style.width = "0%";
        moveCursor("Tidus");
        Tidus.stepsMade = 0;
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
      lunaATB = 0;
      document.querySelector(".jaugeATBLuna").style.width = "0%";
      moveCursor("Lunafreya");
      Lunafreya.anims.play("Lunafreya-atk");

      Lunafreya.once("animationcomplete", () => {
        Lunafreya.setTexture("Lunafreya");
        lunaAttacking = false;
      });
    }
  }


// BOMBO1 ATB
if (!bombo1Attacking) {
    bombo1ATB += BOMBO1_SPEED * dt;

    if (bombo1ATB >= ATB_MAX) {
        bombo1Attacking = true;
        bombo1ATB = 0;

        // Pas d'anim sur le Bombo ! On crée directement le feu
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
if (!bombo2Attacking) {
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



}