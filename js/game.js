var game= new Phaser.Game(1000, 515, Phaser.AUTO, 'gameDiv');
//declarando y asigando los "state's"
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('lose', loseState);

game.state.start('boot');

