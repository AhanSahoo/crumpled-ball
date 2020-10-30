
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   
	ground = new Ground(400,680,800,20)
	ball = new Ball(100,450,30)
	box = new Box(500,650,300,30)
	box1 = new Box(350,590,30,150)
	box2 = new Box(650,590,30,150)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display()
  ground.display()
  box.display()
  box1.display()
  box2.display()
}
function keyPressed() {
	if(keyCode == UP_ARROW ){

		Matter.Body.applyForce(ball.ballBody,ball.ballBody.position,{x:10,y:-80})
		console.log(ball.ballBody.position)
	}
}



