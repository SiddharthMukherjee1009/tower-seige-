const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var ball;
var score=0;

function preload() {
  polygon = loadImage("polygon.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(390, 300, 250, 10);

  ground1 = new Ground(50, 680, 20000, 10);

  ground2 = new Ground(759,200, 250, 10);

 // monster = new Monster(1100,550,300);

  box1 = new Box(300,  275, 30, 40);
  box2 = new Box(330,  275, 30, 40);
  box3 = new Box(360,  275, 30, 40);
  box4 = new Box(390,  275, 30, 40);

  box5 = new Box(420,  275, 30, 40);
  box6 = new Box(450,  275, 30, 40);
  box7 = new Box(480, 275, 30, 40);
  box8 = new Box(330,  235, 30, 40);

  box9 = new Box(360,  235, 30, 40);
  box10 = new Box(390,  235, 30, 40);
  box11 = new Box(420,  235, 30, 40);
  box12 = new Box(450,  235, 30, 40);

 box13 = new Box(670, 100, 30, 40);
  box14 = new Box(700,  100, 30, 40);
  box15 = new Box(730, 100, 30, 40);
  box16 = new Box(760,  100, 30, 40);

  box17   = new Box(790,  100, 30, 40);
  box18   = new Box(820,  100, 30, 40);
  box19   = new Box(850,  100, 30, 40);

  box21   = new Box(700,  50, 30, 40);
  box22   = new Box(730,  50, 30, 40);
  box23   = new Box(760, 50, 30, 40);
  box24   = new Box( 790,  50, 30, 40);
  box25   = new Box( 820,  50, 30, 40);

  


  ball=Bodies.circle(50,200,20)
  World.add(world,ball)

  rope = new Rope(this.ball, { x: 100, y: 200 });
}

function draw() {
  background(255);
  Engine.update(engine);

text("score="+score,50,100)

  if(isTouching(ball,box1)){
    score=score+10
  }

  
  ground.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
 box13.display();
  box14.display();
  box16.display();
  box15.display();
 box17.display();
box18.display();
box19.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();


imageMode(CENTER)
image(polygon,ball.position.x,ball.position.y,40,40)

 // hero.display();
  rope.display();
 // monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

/*function isTouching(p1,p2){
  if(p2.x-p1.x< p1.width/2+p2.width/2 &&
    p1.x-p2.x<p1.width/2+p2.width/2
    && p1.y-p2.y<p1.height/2+p2.height/2&&
    p2.y-p1.y<p1.height/2+p2.height/2){
      

    return true
  }
  else{
   return false
  }
}*/