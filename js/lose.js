var loseState={
 create:function(){
  game.add.sprite(0,0,'lose');
  var pkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);

  pkey.onDown.addOnce(this.start,this);
},
   start:function() {
     game.state.start('menu');
   }
}
