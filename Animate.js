var palpatine = document.getElementById("animation4");
var ypos1 = 440;
var saber = document.getElementById("animation5");
var xpos2 = 980;
var id = setInterval(frame, 7);



function frame(){
    if( ypos1 == 110){
        clearInterval(id);
    } else{
        ypos1--;
        animation4.style.top = ypos1 + 'px';
    }
    if( xpos2 == 370){
        clearInterval(id);
    }
    else{
        xpos2++;
        animation5.style.left = xpos2 + 'px';
    }

}

