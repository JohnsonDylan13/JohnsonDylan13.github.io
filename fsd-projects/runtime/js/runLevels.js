var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawblade (x,y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/tumblehweed.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -60;
    obstacleImage.y = -30;
    obstacleImage.scaleX = .4;
    obstacleImage.scaleY = .4;
    sawBladeHitZone.rotationalVelocity = -1;
    }
    createSawblade(800, groundY - 20 );
    createSawblade(1000, groundY - 20);
    createSawblade(1200, groundY - 100);


    function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var meanBird = draw.bitmap("img/votur.png")
    meanBird.x = -60;
    meanBird.y = -45;
    meanBird.scaleX = .5;
    meanBird.scaleY = .5;
    enemy.addChild(meanBird);
    enemy.x = x;
    enemy.y = groundY - y;
    game.addGameItem(enemy);
    enemy.velocityX = -1;
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function() {
    game.increaseScore(100);
    enemy.shrink(); 
    }
  
  }
    createEnemy(400, groundY - 250);
    createEnemy(700, groundY - 250);
    createEnemy(1200, groundY - 250);

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 20);
      var waterDropplet = draw.bitmap("img/wader.png")
      waterDropplet.x = -40;
      waterDropplet.y = -40;
      waterDropplet.scaleX = .5;
      waterDropplet.scaleY = .5;
      reward.addChild(waterDropplet);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward); 
      reward.velocityX = -1;
      reward.onPlayerCollision = function () {
      game.increaseScore(100);
      reward.flyTo(0,0)
      };
      reward.onProjectileCollision = function() {
      game.increaseScore(300);
      reward.flyTo(0,0); 
    }
    }
      createReward(1100, groundY - 250);

      function createMarker(x, y) {
      var marker = game.createGameItem("Marker", 25);
      var yellerFlag = draw.bitmap("img/sixthflag.png");
      yellerFlag.x = -60;
      yellerFlag.y = -40;
      yellerFlag.scaleX = .5;
      yellerFlag.scaleY = .6;
      marker.addChild(yellerFlag);
      marker.x = x;  
      marker.y = groundY - y;
      game.addGameItem(marker);
      marker.velocityX = -0.5;
      marker.onPlayerCollision = function() {
        startLevel();
        game.changeIntegrity(+100);
      }
      marker.onProjectileCollision = function() { 
       startLevel();  
       game.changeIntegrity(+100);
      }
      }
      createMarker(1200, groundY - 237)
      


    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = levelData[gameItems]
      for (var i = 0; i < gameObjects.length; i++) {
        
      }
      console.log(level);

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
