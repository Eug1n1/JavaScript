const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

document.forms[0].addEventListener('change', e => {
	switch (+e.target.value) {
		case 1:
			f1();
			break;
		case 2:
			f2();
			break;
		case 3:
			f3();
			break;
		case 4:
			f4();
			break;
	}
});

document.forms[1].addEventListener('change', e => {
	ctx.strokeStyle = e.target.value;
})

function f1() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let scale = 20;
	let x;
	let y;
	ctx.beginPath();
	for (x = -canvas.width / 2; x <= canvas.width / 2; ++x) {
		y = Math.pow(x, 2) / scale;
		ctx.lineTo(150 + x, 300 - y);
	}
	ctx.stroke();
}

function f2() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let scale = 3000;
	let x;
	let y;
	ctx.beginPath();
	for (x = -canvas.width / 2; x <= canvas.width / 2; ++x) {
		y = Math.pow(x, 3) / scale + canvas.height / 2;
		ctx.lineTo(150 + x, 300 - y);
	}
	ctx.stroke();
}

function f3() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let x;
	let y;
	let amplitude = 100;
	let scale = 50;
	ctx.beginPath();
	for (x = 0; x <= canvas.width; ++x) {
		y = (Math.sin(x / scale) * amplitude + canvas.height / 2);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

function f4() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let x;
	let y;
	let amplitude = 100;
	let scale = 50;
	ctx.beginPath();
	for (x = 0; x <= canvas.width; ++x) {
		y = (Math.cos(x / scale) * amplitude + canvas.height / 2);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}