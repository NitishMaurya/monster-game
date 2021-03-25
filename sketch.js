const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;
function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  box1 = new Box(600,100,70,70)
  box2 = new Box(600,120,70,70)
  box3 = new Box(600,130,70,70)
  box4 = new Box(600,140,70,70)
  box5 = new Box(600,150,70,70)


}

function draw() {
  background(255);
  Engine.update(engine);
  hero.display();
  rope.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
