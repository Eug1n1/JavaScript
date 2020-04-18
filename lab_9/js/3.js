function SinMove(){
	let curPosX = 100;
	let curPosY = 200;
	let n = 10;
    let img1 = document.getElementById('Image');
    img1.style.position = 'absolute'
	let topSin = 100;
	let Temp;
	let interval;
	interval = setInterval(move, 50);
	function move(){
		img1.style.left = (curPosX += n) + 'px';
		Temp = 50 * Math.sin(2 * curPosX + 10);
		img1.style.top = (curPosY += Temp) + 'px';
		if (curPosX == 500){
			clearInterval(interval);
			interval = setInterval(moveBack, 50);
			img1.style.top = 200 + 'px';
		}
	}
	function moveBack(){
		img1.style.left = (curPosX -= n) + 'px';
		if (curPosX == 100)
			clearInterval(interval);
	}
}