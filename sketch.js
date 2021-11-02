var ground;
var dustBin;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(800, 690, 1600, 10);
  dustBin = new DustBin(1200, 650);
  ball = new Ball(200, 450, 40);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  ground.display();
  dustBin.display();
  ball.display();
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.positon, { x: 85, y: -85 });
  }
}
