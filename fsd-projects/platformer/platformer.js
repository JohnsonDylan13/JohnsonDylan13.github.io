$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(350, 620, 200, 20, "Fuchsia"); 
    createPlatform(700, 550, 200, 20, "Fuchsia");
    createPlatform(1000, 520, 100, 20, "Fuchsia")
    createPlatform(1200, 480, 180, 20, "Fuchsia")
    createPlatform(1245,400,95,20, "Fuchsia")
    createPlatform(1300, 190, 90, 20, "Fuchsia")
    createPlatform(1000, 290, 90, 20, "Fuchsia", 1000, 1200, 1)
    createPlatform(800, 200, 120, 20, "Fuchsia")
    createPlatform(500, 240, 100, 20, "Fuchsia")
    createPlatform(150, 200, 60, 20, "Fuchsia")
    createPlatform(290, 200, 60, 20, "Fuchsia")
    createPlatform(290, 390, 20, 100, "Fuchsia")
    createPlatform(150, 200, 20, 290, "Fuchsia")
    createPlatform(150, 490, 160, 20, "Fuchsia")
    createPlatform(150, 200, 20, 20, "Fuchsia")
  



    // TODO 3 - Create Collectables

    createCollectable("steve", 1030, 450, 0, 1, 1000, 1100, 2);
    createCollectable("database", 1325, 140);
    createCollectable("grace", 210, 430);

    
    // TODO 4 - Create Cannons

    createCannon("top", 1400, 3000);
    createCannon("left", 90, 2000);
    createCannon("top", 310, 2000);
    createCannon("bottom", 650, 2500);
    createCannon("bottom", 1160, 1900)
    createCannon("left", 360, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
