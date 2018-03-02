var map;
var capa_fondo2;
var capa_fondo1;
var capa_enemigos;
var capa_plataforma;
var sound_star;
var sound_world2;
var sound_goodend;
var sound_badend;
var jugador;
var stars;
var checkpoint;
var score=0;
var scoreText;
var cursors;



var playState={

create:function(){
game.physics.arcade.checkCollision.down=false;
//se hace un for para repetir el fondo
for(var i=0; i<7680; i+=1920){
var fondo_cielo= game.add.sprite(i+0,0,'cielo');}
//fondo_cielo.scale.setTo(1,1);

//agregamos el mapa
map=game.add.tilemap('mapa2');
//cargamos el tileset, primero va el nombre que le pusieron en el tiled y despues el nombre en el load
map.addTilesetImage('terrain_atlas', 'atlas');
//añadimos las capas del mapa desde la de más atras hasta la de más al frente
capa_fondo2= map.createLayer('fondo2');
capa_fondo1= map.createLayer('fondo');
capa_enemigos= map.createLayer('enemigos');
capa_plataforma= map.createLayer('plataforma');
//declaramos el cuerpo para los layers que afectan el juego
capa_enemigos.enableBody=true;
capa_plataforma.enableBody=true;
//añadimos la colision de los layers
map.setCollisionBetween(1, 2000, true, capa_enemigos);
map.setCollisionBetween(1, 2000, true, capa_plataforma);

//ajustamos el tamaño de los layers
capa_enemigos.resizeWorld();
capa_plataforma.resizeWorld();

//añadiendo sonidos
sound_star=game.add.audio('sonido_estrella');
sound_world2=game.add.audio('sonido_mundo2');
sound_goodend=game.add.audio('sonido_goodending');
sound_badend=game.add.audio('sonido_badending');

//repetir la musica del mundo
sound_world2.loopFull(0.5);

//implementando a el jugador
jugador=game.add.sprite(32, game.world.height - 256, 'prota');
//habilitar fisicas
game.physics.arcade.enable(jugador);
//que rebote
jugador.body.bounce.y=0.1;
//que la gravedad le afecte
jugador.body.gravity.y=320;
//limite de choque con el borde del mapa
jugador.collideWorldBounds=true;

//que compruebe si toca el borde
jugador.checkWorldBounds=true;
//que se muera si se cae :)
jugador.events.onOutOfBounds.add(this.death, this);
//animaciones
jugador.animations.add('movizq', [0,1,2,3], 10, true);
jugador.animations.add('movder', [5,6,7,8], 10, true);
//camara para el jugador
game.camera.follow(jugador);


//estrellas
    stars= game.add.group();
//habilitamos las fisicas para el grupo de estrellas
    stars.enableBody=true;
//creamos 12 estrellas espaciadas
    for(var i=1;i<12;i++){
//creamos una estrella del grupo stars
    var star = stars.create(i*400,game.world.height-500,'estrella');
//que la gravedad las afecte
    star.body.gravity.y=300;
//vamos a darle un rebote a las estrellas
//star.body.bounce.y=0.7+Math.random()*0.2;
    star.body.bounce.y=1;
}

//creando el checkpoint que es el diamante
checkpoint=game.add.sprite(148*32, game.world.height-256, 'diamante');
game.physics.arcade.enable(checkpoint);

//el puntaje
scoreText=game.add.text(16,16, 'Score: '+score, {fontsize:'32px', fill: '#FFFFFF'});
//para que el puntaje siga la camara
scoreText.fixedToCamera=true;

cursors= game.input.keyboard.createCursorKeys();




},

update:function(){
game.physics.arcade.collide(jugador, capa_plataforma);
game.physics.arcade.collide(stars, capa_plataforma);

game.physics.arcade.overlap(jugador, stars, this.agarrarEstrella, null, this);
game.physics.arcade.overlap(jugador, checkpoint, this.agarrarDiamante, null, this);

jugador.body.velocity.x=0;
        if(cursors.left.isDown)
        {
          //mover a la izquierda
          jugador.body.velocity.x= -150;
          //mom-=0.2;
          jugador.animations.play('movizq');
        }
        else if(cursors.right.isDown){
          //mover a la derecha
          jugador.body.velocity.x=150;
          //mom+=0.2;
          jugador.animations.play('movder');
        }
        else{
          //quietos
          jugador.animations.stop();
          jugador.frame=4;
        }

        if(cursors.up.isDown && jugador.body.onFloor()){
          jugador.body.velocity.y=-350;
        }
        else if(cursors.down.isDown){
          jugador.body.velocity.y=400;
        }

},

//esta funcion es para agarrar las estrellas
agarrarEstrella:function(jugador, star){
  //eliminamos la estrella
  star.kill();
  //aumentar el puntaje
  score+= 10;
  scoreText.text= 'Score: '+score;
  sound_star.play();
},

agarrarDiamante:function (jugador, checkpoint){
  sound_world2.stop();
  sound_goodend.play();
  game.state.start('win');
},

death:function(){
  sound_world2.stop();
  sound_badend.play();
  score=0;
  game.state.start('lose');
}




















}
