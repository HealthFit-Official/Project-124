
function setup()
 {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(700, 450);
  canvas.position(560,150);

 
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initilized!!!')
}

function draw() {
  background('rgb(255, 117, 26)')
}

function gotPoses(results)
{
  if(results.length >0)
  {
    console.log(results);
  }
}