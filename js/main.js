// Animation lancemenent
document.getElementById("scrolling").style.top = (window.innerHeight + 100) +"px";
setTimeout(start, 700)
function start() {
    document.getElementById("logo1").style.display = "block";
    document.getElementById("logo1").classList.add("lanim");
    document.getElementById("logobox").style.backgroundColor = "rgba(0,0,0,0)";
    setTimeout(part2,500)
}
function part2(){
    document.getElementById("logo1").style.height = "30px";
    document.getElementById("logobox").style.height = "30px";
    document.getElementById("logobox").style.width = "20px";
    setTimeout(part3,500)
}
function part3(){
    document.body.style.overflowY = "visible";
    document.querySelector(".webpage").style.zIndex = "2";
}

// JS Principal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", scroll);
window.addEventListener("resize", scroll);
  
function scroll(){
  let scrollPosition = window.scrollY;
  if (scrollPosition > 101) {
    document.querySelector(".webpage").classList.add("reduwindow");
    document.querySelector(".webcontent").classList.add("reduwindowcont");
    document.querySelector(".webcontent").style.overflowY = "scroll";
    document.querySelector(".sc1").style.opacity = "1";
    reduwin("web");
    document.body.style.overflowY = "hidden";
  }
}
let imgfull = false
let webfull = false
function reduwin(win){
  if (win == "web"){
  document.querySelector(".webpage").style.width = "77%";
  document.querySelector(".webpage").style.height = "77%";
  document.querySelector(".taskbar").style.bottom = "10px";
  webfull = false
  } else {
    document.querySelector("."+win+"page").style.scale= "1";
  }
  if (win == "img"){
    imgfull = false;
    document.querySelector(".imgpage").style.width = "40%";
    document.querySelector(".imgpage").style.height = "50%";
    if (webfull === false){
      document.querySelector(".taskbar").style.bottom = "10px";
    }
  }
  document.querySelector("."+win+"content").style.backgroundColor = "rgba(240, 251, 255, 0.5)";
  document.getElementById(win+"maxi").style.display ="inline";
  document.getElementById(win+"mini").style.display ="none";
}
function fullwin(win){
  if (win == "img"){
    imgfull = true;
    document.querySelector(".imgpage").style.transform = "translate(-50%, -50%)";
    document.querySelector(".imgpage").style.top = "50%";
    document.querySelector(".imgpage").style.left = "50%";
  } else {
    webfull = true;
  }
  document.querySelector("."+win+"page").style.width = "100%";
  document.querySelector("."+win+"page").style.height = "100%";
  document.querySelector("."+win+"content").style.backgroundColor = "rgba(240, 251, 255, 1)";
  document.querySelector(".taskbar").style.bottom = "-60px";
  document.getElementById(win+"maxi").style.display ="none";
  document.getElementById(win+"mini").style.display ="inline";
}
function closewin(win){
  if (win == "img"){
    reduwin("img");
  }
  document.querySelector("."+win+"page").style.scale= "0";
}

//Battery
navigator.getBattery().then((batt) =>{
  updateBattery = () =>{
      let level = Math.floor(batt.level * 100)

      document.getElementById("batterycurent").innerHTML = level + "%";
      if(level <= 60 && batt.charging === false){
          document.getElementById("minb").style.display = "block";
          document.getElementById("fullb").style.display = "none";
          document.getElementById("charb").style.display = "none";
      }
      else if(level > 60 && batt.charging === false){
          document.getElementById("fullb").style.display = "block";
          document.getElementById("minb").style.display = "none";
          document.getElementById("charb").style.display = "none";
      }
      else if(batt.charging){
          document.getElementById("charb").style.display = "block";
          document.getElementById("minb").style.display = "none";
          document.getElementById("fullb").style.display = "none";
          console.log(batt.charging)
      }
  }
  updateBattery()
  batt.addEventListener("chargingchange", () => {updateBattery()})
  batt.addEventListener("levelchange", () => {updateBattery()})
})

//WiFi
if (navigator.onLine) {
  document.getElementById("wifiyes").style.display = "block";
  document.getElementById("wifino").style.display = "none";
} else {
  document.getElementById("wifino").style.display = "block";
  document.getElementById("wifiyes").style.display = "none";
}
  window.addEventListener("offline", () => {
      document.getElementById("wifino").style.display = "block";
      document.getElementById("wifiyes").style.display = "none";
});

window.addEventListener("online", () => {
  document.getElementById("wifiyes").style.display = "block";
  document.getElementById("wifino").style.display = "none";
});

//Date + Heure
var affichageHeure = function(){
  var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

  today = new Date();
  annee = today.getFullYear();
  listeMois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Ju", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
  mois = listeMois[today.getMonth()];

  jourNUmero = today.getDate();

  listeJours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  jourNom = listeJours[today.getDay()];

  deuxChiffres = function(element){
      if(element < 10){
          return element = "0" + element;
      } else {
          return element;
      }
  }
  heures = deuxChiffres(today.getHours());
  minutes = deuxChiffres(today.getMinutes());
  document.getElementById("datecurrent").innerHTML = jourNom + " " + jourNUmero + " " + mois + " " + annee + " " + heures + ":" + minutes;
  setTimeout(affichageHeure, 5000);

  // Age
var birthDate = "2006-07-07";
var birthDate = new Date(birthDate);
var age = today.getFullYear() - birthDate.getFullYear();
var monthDiff = today.getMonth() - birthDate.getMonth();
var dayDiff = today.getDate() - birthDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
  }
if (dayDiff < 0) {
    monthDiff--;
    var daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    dayDiff += daysInLastMonth;
  }
document.getElementById("age").innerHTML = age + " ans";
}
affichageHeure();

// Drag fenêtres
const mediaDiv = document.querySelector(".mediapage");
const imgDiv = document.querySelector(".imgpage");
let isDragging = false;
let activeDiv = null; // Variable pour savoir quelle div est en train d'être déplacée

function handleMouseDown(e, targetDiv, noDragSelectors, canDrag = true) {
  const isNoDrag = noDragSelectors.some(selector => e.target.closest(selector));
  if (!isNoDrag && canDrag) {
    isDragging = true;
    activeDiv = targetDiv; // Associe la div en cours de drag

    targetDiv.style.transform = "none";
    targetDiv.style.left = `${e.clientX - targetDiv.offsetWidth / 2}px`;
    targetDiv.style.top = `${e.clientY}px`;
  }
}

mediaDiv.addEventListener("mousedown", (e) => {
  handleMouseDown(e, mediaDiv, [".winicon", ".mediacontent"]);
});

imgDiv.addEventListener("mousedown", (e) => {
  if (!imgfull) {
    handleMouseDown(e, imgDiv, [".winicon", "#zoom-out", "#zoom-in", ".imgcontent"]);
  }
});
// Lorsque la souris est déplacée
document.addEventListener("mousemove", (e) => {
  if (isDragging && activeDiv) {
    activeDiv.style.left = `${e.clientX - activeDiv.offsetWidth / 2}px`;
    activeDiv.style.top = `${e.clientY}px`;
  }
});

// Lorsque la souris est relâchée
document.addEventListener("mouseup", () => {
  isDragging = false;
  activeDiv = null; // Réinitialise la div active après avoir relâché la souris
});

//Image Reader engine
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomImage = document.getElementById('zoom-image');
const zoomPercentage = document.getElementById('zoom-percentage');

let scale = 1; // Le niveau initial de zoom
const zoomStep = 0.1; // Pas de zoom
const minScale = 0.3; // Zoom minimum
const maxScale = 3;   // Zoom maximum
zoomInBtn.addEventListener('click', function() {
  if (scale < maxScale) { // Ne pas dépasser le zoom maximum
    scale += zoomStep; // Augmente le zoom
    if (scale > maxScale) scale = maxScale; // Verrouille à maxScale
    zoomImage.style.transform = `scale(${scale})`;
    const percent = Math.round(scale * 100);
    zoomPercentage.textContent = `${percent}%`;
  }
});
zoomOutBtn.addEventListener('click', function() {
  if (scale > minScale) { // Ne pas descendre en dessous du zoom minimum
    scale -= zoomStep; // Réduit le zoom
    if (scale < minScale) scale = minScale; // Verrouille à minScale
    zoomImage.style.transform = `scale(${scale})`;
    const percent = Math.round(scale * 100);
    zoomPercentage.textContent = `${percent}%`;
  }
});
const percent = Math.round(scale * 100);
zoomPercentage.textContent = `${percent}%`;

//Ancre + smooth scroll
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    });
});

//Reveal Effect
document.querySelector(".webcontent").addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var container = document.querySelector(".webcontent");
  for (var i = 0; i < reveals.length; i++) {
    var containerHeight = container.clientHeight;
    var elementTop = reveals[i].getBoundingClientRect().top - container.getBoundingClientRect().top;

    if (elementTop < containerHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
