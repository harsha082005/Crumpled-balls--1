
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(80,280,10);
	ground = new Ground(350,380,1200,10);
	dustbin1 = new Dustbin(710,345,10,60);
	dustbin2 = new Dustbin(640,370,130,10);
	dustbin3 = new Dustbin(570,345,10,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 keyPressed();
 
 drawSprites();

 
}


function keyPressed(){

	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});

		
	}
}


