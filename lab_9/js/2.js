sec = document.getElementById("ammm");

sec.style.position = 'absolute';

var i = 0;
sec.style.left = 0 + 'px';

function track(){
    i += 2;
    sec.style.left = i + 'px';
    if(i % 1300 == 0){
        clearInterval(timer);
    }
}

function start(){
    timer = setInterval(track, 1);
}

sec.onclick = function(){
    if(i % 1300 == 0 && i != 0){
        i = 0;
        sec.style.left = 0 + 'px';
    }else{
        start();
    }
}