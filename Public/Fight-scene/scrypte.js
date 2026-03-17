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
     repeat : 0
 })

    this.anims.create({
        key : "Sora-atk",
        frames : [
            {key : "Sora-atk-1"},
            {key : "Sora-atk-2"},
            {key : "Sora-atk-3"},
            {key : "Sora-atk-4"},
            {key : "Sora-atk-5"},
            {key : "Sora"}
        ],
        frameRate : 10,
        repeat : 2
    })

//  Background-fight
    var backgroundImage = this.add.sprite(0,0, "background-fight");
    backgroundImage.setDisplaySize(config.width, config.height);
    backgroundImage.setPosition(config.width/2, config.height/2);

//  Tidus
    var Tidus = this.add.sprite(config.width*0.28, 150, "Tidus");
    Tidus.setScale(0.7);
    Tidus.anims.play("Tidus-atk");

//  Lunafreya
    var Lunafreya = this.add.sprite(config.width*0.22,290, "Lunafreya");
    Lunafreya.setScale(0.7);

//  Sora
    var Sora = this.add.sprite(config.width*0.24, 420, "Sora");   
    Sora.setScale(0.7);
    Sora.anims.play("Sora-atk");

//  Mob
    var Bombo1 = this.add.sprite(config.width*0.75,150, "Bombo1");
    var Bombo2 = this.add.sprite(config.width*0.75,400, "Bombo2");
    Bombo1.setScale(0.6);
    Bombo2.setScale(0.6);

  


    

}

function update(time, delta) {

}