var i = 0;
var txt = 'Hello traveler.. Thank you for stopping by..';
var arrow = ' &#x25BF;';
var speed = 50;

var statsTxt = "Name: Lexie Brown<br>DOB: 3 Nov 95<br>Location: Bloomington, IN<br>"
              + "Education: Miami University<br>"
              + "<br>BS in Computer Science<br>~7 years of programming<br>"
              + "<br>Interests: archiving, musical instruments, American history, podcasts, card games, and The Beatles<br><br><br><br><br>";
var loreTxt = "Lead Operator (10/20 - present)<br>Memnon Archiving Services<br>"
              + "<br>Digitization Operator (10/18 - 10/20)<br>Memnon Archiving Services<br>"
              + "<br>Teaching Assistant (1/18 - 5/18)<br>Systems I: Intro to Operating Systems and Systems Programming<br>"
              + "<br>Teaching Assistant (1/18 - 5/18)<br>Data Communications and Networks<br><br><br><br><br>";
var inventoryTxt = "A dynamic and comprehensive map of European businesses for the "
                  + "European American Chamber of Commerce in the Greater Cincinnati region"
                  + "<br>Developed with Leaflet (JS) and OpenStreetMaps"
                  + "<br><br><br><br><br>";
var skillsTxt = "<br><br><br><br><br>";

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
    document.getElementById("arrow").innerHTML += '<br><br><br><br><br>';
    blinker();
    addStats();
    addLore();
    addInventory();
    addSkills();
  }
}

function addStats() {
  document.getElementById("stats").innerHTML += "Stats<br>";
  document.getElementById("statsTxt").style.fontSize += "0.6em";
  document.getElementById("statsTxt").innerHTML += statsTxt;
  document.getElementById("statsTxt").innerHTML += '<br><br><br><br><br><br>';
}

function addInventory() {
  document.getElementById("inventory").innerHTML += "Inventory<br>";
  document.getElementById("inventoryTxt").style.fontSize += "0.6em";
  document.getElementById("proj1").style.fontSize += "0.7em";
  document.getElementById("proj1").innerHTML += '<a href="https://eacc-449.github.io/leaflet-maps-with-google-sheets/" target="_blank">European Investment Map</a>';
  document.getElementById("inventoryTxt").innerHTML += inventoryTxt;
  document.getElementById("inventoryTxt").innerHTML += '<br><br><br><br><br><br>';
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
  document.getElementById("loreTxt").innerHTML += '<br><br><br><br><br><br>';
}

function blinker() {
  $('.blinking').fadeOut(1000);
  $('.blinking').fadeIn(1000);
}
setInterval(blinker, 2000);