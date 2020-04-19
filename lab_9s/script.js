var ball = document.getElementById('immm');

ball.onmousedown = function(e) {

    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    ball.style.position = 'absolute';
    document.body.appendChild(ball);
    moveAt(e);

    ball.style.zIndex = 1000;

    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    };

}

ball.ondragstart = function() {
    return false;
};

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function HorizontalMove(){
	let PosX = 0;
	let n = 10; 
	let img1 = document.getElementById("immm");
	let interval = setInterval(move, 50);
	function move() {
	  img1.style.left = (PosX += n) + "px";
	  if (PosX == 300)
	  	clearInterval(interval);
	}
}

function Move(){
	let PosX = 100;
	let PosY = 200;
	let nX = 10;
	let img1 = document.getElementById('immm');
	let topSin = 100;
	let nY;
	let interval;
	interval = setInterval(move, 50);
	function move(){
		img1.style.left = (PosX += nX) + 'px';
		nY = 50 * Math.sin(2 * PosX + 10);
		img1.style.top = (PosY += nY) + 'px';
		if (PosX == 500){
			clearInterval(interval);
			interval = setInterval(moveBack, 50);
			img1.style.top = 200 + 'px';
		}
	}
	function moveBack(){
		img1.style.left = (PosX -= nX) + 'px';
		if (PosX == 100)
			clearInterval(interval);
	}
}