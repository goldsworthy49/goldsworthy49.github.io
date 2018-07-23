var i = 0;
var txt = ''; /* The text */
var arrow = ' &#x25BF;';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

  switch(window.location.pathname) {
    case '/':
      txt = 'Hello traveler.. Welcome to my little corner of the web..';
      type();
      break;
    case '/#stats.html':
      txt = 'Stats';
      type();
      break;
  }

  function typeHello() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      if (i == 16) {
      	document.getElementById("demo").innerHTML += '<br><br>';
      	i++;
      }
    } else { 
    	document.getElementById("arrow").innerHTML += arrow;
    	document.getElementById("arrow").className = "blinking";
    	blinker();
    }
  }
}

function blinker() {
	$('.blinking').fadeOut(1000);
	$('.blinking').fadeIn(1000);
}
setInterval(blinker, 2000);