const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    //ball
    //ground
    //boxes

    ball = Bodies.circle(50, 50, 20)
    World.add(world, ball)

    ground = Bodies.rectangle(400, 500, 800, 10, { isStatic: true })
    World.add(world, ground)

    Engine.run(engine);
    box1 = Bodies.rectangle(400, 450, 30, 100)
    box2 = Bodies.rectangle(500, 490, 100, 30)
    box3 = Bodies.rectangle(600, 450, 30, 100)


}


function draw() {
    rectMode(CENTER);
    background(0);
    ellipse(ball.position.x, ball.position.y, 40)
    rect(ground.position.x, ground.position.y, 800, 10)
    rect(box1.position.x, box1.position.y, 30, 100)
    rect(box3.position.x, box3.position.y, 30, 100)

    rect(box2.position.x, box2.position.y, 100, 30)

}

function keyPressed() {
    Body.applyForce(ball, ball.position, {
        x: 0.04,
        y: -0.04
    })

    console.log("applyForce")
}