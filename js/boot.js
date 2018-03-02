var bootState={
preload:function(){
  game.load.image('loading', 'assets/Misc/load.png');
},
create:function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
//Haremos el llamado al State load
  game.state.start('load');
}

}

