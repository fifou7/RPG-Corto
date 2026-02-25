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

}

function create() {

}

function update(time, delta) {

}