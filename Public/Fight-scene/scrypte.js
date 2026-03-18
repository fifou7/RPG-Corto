console.log('yo');

const config = {  
type: Phaser.AUTO, 
height : window.innerHeight, 
width: window.innerWidth, 
parent: 'game-container',
scene : {
    preload : preload,
    create : create,
    update : update 
},

scale: {
    // Or set parent divId here
    parent: "game-container",

    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '100%',
    height: '100%',
    zoom: 1,  // Size of game canvas = game size * zoom
},

// scale: {
//     mode: Phaser.Scale.RESIZE,
//     autoCenter: Phaser.Scale.CENTER_BOTH,
//     width: '100%',
//     height: '100%'
// },

physics : {
    default : "arcade",
    arcade : {
        debug : true,
        gravity : {y:0}
    }
}
};

const game = new Phaser.Game(config);

console.log(game);


function preload() {
//  Tidus
    this.load.image("Tidus","../Images/Tidus.png");
    this.load.image("Tidus-atk-1","../Images/Tidus-atk-1.png");
    this.load.image("Tidus-atk-2","../Images/Tidus-atk-2.png");
    this.load.image("Tidus-atk-3","../Images/Tidus-atk-3.png");
    this.load.image("Tidus-atk-4","../Images/Tidus-atk-4.png");
    this.load.image("Tidus-atk-5","../Images/Tidus-atk-5.png");
    this.load.image("Tidus-atk-6","../Images/Tidus-atk-6.png");
    this.load.image("Tidus-atk-7","../Images/Tidus-atk-7.png");

//  Lunafreya
    this.load.image("Lunafreya","../Images/Lunafreya.png");
    this.load.image("Lunafreya-atk-1","../Images/Lunafreya-atk-1.png");
    this.load.image("Lunafreya-atk-2","../Images/Lunafreya-atk-2.png");
    this.load.image("Lunafreya-atk-3","../Images/Lunafreya-atk-3.png");
    this.load.image("Lunafreya-atk-4","../Images/Lunafreya-atk-4.png");
    this.load.image("Lunafreya-atk-5","../Images/Lunafreya-atk-5.png");
    this.load.image("Lunafreya-atk-6","../Images/Lunafreya-atk-6.png");
    this.load.image("Lunafreya-atk-7","../Images/Lunafreya-atk-7.png");


//  Sora
    this.load.image("Sora","../Images/Sora.png");
    this.load.image("Sora-atk-1","../Images/Sora-atk-1.png");
    this.load.image("Sora-atk-2","../Images/Sora-atk-2.png");
    this.load.image("Sora-atk-3","../Images/Sora-atk-3.png");
    this.load.image("Sora-atk-4","../Images/Sora-atk-4.png");
    this.load.image("Sora-atk-5","../Images/Sora-atk-5.png");
    
//  Background-fight
    this.load.image("background-fight","../Images/image-de-fond-fight.png");

//  Mob
    this.load.image("Bombo1","../Images/Bombo.png");
    this.load.image("Bombo2","../Images/Bombo.png");

}

async function create() {

    const response = await fetch("http://localhost:3000/characters");
    const characters = await response.json();
    console.log(characters);

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
        {key: "Tidus-atk-1"},
        {key: "Tidus-atk-2"},
        {key: "Tidus-atk-3"},
        {key: "Tidus-atk-4"},
        {key: "Tidus-atk-5"},
        {key: "Tidus-atk-6"},
        {key: "Tidus-atk-7"},
        {key: "Tidus"}
        ],
        frameRate: 10,
    });

    // Animations d'atk Sora
    this.anims.create({
        key: "Sora-atk",
        frames: [
            {key: "Sora-atk-1"},
            {key: "Sora-atk-2"},
            {key: "Sora-atk-3"},
            {key: "Sora-atk-4"},
            {key: "Sora-atk-5"},
            {key: "Sora"}
        ],
        frameRate: 10,
    });

    // Animations d'atk Lunafreya 
    this.anims.create({
        key: "Lunafreya-atk",
        frames: [
            {key: "Lunafreya-atk-1"},
            {key: "Lunafreya-atk-2"},
            {key: "Lunafreya-atk-3"},
            {key: "Lunafreya-atk-4"},
            {key: "Lunafreya-atk-5"},
            {key: "Lunafreya-atk-7"},
            {key: "Lunafreya"}
        ],
        frameRate: 6,
    });

    // Background 
    var backgroundImage = this.add.sprite(0, 0, "background-fight");
    backgroundImage.setDisplaySize(config.width, config.height);
    backgroundImage.setPosition(config.width / 2, config.height / 2);

    // Tidus
    Tidus = this.add.sprite(config.width * 0.26, 150, "Tidus");
    Tidus.setScale(0.7);
    Tidus.data = tidusData; // pour stocker les stats sur le sprite

    // Lunafreya
    Lunafreya = this.add.sprite(config.width * 0.22, 290, "Lunafreya");
    Lunafreya.setScale(0.7);
    Lunafreya.data = lunaData;

    // Sora
    Sora = this.add.sprite(config.width * 0.24, 420, "Sora");
    Sora.setScale(0.7);
    Sora.data = soraData;

    // Mobs 
    var Bombo1 = this.add.sprite(config.width * 0.75, 150, "Bombo1");
    var Bombo2 = this.add.sprite(config.width * 0.75, 400, "Bombo2");
    Bombo1.setScale(0.6);
    Bombo2.setScale(0.6);
}


// Fonction pour déplacer le curseur
function moveCursor(persoName) {
    document.querySelectorAll('.perso-ligne').forEach(ligne => {
        const cursor = ligne.querySelector('.cursor');
        if (cursor) cursor.remove();
    });

    document.querySelectorAll('.perso-ligne').forEach(ligne => {
        const name = ligne.querySelector('.NamePerso');
        if (name && name.textContent.trim().includes(persoName)) {
            const img = document.createElement('img');
            img.className = 'cursor';
            img.src = '../Images/cursor.png';
            name.prepend(img);
        }
    });
}


let soraATB = 0;
let tidusATB = 0;
let lunaATB = 0;
const ATB_MAX = 100;
let SORA_SPEED = 100 / 5;   // 5 sec
let TIDUS_SPEED = 100 / 4;  // 4 sec
let LUNA_SPEED = 100 / 6;   // 6 sec

let soraAttacking = false;
let tidusAttacking = false;
let lunaAttacking = false;

function update(time, delta) {
    let dt = delta / 1000;

// SORA ATB

   if (!soraAttacking) {
    soraATB += SORA_SPEED * dt;
    document.querySelector('.jaugeATBSora').style.width = Math.min(soraATB, ATB_MAX) + '%';

    if (soraATB >= ATB_MAX) {
        soraAttacking = true;
        soraATB = 0;
        document.querySelector('.jaugeATBSora').style.width = '0%';
        moveCursor('Sora');
        Sora.anims.play("Sora-atk");

        Sora.once('animationcomplete', () => {
            Sora.setTexture("Sora");  // retour sprite statique
            soraAttacking = false;
        });
    }
}

// TIDUS ATB

if (!tidusAttacking) {
    tidusATB += TIDUS_SPEED * dt;
    document.querySelector('.jaugeATBTidus').style.width = Math.min(tidusATB, ATB_MAX) + '%';

    if (tidusATB >= ATB_MAX) {
        tidusAttacking = true;
        tidusATB = 0;
        document.querySelector('.jaugeATBTidus').style.width = '0%';
        moveCursor('Tidus');
        Tidus.anims.play("Tidus-atk");

        Tidus.once('animationcomplete', () => {
            Tidus.setTexture("Tidus");
            tidusAttacking = false;
        });
    }
}

// LUNAFREYA ATB

if (!lunaAttacking) {
    lunaATB += LUNA_SPEED * dt;
    document.querySelector('.jaugeATBLuna').style.width = Math.min(lunaATB, ATB_MAX) + '%';

    if (lunaATB >= ATB_MAX) {
        lunaATB = 0;
        document.querySelector('.jaugeATBLuna').style.width = '0%';
         moveCursor('Lunafreya');
        Lunafreya.anims.play("Lunafreya-atk");

        Lunafreya.once('animationcomplete', () => {
            Lunafreya.setTexture("Lunafreya");
            lunaAttacking = false;
        });
    }
}
}