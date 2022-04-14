Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function toma_foto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
function modelLoaded() {
    console.log ("Miss cual es su otra respuesta?");
}
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/DC78PYh5X/model.json', modelLoaded);
function check() {
    foto = document.getElementById("captured_image");
    classifier.classify(foto, resultado);
}

function resultado(error, results) {
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}