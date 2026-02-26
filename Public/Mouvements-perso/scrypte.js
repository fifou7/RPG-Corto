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
        width: '100%',
        height: '100%'
    },
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image("Tidus","../Images/Tidus.png");
    this.load.image("Tidus-atk-1","../Images/Tidus-atk-1.png");
    this.load.image("Tidus-atk-2","../Images/Tidus-atk-2.png");
    this.load.image("Tidus-atk-3","../Images/Tidus-atk-3.png");
    this.load.image("Tidus-atk-4","../Images/Tidus-atk-4.png");
    this.load.image("Tidus-atk-5","../Images/Tidus-atk-5.png");
    this.load.image("Tidus-atk-6","../Images/Tidus-atk-6.png");
    this.load.image("Tidus-atk-7","../Images/Tidus-atk-7.png");
    this.load.image("Lunafreya","../Images/Lunafreya.png");
    this.load.image("Sora","../Images/Sora.png");
    this.load.image("background-fight","../Images/image-de-fond-fight.png");

}

function create() {
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
        repeat : -1
    })

    var backgroundImage = this.add.sprite(0,0, "background-fight");
    backgroundImage.setDisplaySize(config.width, config.height);
    backgroundImage.setPosition(config.width/2, config.height/2);
    var Tidus = this.add.sprite(495,595, "Tidus");
    Tidus.setScale(1.25);
    Tidus.anims.play("Tidus-atk");
    var Lunafreya = this.add.sprite(400,350, "Lunafreya");
    Lunafreya.setScale(1.25);
    var Sora = this.add.sprite(440,860, "Sora");   
    Sora.setScale(1.25);


}

function update(time, delta) {

}