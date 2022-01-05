video = "";
function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
canvas = createCanvas(380,380);
canvas.position(450, 250);
}

function draw()
{
    image(video, 0, 0, 380, 380);
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("stattus").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    stattus = true;
    video.loop();
    video.speed(1)
    video.volume(0)
}