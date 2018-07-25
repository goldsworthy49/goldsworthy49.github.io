var i = 0;
var txt = 'Hello traveler.. Welcome to my little corner of the web..';
var arrow = ' &#x25BF;';
var speed = 50;

var statsTxt = "Name: Lexie Brown<br>DOB: November 3, 1995<br>Location: Bloomington, IN<br>"
              + "Undergrad: Miami University<br>"
              + "<br>BS in Computer Science<br>~4 years of programming<br>"
              + "<br>Interests: musical instruments, fencing, reality TV (especially Big Brother), "
              + "true crime, card games, and The Beatles<br><br><br><br><br>";
var inventoryTxt = "This is where I'll post my latest projects.<br>Under construction..<br><br><br><br><br>";
var skillsTxt = "<br><br><br><br><br>";
var loreTxt = "Teaching Assistant<br>(1/18 - 5/18)<br>Systems I: Intro to Operating Systems and Systems Programming<br>"
              + "<br>Teaching Assistant<br>(1/18 - 5/18)<br>Data Communications and Networks<br><br><br><br><br>";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if (i == 16) {
      document.getElementById("hello").innerHTML += '<br><br>';
      i++;
    }
  } else { 
    document.getElementById("arrow").innerHTML += arrow;
    document.getElementById("arrow").className = "blinking";
    document.getElementById("arrow").innerHTML += '<br><br><br>';
    blinker();
    addStats();
    addInventory();
    addSkills();
    addLore();
  }
}

function addStats() {
  document.getElementById("stats").innerHTML += "Stats<br>";
  document.getElementById("statsTxt").style.fontSize += "0.6em";
  document.getElementById("statsTxt").innerHTML += statsTxt;
}

function addInventory() {
  document.getElementById("inventory").innerHTML += "Inventory<br>";
  document.getElementById("inventoryTxt").style.fontSize += "0.6em";
  document.getElementById("inventoryTxt").innerHTML += inventoryTxt;
}

function addSkills() {
  document.getElementById("skills").innerHTML += "Skills<br>";
  document.getElementById("skillsTxt").style.visibility = "visible";
  document.getElementById("skillsTxt").style.fontSize += "0.2em";
  document.getElementById("skillsTxt").style.textAlign = "center";
  document.getElementById("skillsTxt").innerHTML += skillsTxt;
}

function addLore() {
  document.getElementById("lore").innerHTML += "Lore<br>";
  document.getElementById("loreTxt").style.fontSize += "0.6em";
  document.getElementById("loreTxt").innerHTML += loreTxt;
}

function blinker() {
  $('.blinking').fadeOut(1000);
  $('.blinking').fadeIn(1000);
}
setInterval(blinker, 2000);