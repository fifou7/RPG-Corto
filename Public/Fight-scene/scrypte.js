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
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '1920px',
    height: '1080px'
},

physics : {
    default : "arcade",
    arcade : {
        debug : true,
        gravity : {y:0}
    }
}
};

const game = new Phaser.Game(config);



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
    this.anims.create({
        key : "Tidus-atk",
        frames : [
            {key : "Tidus-atk-1"},
            {key : "Tidus-atk-2"},
            {key : "Tidus-atk-3"},
            {key : "Tidus-atk-4"},
            {key : "Tidus-atk-5"},
            {key : "Tidus-atk-6"},
            {key : "Tidus-atk-7"},
            {key : "Tidus"}
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