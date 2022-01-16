img="";
statuss="";
objects=[];
function preload(){
    img = loadImage("fox.jpg");
}
function setup(){
    canvas=createCanvas(1200,700);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("statuss").innerHTML="Status: Detecting Objects...";
    
}
function draw(){
    image(img,0,0,1200,700);
    
}
function modelloaded(){
    console.log("Model Loaded :DDD");
    statuss="true";
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
        if(statuss!=""){
            for(i=0;i<objects.length;i++){
                document.getElementById("statuss").innerHTML="Status: Objects Detected!";
                fill("red");
                noFill();
                stroke("red");
                percent=floor(objects[i].confidence*100);
                text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
    }
    
}
