var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music,cloud,cloudImg

function preload(){
    // load sound here
    music=loadSound("music.mp3");
    cloudImg=loadImage("unnamed.jpg");
}


function setup(){
    canvas = createCanvas(800,600);

    cloud=createSprite(400,300);
    cloud.addImage(cloudImg);
    cloud.scale=2;



    block1 = createSprite(90,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,180,30);
    block2.shapeColor = "orange";

//create two more blocks i.e. block3 and block4 here

    block3=createSprite(490,580,180,30);
    block3.shapeColor = "green";

    block4=createSprite(690,580,180,30);
    block4.shapeColor= "red";

    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb("white");
    //write code to add velocityX and velocityY
    ball.velocityX=Math.round(random(3,8));
    ball.velocityY=Math.round(random(3,8));
}

function draw() 
{
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
  /*  ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);*/

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball))
    {
        ball.shapeColor = "orange";
        text("Press space to reset",300,300);        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
       music.pause();
      
    }

    if(block2.isTouching(ball)&&keyDown("space"))
    {
     reset ();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
        music.play();
    }

    drawSprites();
}
function reset()
{
ball.y=100;
ball.x=Math.round(random(20,750));
ball.velocityX=Math.round(random(3,8));
ball.velocityY=Math.round(random(3,8));
ball.shapeColor = rgb("white");
}