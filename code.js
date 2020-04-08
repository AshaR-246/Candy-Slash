var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d948377a-ce04-4508-8622-805aceaf406d","58631720-774b-4634-9405-aadfe0f3a822","e231e118-47cc-4cfd-b639-1cb10c2c0fb4","3b312bb5-6bd5-4b39-ba45-8b47d17d48e1","974fbe7b-fa69-4c35-8839-bdafe5ef2d3f","85822835-8dae-4bcd-aeb3-1c7de0ea94ed","88209a0c-d1a9-410f-84f5-3a12fcf488a4","8b1adef1-6c17-4b79-b64b-a1a662ed6a47","4ac44e79-1021-4348-85ad-8f92c0289e26","1aa459c6-0487-4d79-af2d-458604018b36","3a3454d9-4e99-4c06-930e-8008363ea962","e80bb200-7dd0-465c-8c48-ece462a9a8d9","0c0d8fec-7eca-4963-a17d-13c8f42da804","b015db38-09e8-4a24-924a-661db6335dc6"],"propsByKey":{"d948377a-ce04-4508-8622-805aceaf406d":{"name":"player","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ARWbTthiAr6pPqgtRg0sN.m.xid8t5Sy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d948377a-ce04-4508-8622-805aceaf406d.png"},"58631720-774b-4634-9405-aadfe0f3a822":{"name":"Blue","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"X9K5w3ezTjcgQRPy8LMcdZ9Zu3GgLPcr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/58631720-774b-4634-9405-aadfe0f3a822.png"},"e231e118-47cc-4cfd-b639-1cb10c2c0fb4":{"name":"Red","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9HSvVLU6_LDR0cxj1BPNr_gQTSZ9vpfj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e231e118-47cc-4cfd-b639-1cb10c2c0fb4.png"},"3b312bb5-6bd5-4b39-ba45-8b47d17d48e1":{"name":"Green","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"PjSBpGCZ5lPBvuQ2y3HEnGiacrJh2Q4F","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3b312bb5-6bd5-4b39-ba45-8b47d17d48e1.png"},"974fbe7b-fa69-4c35-8839-bdafe5ef2d3f":{"name":"Purple","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"x2VADpfq94ybZC79DMbMOghJlMHEhfSB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/974fbe7b-fa69-4c35-8839-bdafe5ef2d3f.png"},"85822835-8dae-4bcd-aeb3-1c7de0ea94ed":{"name":"Candy Slash","sourceUrl":null,"frameSize":{"x":864,"y":540},"frameCount":1,"looping":true,"frameDelay":12,"version":"izM1UumkGAk5pwCSEYFZ7va29B6r464d","loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":540},"rootRelativePath":"assets/85822835-8dae-4bcd-aeb3-1c7de0ea94ed.png"},"88209a0c-d1a9-410f-84f5-3a12fcf488a4":{"name":"Start","sourceUrl":null,"frameSize":{"x":960,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nn_tcs2FCbniOWIpkHmDYbz_nQVsdTFf","loadedFromSource":true,"saved":true,"sourceSize":{"x":960,"y":600},"rootRelativePath":"assets/88209a0c-d1a9-410f-84f5-3a12fcf488a4.png"},"8b1adef1-6c17-4b79-b64b-a1a662ed6a47":{"name":"Orange","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"nF3pDO5c60rTe5g7sh5PIU8GccejUQDL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8b1adef1-6c17-4b79-b64b-a1a662ed6a47.png"},"4ac44e79-1021-4348-85ad-8f92c0289e26":{"name":"spin_sprite","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":3,"version":"wyzbNMBor8KSDWs3iqlgqdmZe.voXgM5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/4ac44e79-1021-4348-85ad-8f92c0289e26.png"},"1aa459c6-0487-4d79-af2d-458604018b36":{"name":"Black","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"HiBon5nuNAgn9np.hiUKWu.xu9Xfct2F","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1aa459c6-0487-4d79-af2d-458604018b36.png"},"3a3454d9-4e99-4c06-930e-8008363ea962":{"name":"How_To_Play","sourceUrl":null,"frameSize":{"x":900,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"8U_WJvuekd83kgbHuRqipVYCGeBT97m5","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":600},"rootRelativePath":"assets/3a3454d9-4e99-4c06-930e-8008363ea962.png"},"e80bb200-7dd0-465c-8c48-ece462a9a8d9":{"name":"How","sourceUrl":null,"frameSize":{"x":924,"y":690},"frameCount":1,"looping":true,"frameDelay":12,"version":"l3Kp7.0MxhnHHElwV3mRJ.ZTz0ZA2lpK","loadedFromSource":true,"saved":true,"sourceSize":{"x":924,"y":690},"rootRelativePath":"assets/e80bb200-7dd0-465c-8c48-ece462a9a8d9.png"},"0c0d8fec-7eca-4963-a17d-13c8f42da804":{"name":"Yellow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9K.0qZPnVxGViwIu56yJ6If6xjUuyT1e","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0c0d8fec-7eca-4963-a17d-13c8f42da804.png"},"b015db38-09e8-4a24-924a-661db6335dc6":{"name":"pink","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IDkU6yuNXFKTU7eqwgJ4WAH7_aq8N9bE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b015db38-09e8-4a24-924a-661db6335dc6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

{
var player = createSprite(200, 200);
player.setAnimation("player");
player.setCollider("rectangle",0,0,25,25,0);
player.scale = 0.2;

var sword = createSprite(player.x, player.y, 100, 2.5);
sword.setCollider("rectangle",0,0,100,5,0);
sword.shapeColor = rgb(0, 250, 0);
sword.rotateToDirection = true;

var sword_handel = createSprite(player.x, player.y, 40, 5);
sword_handel.rotateToDirection = true;

var logo = createSprite(200, 75, 0, 0);
logo.setAnimation("Candy Slash");
logo.scale = 0.3;

var howtoplay = createSprite(100, 250);
howtoplay.setAnimation("How_To_Play");
howtoplay.setCollider("rectangle",0,0,300,200);
howtoplay.scale = 0.2;

var start_sprite = createSprite(100,200);
start_sprite.setAnimation("Start");
start_sprite.setCollider("rectangle",0,0,200,100,0);
start_sprite.scale = 0.3;

var HTP_sprite = createSprite(200,200);
HTP_sprite.setAnimation("How");
HTP_sprite.setCollider("rectangle",0,0,400,400,0);
HTP_sprite.scale = 0.4;
}

//colors


var backcolor = rgb(192,192,192);
var start = false;
var score = 0;
//var sword_speed = 30;

//Enemys
{
var enemy1 = createSprite(0,0, 25, 25);
enemy1.setCollider("rectangle",0,0,25,25,0);
enemy1.shapeColor = "purple";

var enemy2 = createSprite(400,0, 25, 25);
enemy2.setCollider("rectangle",0,0,25,25,0);
enemy2.shapeColor = "purple";

var enemy3 = createSprite(400,400, 25, 25);
enemy3.setCollider("rectangle",0,0,25,25,0);
enemy3.shapeColor = "purple";

var enemy4 = createSprite(0,400, 25, 25);
enemy4.setCollider("rectangle",0,0,25,25,0);
enemy4.shapeColor = "purple";

var enemy_speed = 3;
var enemyColors = ["orange", "purple", "red","pink"];

}

var enemy_loc_y = 0;
var enemy_loc_x = 0;

function draw() {
  if (start === false) {
    background(backcolor);
    
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    enemy4.visible = false;
    
   
    howtoplay.visible = true;
    HTP_sprite.visible = false;
    
   if(mousePressedOver(howtoplay)) {
    console.log("Hit on HTP");
    HTP_sprite.visible = true;
    
  }
  showMobileControls(true, true, true, true);
    
    if (mousePressedOver(start_sprite)) {
      start = true;
      console.log("hit on start");
      start_sprite.visible = false;
      
      enemy1.visible = true;
      enemy2.visible = true;
      enemy3.visible = true;
      enemy4.visible = true;
      
      enemy1.x = 0;
      enemy2.x = 400;
      enemy3.x = 400;
      enemy4.x = 0;
      
      enemy1.y = 0;
      enemy2.y = 0;
      enemy3.y = 400;
      enemy4.y = 400;
      
      

     howtoplay.visible = false;
      
      score = 0;
    }
    
  
    
    sword.scale = 1.5;
    sword_handel.scale = 1.5;
    player.scale = 0.5;
    
    player.x = 300;
    player.y = 200;
    sword.x = 300;
    sword.y = 200;
    sword_handel.x = 300;
    sword_handel.y = 200;
    
    drawSprites();
   } else {
    
    //Enemys
    {
    if (enemy1.x <= player.x){
      enemy_loc_x = enemy1.x - enemy_speed;
      enemy1.velocityX = enemy1.x - enemy_loc_x;
    } else {
      enemy_loc_x = enemy1.x + enemy_speed;
      enemy1.velocityX = enemy1.x - enemy_loc_x;
      
    }
    
    if (enemy1.y <= player.y){
      enemy_loc_y = enemy1.y - enemy_speed;
      enemy1.velocityY = enemy1.y - enemy_loc_y;
    } else {
      enemy_loc_y = enemy1.y + enemy_speed;
      enemy1.velocityY = enemy1.y - enemy_loc_y;
      
    }
    
    if (enemy2.x <= player.x){
      enemy_loc_x = enemy2.x - enemy_speed;
      enemy2.velocityX = enemy2.x - enemy_loc_x;
    } else {
      enemy_loc_x = enemy2.x + enemy_speed;
      enemy2.velocityX = enemy2.x - enemy_loc_x;
      
    }
    
    if (enemy2.y <= player.y){
      enemy_loc_y = enemy2.y - enemy_speed;
      enemy2.velocityY = enemy2.y - enemy_loc_y;
    } else {
      enemy_loc_y = enemy2.y + enemy_speed;
      enemy2.velocityY = enemy2.y - enemy_loc_y;
      
    }
    
    if (enemy3.x <= player.x){
      enemy_loc_x = enemy3.x - enemy_speed;
      enemy3.velocityX = enemy3.x - enemy_loc_x;
    } else {
      enemy_loc_x = enemy3.x + enemy_speed;
      enemy3.velocityX = enemy3.x - enemy_loc_x;
      
    }
    
    if (enemy3.y <= player.y){
      enemy_loc_y = enemy3.y - enemy_speed;
      enemy3.velocityY = enemy3.y - enemy_loc_y;
    } else {
      enemy_loc_y = enemy3.y + enemy_speed;
      enemy3.velocityY = enemy3.y - enemy_loc_y;
      
    }
    
    if (enemy4.x <= player.x){
      enemy_loc_x = enemy4.x - enemy_speed;
      enemy4.velocityX = enemy4.x - enemy_loc_x;
    } else {
      enemy_loc_x = enemy4.x + enemy_speed;
      enemy4.velocityX = enemy4.x - enemy_loc_x;
      
    }
    
    if (enemy4.y <= player.y){
      enemy_loc_y = enemy4.y - enemy_speed;
      enemy4.velocityY = enemy4.y - enemy_loc_y;
    } else {
      enemy_loc_y = enemy4.y + enemy_speed;
      enemy4.velocityY = enemy4.y - enemy_loc_y;
      
    }
    
    if(enemy1.collide(player)) {
      console.log("Player Dead");
      start = false;
      start_sprite.visible = true;
      score = 0;
    }
    
    if(enemy2.collide(player)) {
      console.log("Player Dead");
      start = false;
      start_sprite.visible = true;
      score = 0;
    }
    
    if(enemy3.collide(player)) {
      console.log("Player Dead");
      start = false;
      start_sprite.visible = true;
      score = 0;
    }
    
    if(enemy4.collide(player)) {
      console.log("Player Dead");
      start = false;
      start_sprite.visible = true;
      score = 0;
    }
    
    if(sword.collide(enemy1)) {
      enemy1.x = randomNumber(0,400);
      enemy1.y = 0;
      score = score + 1;
      
      enemy1.shapeColor = enemyColors[randomNumber(0, enemyColors.length-1)];
    }
    
    //Barriers
    {
      if(player.x > 400) {
        start = false;
        start_sprite.visible = true;
        score = 0;
      }
      
      if(player.y > 400) {
        start = false;
        start_sprite.visible = true;
        score = 0;
      }
      
      if(player.x < 0) {
        start = false;
        start_sprite.visible = true;
        score = 0;
      }
      
      if(player.y < 0) {
        start = false;
        start_sprite.visible = true;
        score = 0;
      }
    }
    
     if(sword.collide(enemy1)) {
      enemy1.x = 0;
      enemy1.y = randomNumber(0,400);
      score = score + 1;
      enemy1.setAnimation("Red");
     
    }
    
    
    if(sword.collide(enemy2)) {
      enemy2.x = 400;
      enemy2.y = randomNumber(0,400);
      score = score + 1;
      
      enemy2.setAnimation("Red");
    }
    
    if(sword.collide(enemy3)) {
      enemy3.x = randomNumber(0,400);
      enemy3.y = 400;
      score = score + 1;
      
      enemy3.setAnimation("Purple");
    }
    
    if(sword.collide(enemy4)) {
      enemy4.x = 0;
      enemy4.y = randomNumber(0,400);
      score = score + 1;
      enemy4.setAnimation("Green");
     
    }
    
    if(score == 0) {
      enemy_speed = 1;
      
      enemy1.rotationSpeed = 1;
      enemy2.rotationSpeed = 1;
      enemy3.rotationSpeed = 1;
      enemy4.rotationSpeed = 1;
    }
    
    if(score == 50) {
      enemy_speed = 3;
      
      enemy1.rotationSpeed = 3;
      enemy2.rotationSpeed = 3;
      enemy3.rotationSpeed = 3;
      enemy4.rotationSpeed = 3;
    }
    
    if(score == 100) {
      background("White");
      enemy_speed = 5;
      
      enemy1.rotationSpeed = 5;
      enemy2.rotationSpeed = 5;
      enemy3.rotationSpeed = 5;
      enemy4.rotationSpeed = 5;
    }
    
    if(score == 150) {
      enemy_speed = 7;
      
      enemy1.rotationSpeed = 7;
      enemy2.rotationSpeed = 7;
      enemy3.rotationSpeed = 7;
      enemy4.rotationSpeed = 7;
    }
    
    if(score == 200) {
      enemy_speed = 10;
      
      enemy1.rotationSpeed = 10;
      enemy2.rotationSpeed = 10;
      enemy3.rotationSpeed = 10;
      enemy4.rotationSpeed = 10;
    }
    
    if(score == 300) {
      enemy_speed = 20;
      
      enemy1.rotationSpeed = 20;
      enemy2.rotationSpeed = 20;
      enemy3.rotationSpeed = 20;
      enemy4.rotationSpeed = 20;
    }
    
    }
    
    sword.scale = 1;
    sword_handel.scale = 1;
    player.scale = 0.2;
    background(rgb(255, 0, 0, 0.5));
  
    
    //if (keyDown("space")) {
      sword.pointTo(World.mouseX,World.mouseY);
      sword_handel.pointTo(World.mouseX,World.mouseY);
    //}

    {
    if (keyDown("right")) {
      player.x = player.x + 5;
    }
    if (keyDown("left")) {
      player.x = player.x + -5;
    }
    if (keyDown("down")) {
      player.y = player.y + 5;
    }
    if (keyDown("up")) {
      player.y = player.y + -5;
    }
    }
  
    sword.x = player.x;
    sword.y = player.y;
    sword.rotation = World.mouseX;

    sword_handel.x = player.x;
    sword_handel.y = player.y;
    sword_handel.rotation = World.mouseX;
    
    textSize(25);
    
    textFont("Courier New");
    text(score, 350,50);
  
    drawSprites();
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
