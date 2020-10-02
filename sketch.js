const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    t1Img = loadImage("images/images/thunderbolt/1.png");
    t2Img = loadImage("images/images/thunderbolt/2.png");
}

function setup(){
    canvas = createCanvas(2133, 1077);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1066, 1000, 2135, 50);
    batman = new Umbrella(1066, 900, 300);

    drops = [];
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    batman.display();

    if(frameCount%2===0) {
        drops.push(new drop(random(35,2098),10,10));
      }
    
      for(var j=0;j<drops.length;j++) {
        drops[j].display();
      }
}   

    