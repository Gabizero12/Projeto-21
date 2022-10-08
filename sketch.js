var Ball
var ground
var left
var right
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 900);

var Balls_options={
    isStatic: false,
    restitution:0.3,
	  friction:2,
    density:1.2


}




engine = Engine.create();
	world = engine.world;
 
	
	//Create the Bodies Here.
  Ball = Bodies.circle(200, 150, 20, 10, Balls_options);
  World.add(world,Ball)
  Engine.run(engine);
  
  
  ground = new Ground(width/2,670,width,20);
  left= new Ground(1100,600,20,120);
  right= new Ground(500,300,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(Ball.position.x,Ball.position.y,60)


ground.display();

}

function hForce() { 
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); }
                                                                                                                                   
  function vForce() { 
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); }

    function keyReleased()  {
      if(keyCode === UP_ARROW) {
      
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); 
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); 
      
      }
    }