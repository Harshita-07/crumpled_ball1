var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var boxBottomBody, boxPosition, boxY;
var ball;

function preload()
{
}

function setup() {
	createCanvas(1600, 300);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition = width/2 + 500;
	 boxY = 210;
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0); 

	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody); 

	  boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	  boxBase.shapeColor=color(255,0,0); 

	  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	  World.add(world, boxBottomBody); 

	 boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
	 boxRightSprite.shapeColor=color(255,0,0); 
	 
	 boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	  World.add(world, boxRightBody);

	  // crumpled body

	  ball = new Paper(200, 200, 20);
	  var render = Render.create({
		   element: document.body, 
		   engine: engine, 
		   options: { 
			   width: 1200, 
			   height: 700, 
			   wireframes: false 
			} 
		}
		);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball.display();


  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {   
	   Matter.Body.applyForce(ball.body,ball.body.position, {x:85, y:-85});
	  // Matter.Body.setStatic(ball,false);

	 }
   }

