cocoSsdStatus = "";
input = "";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
}

function find(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("modelStatus").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log('Model Loaded!');
    cocoSsdStatus = true;
}

function draw(){
    image(video, 0, 0, 300, 300);
}
