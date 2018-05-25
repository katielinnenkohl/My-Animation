var palpatine = document.getElementById("animation4");
var xpos = 440;
var ypos = 350;
var id= setInterval(frame, 5);

function frame(){
    if( ypos == 0){
        clearInterval(id);
    }
    else{
        ypos--;
        animation4.style.top = ypos + 'px';
    }
}
