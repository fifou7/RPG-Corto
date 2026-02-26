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
    this.load.image("Lunafreya","../Images/Lunafreya.png");
    this.load.image("Sora","../Images/Sora.png");
    this.load.image("background-fight","../Images/image-de-fond-fight.png");

}

function create() {
    var backgroundImage = this.add.sprite(0,0, "background-fight");
    backgroundImage.setDisplaySize(config.width, config.height);
    backgroundImage.setPosition(config.width/2, config.height/2);
    let Tidus = this.add.sprite(495,595, "Tidus");
    Tidus.setScale(1.25);
    let Lunafreya = this.add.sprite(400,350, "Lunafreya");
    Lunafreya.setScale(1.25);
    let Sora = this.add.sprite(440,860, "Sora");   
    Sora.setScale(1.25);


}

function update(time, delta) {

}