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

    mode: Phaser.Scale.RESIZE,
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

//  Sora
    this.load.image("Sora","../Images/Sora.png");

//  Background-fight
    this.load.image("background-fight","../Images/image-de-fond-fight.png");

//  Mob
    this.load.image("Bombo","../Images/Bombo.png");

}

function create() {
    
//  Animation d'attaque de Tidus 
chara = {
    name: "SuuS",
    image: "Tidus"
}

    this.anims.create({
        key : chara.image +"-atk",
        frames : [
            {key : chara.image +"-atk-1"},
            {key : chara.image +"-atk-2"},
            {key : chara.image +"-atk-3"},
            {key : chara.image +"-atk-4"},
            {key : chara.image +"-atk-5"},
            {key : chara.image +"-atk-6"},
            {key : chara.image +"-atk-7"},
            {key : chara.image}
        ],
        frameRate : 10,
        repeat : 1
    })

//  Background-fight
    var backgroundImage = this.add.sprite(0,0, "background-fight");
    backgroundImage.setDisplaySize(config.width, config.height);
    backgroundImage.setPosition(config.width/2, config.height/2);

//  Tidus
    var Tidus = this.add.sprite(895,595, "Tidus");
    Tidus.setScale(1.25);
    Tidus.anims.play("Tidus-atk");

//  Lunafreya
    var Lunafreya = this.add.sprite(800,350, "Lunafreya");
    Lunafreya.setScale(1.25);

//  Sora
    var Sora = this.add.sprite(840,860, "Sora");   
    Sora.setScale(1.25);

//  Mob
    var Bombo = this.add.sprite(2000,450, "Bombo");
    var Bombo = this.add.sprite(2000,800, "Bombo");


    

}

function update(time, delta) {

}