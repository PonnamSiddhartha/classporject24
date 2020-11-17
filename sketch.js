const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,400,750,20);
  paper = new Paper(50, 200,30);


  boxPosition=width/2-100
 	boxY=610;


 	box1=createSprite(boxPosition, boxY, 20,100);
 	box1.shapeColor=color(255,0,0);

 	box1 = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, box1);

 	box2=createSprite(boxPosition+100, boxY+40, 200,20);
 	box2.shapeColor=color(255,0,0);

 	box2 = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, box2);

 	box3=createSprite(boxPosition+200 , boxY, 20,100);
 	box3.shapeColor=color(255,0,0);

 	box3 = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, box3)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
	}
}


