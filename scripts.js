navigator.mediaDevices.getUserMedia({
    video:true
})
.then(stream => {
    document.getElementById('vid').srcObject = stream;
})

/*
 width:{
            min:640,
            max:1280    
        },
        height:{
            min: 480,
            max: 720
        },
        frameRate: 1
*/