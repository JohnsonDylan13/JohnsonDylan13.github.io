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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawblade (x,y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    createSawblade(1000, 300);
    createSawblade(900, 200);
    createSawblade(800,100);


    function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50,"red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = groundY - y;
    game.addGameItem(enemy);
    enemy.velocityX = -1;
    enemy.rotationalVelocity = -1;
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
      var reward = game.createGameItem("reward", 25);
      var greenCircle = draw.circle(25, "green", 1, 1);
      greenCircle.x = -25;
      greenCircle.y = -25;
      reward.addChild(greenCircle);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward); 
      reward.velocityX = -1;
      reward.rotationalVelocity = -1;
      reward.onPlayerCollision = function () {
      game.increaseScore(100);
      reward.flyTo(0,0)
      };
      reward.onProjectileCollision = function() {
      game.increaseScore(300);
      reward.shrink(); 
    }
    }
      createReward(1100, groundY - 250);

      function createMarker(x, y) {
      var marker = game.createGameItem("Marker", 25);
      var blueSquare = draw.rect(50, 100, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      marker.addChild(blueSquare);
      marker.x = x;  
      marker.y = groundY - y;
      game.addGameItem(marker);
      marker.velocityX = -0.5;

      marker.onPlayerCollision = function() {
        startLevel();
      }
      marker.onProjectileCollision = function() { 
       startLevel();  
      }
      }
      createMarker(1200, groundY - 237)


    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = levelData[gameItems]
      for (var i = 0; i < gameObjects.length; i++) {
        
      }

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
