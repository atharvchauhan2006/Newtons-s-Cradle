
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;





function setup() {
	createCanvas(1800, 1700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(900,100,300,20);
	
	bob1 = new Paper(820,300,40);
	bob2 = new Paper(860,300,40);
	bob3 = new Paper(900,300,40);
	bob4 = new Paper(940,300,40);
	bob5 = new Paper(980,300,40);
	

	string1 = new Chain(bob1.body,{x:820,y:100});
	string2 = new Chain(bob2.body,{x:860,y:100});
	string3 = new Chain(bob3.body,{x:900,y:100});
	string4 = new Chain(bob4.body,{x:940,y:100});
	string5 = new Chain(bob5.body,{x:980,y:100});
	
	
	
	

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  
 
}




