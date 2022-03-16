navigator.mediaDevices.getUserMedia({
    video:true
})
.then(stream => {
    document.getElementById('vid').srcObject = stream;
})

    document.getElementById('myButton').onclick = function(){
    var myMessage = document.getElementById('myText').value;
    console.log(myMessage)
    document.getElementById("demo").innerHTML = myMessage;
    }