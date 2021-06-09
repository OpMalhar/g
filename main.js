Webcam.set({
height:300,
width:300,
image_format:'jpeg',
jpeg_quality:100    
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
function Ci() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'"/>';
    });
}
console.log(ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bhSW_t8N_/model.json",modelLoaded);
function modelLoaded() {
    console.log("Model is loaded")
}
function Ii(){
    img=document.getElementById("img1");
classifier.classify(img,gotResult);
}
function gotResult(error,Results){
if (error) {
    console.error(error);
} else {
    console.log(Results);
document.getElementById("emname").innerHTML=Results[0].label;
document.getElementById("emname2").innerHTML=Results[1].label;
if (Results[0].label="Amazing") {
    document.getElementById("emo").innerHTML="&#128076;"
}
if (Results[0].label="Cool") {
    document.getElementById("emo").innerHTML="&#128077;"
}
if (Results[0].label="Swag") {
    document.getElementById("emo").innerHTML=" &#128077;"
}
if (Results[0].label="Amazing") {
    document.getElementById("emo2").innerHTML="&#128076;"
}
if (Results[0].label="Cool") {
    document.getElementById("emo2").innerHTML="&#128077;"
}
if (Results[0].label="Swag") {
    document.getElementById("emo2").innerHTML=" &#128077;"
}
}    
}
