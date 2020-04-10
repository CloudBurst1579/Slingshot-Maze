const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, target1;
var projectile, slingShot;

var gameState = "onsling";

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);
    platform = new Ground(810,150,350,10);
    wall1 = new Ground(1200,200,10,400);
    wall2 = new Ground(0,200,10,400);
    ceiling = new Ground(600,0,1200,10);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    target1 = new Target(810, 350);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    target2 = new Target(810, 220);

    box5 = new Box(700,110,70,70);
    box6 = new Box(920,110,70,70);
    target3 = new Target(810,120);

    projectile = new Projectile(100,100);
    
    slingshot = new Slingshot(projectile.body,{x:230,y:180});
}

function draw(){
    background(255,255,255);
    Engine.update(engine);

    ground.display();
    platform.display();

    box1.display();
    box2.display();
    target1.display();

    box3.display();
    box4.display();
    target2.display();

    box5.display();
    box6.display();
    target3.display();

    projectile.display();
    slingshot.display();    
}

function mouseDragged()
{

    if(gameState==="onsling")
    Matter.Body.setPosition(projectile.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
    gameState = "released";
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(projectile.body);
        gameState = "onsling";
    }
}