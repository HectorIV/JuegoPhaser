var loadState={
preload:function(){
  var loading= game.add.sprite(0,0, 'loading');
game.load.image('cielo', 'assets/stage/sky1.png');
game.load.image('montagne', 'assets/stage/mountain.png');
game.load.image('estrella', 'assets/collectibles/star.png');
game.load.image('diamante', 'assets/collectibles/diamond.png');
game.load.image('atlas', 'assets/stage/terrain_atlas.png');


game.load.image('menu', 'assets/Misc/menu.png');
game.load.image('win', 'assets/Misc/win.png');
game.load.image('lose', 'assets/Misc/lose.png');
game.load.spritesheet('playbt', 'assets/Misc/playbt.png', 200,60);

game.load.audio('sonido_estrella', 'assets/music/coin_sound1.mp3');
game.load.audio('sonido_mundo2', 'assets/music/stage2.mp3');
game.load.audio('sonido_mundo1', 'assets/music/kool_kats.mp3');
game.load.audio('sonido_menu', 'assets/music/menu.mp3');
game.load.audio('sonido_nivelcompletado', 'assets/music/zapsplat_multimedia_game_retro_musical_completed.mp3');
game.load.audio('sonido_badending', 'assets/music/zapsplat_multimedia_game_retro_musical_descend_fail_negative.mp3');
game.load.audio('sonido_goodending', 'assets/music/zapsplat_multimedia_game_retro_musical_level_complete_008.mp3');

game.load.tilemap('mapa', 'assets/stage/mapa3.json', null, Phaser.Tilemap.TILED_JSON);
game.load.tilemap('mapa2', 'assets/stage/mapatierra.json', null, Phaser.Tilemap.TILED_JSON);

game.load.spritesheet('prota', 'assets/characters/dude.png', 32,48);
game.load.spritesheet('prro', 'assets/characters/baddie.png', 32,32);
},

create:function(){
  game.state.start('menu');
}

}
