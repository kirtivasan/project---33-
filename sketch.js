var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "start";

var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  fill("white");
  textSize(40);
  text("500",700,500,1000);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");

   textSize(20);
  text("Score : "+score,20,30);
  textSize(30);
  fill("lightgreen");
  text("500",15,650);
  text("500",95,650);
  fill("orange");
  text("200",175,650);
  text("200",255,650);
  fill("red");
  text("100",335,650);
  text("100",415,650);
  fill("orange");
  text("200",495,650);
  text("200",575,650);
  fill("lightgreen");
  text("500",655,650);
  text("500",735,650);
 
  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();     
   }
 
  for (var j = 0; j < particles.length; j++) 
  {   
      if(particles[j]!=null)
      {
        particles[j].display();
        if(particles[j].body.position.y>500)
        {
          if(particles[j].body.position.x > 3 && particles[j].body.position.x <150)
          {      
              score=score+500;
              particles[j]=null;        
          } 

          else if(particles[j].body.position.x>150 && particles[j].body.position.x<330)
          {
              score=score+200;
              particles[j]=null;        
          }
          else if(particles[j].body.position.x>330 && particles[j].body.position.x<490)
          {
              score=score+100;
              particles[j]=null;        
          }
          else if(particles[j].body.position.x>490 && particles[j].body.position.x<630)
          {
              score=score+200;
              particles[j]=null;        
          }
          else if(particles[j].body.position.x>630 && particles[j].body.position.x<800)
          {
              score=score+500;
              particles[j]=null;        
          }
        }
      }
    
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(count>4){
      gameState="end";
   }

}
function mousePressed(){

  if(gameState == "start")
  {
  particles.push(new Particle(mouseX,10,10));
  count++;
  }

}