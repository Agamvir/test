class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.05;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.05;

    car3 = createSprite(width / 2 + 100, height - 100);
    car3.addImage("car3", car1_img);
    car3.scale = 0.05;

    car4 = createSprite(width / 2 + 100, height - 100);
    car4.addImage("car4", car2_img);
    car4.scale = 0.05;

    cars = [car1, car2, car3, car4];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      background("gray");
      image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);

      var index = 0;

      var x = 175;
      var y;

      for (var plr in allPlayers) {

        index = index + 1;

        x = x + 200;
        y = displayHeight-allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;
      }

      if(index === player.infex){
        cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index - 1].y
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10;
      player.update();
    }

    if (player.distance > 3860){
      gameState = 2;
    }

    drawSprites();
  }

    end(){
    console.log("game over")
  }
}