var database;
var dogImage;
var dog;
var foodCount = 0;

function preload() {
  dogImage = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(600, 350, 100, 100);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  var ref = database.ref("food");
  ref.on("value", function (data) {
    foodCount = data.val();
  });
}

function draw() {
  background("green");
  textSize(30);
  stroke("yellow");
  fill("yellow");
  text("food remaining with the dog is : " + foodCount, 50, 100);
  if (keyDown(DOWN_ARROW)) {
    database.ref("/").update({
      food: foodCount - 1,
    });
  }
  drawSprites();
}
