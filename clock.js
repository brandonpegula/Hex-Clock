var clock = document.getElementById('clock');
var color = document.getElementById('color');

function digitClock(){
	var time = new Date();
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	var clockString = hours + ':' + minutes + ':' + seconds;
	var hexcolorString = '#' + seconds + hours + seconds;

	clock.textContent = clockString;

	document.body.style.transform = 'scale(' + seconds/35 + ')';

	document.body.style.backgroundColor = hexcolorString;
}

setInterval(digitClock, 1000);



// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());