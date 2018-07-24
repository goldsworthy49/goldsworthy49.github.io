var i = 0;
var txt = 'Hello traveler.. Welcome to my little corner of the web..'; /* The text */
var arrow = ' &#x25BF;';
var speed = 50; /* The speed/duration of the effect in milliseconds */

var statsTxt = "Name: Lexie Brown<br>DOB: November 3, 1995<br>Location: Bloomington, IN<br>"
              + "<br>BS in Computer Science<br>~4 years of programming<br>"
              + "<br>Interests: musical instruments, fencing, reality TV (especially Big Brother), "
              + "true crime, card games, and The Beatles<br>";
var inventoryTxt = "Inventory<br><br>Aenean ultrices facilisis mauris scelerisque mattis.<br>";
var skillsTxt = "Skills<br><br>Donec volutpat accumsan congue. Nam efficitur aliquam lorem.<br>";
var loreTxt = "Lore<br><br>Nunc nec enim mollis, vulputate dui vel, ultricies tellus. Sed tincidunt urna eros, ut tincidunt erat placerat ac. Ut eget turpis eget sapien tincidunt condimentum.<br>";

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
  document.getElementById("inventory").innerHTML += inventoryTxt;
}

function addSkills() {
  document.getElementById("skills").innerHTML += skillsTxt;
}

function addLore() {
  document.getElementById("lore").innerHTML += loreTxt;
}

function blinker() {
  $('.blinking').fadeOut(1000);
  $('.blinking').fadeIn(1000);
}
setInterval(blinker, 2000);