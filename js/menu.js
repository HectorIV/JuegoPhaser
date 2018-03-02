var menu_bgm;
 var menuState={
   create:function(){
     game.add.sprite(0,0,'menu');
     game.add.button(game.world.centerX - 100, 400, 'playbt');

     menu_bgm= game.add.audio('sonido_menu');
     menu_bgm.loopFull(0.5);
     var pkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);

     pkey.onDown.addOnce(this.start,this);
   },
   start:function(){
     menu_bgm.stop();
     game.state.start('play');
   }
 }
