var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log("recognition has started");
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking your selfie in five seconds");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'">';
        }

    );
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfieimage").src;
    link.href=image;
    link.click();
}
