console.log('yo');

const config = {  
type: Phaser.AUTO, 
height : 600, 
width: 800, 
parent: 'game-container',
scene : {
    preload : preload,
    create : create,
    update : update
},
scale: {

        mode: Phaser.Scale.FIT,
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

}

function create() {
    this.add.sprite(280,600, "Tidus");
    this.add.sprite(200,350, "Lunafreya");
    this.add.sprite(250,850, "Sora");

}

function update(time, delta) {

}