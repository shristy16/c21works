const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var ground1;
var leftSide;
var rightSide;




function preload()
{
	
}	


function setup(){

	createCanvas(700,800);
	engine = Engine.create();
	world = engine.world;


  var ball_options={
   isStatic:true,
    restitution:0.3,
    friction:0,
    density:1.,


    }


    ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);


    ground=new Ground(350,670,width,20);
    ground1 =new Ground(450,570,width,10);



}


	


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  drawSprites();
 
}