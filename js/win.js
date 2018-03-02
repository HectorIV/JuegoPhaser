var winState={
 create:function(){
  game.add.sprite(0,0,'win');
  var pkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);

  pkey.onDown.addOnce(this.start,this);
},
   start:function() {
     game.state.start('menu');
   }
}
