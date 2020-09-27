const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300


function setup() {
  createCanvas(480,800);
  engine= Engine.create()
  world=engine.world

  for(var j=40; j<=width;j=j+50){
    var p= new Plinko(j,75)
    plinkos.push(p)
  }
  
  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
  for(var k=0; k<=width; k=k+80){
   divisions.push(new Division (k,800-divisionHeight/2,10,divisionHeight))
  }

  ground= new Ground(240,790,480,20)
}

function draw() {
  background("black"); 
  Engine.update(engine) 

  ground.display()
  for(var i=0; i<divisions.length; i++){
    divisions[i].display()
  }
  for( var h=0; h<plinkos.length; h++){
    plinkos[h].display()
  }
  for(var j=0; j < particles.length;j++){
    particles[j].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }

  
}

