var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
var textArea = document.getElementById("textbox")
function start() {
    textArea.innerHTML=""
    Recognition.start()   
}

Recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    textArea.innerHTML = content
    if (content == "tire minha selfie") {
        console.log("Tirando uma selfie! EM 5 SEGUNDOs")
        speak()
    }
}

function speak() {
    var sintent = window.speechSynthesis
    var speakData = "Selfie em 5 segundos!"
    var sayThis = new SpeechSynthesisUtterance(speakData)
    sintent.speak(sayThis)
    Webcam.attach(camera)
    setTimeout(function(){
        Takeselfie()
        Save()
    },5000)
}
camera = document.getElementById("camera")
Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function Takeselfie() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>"         
    })
}

function Save() {
    link = document.getElementById("link")
    image = document.getElementById("selfie").src 
    link.href = image
    link.click()
}