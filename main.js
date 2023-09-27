noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);//Initialization
    poseNet.on('pose', gotPoses);//Execution
}


function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftwristX = " + leftWristX +
    "rightWristX = "+ rightWristX + "difference = " +
    difference);
    textSize(difference);
    }
}


function draw()
{
    background('#969A97');
    textSize(difference);
    fill(0, 102, 153);
    text('Vedanth', 10, 60);

}