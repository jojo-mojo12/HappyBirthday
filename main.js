var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

window.onload = function() {
    document.getElementById("loadingMessage").style.display = "block";
};

function playSound() {
    x.play();
    document.getElementById("loadingMessage").style.display = "none";
}

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(img){
    block_image_object = img;
	
    block_image_object.set({ 
        top:0,
        left:0
    });
    canvas.add(block_image_object);
    });
}

function playSound(){
	x.play();
    document.getElementById("loadingMessage").style.display = "none";
    document.getElementById("body").classList.add("show_background");
}

