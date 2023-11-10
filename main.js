Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera")
Webcam.attach( '#camera' );

function snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image"src"'+data_uri+'"/>';

});
}
console.log("ml5 version = ", ml5.version);
classifier = ml5.classify("https://teachablemachine.withgoogle.com/models/HyEsUMDXU/model.json", modelloaded);
function modelloaded()
{
  console.log("modelisloaded");
}
function identify()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult()
{
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("gesture_name").innerHTML = results[0].label;
        document.getElementById("result").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if
    }
}