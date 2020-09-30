let btn = window.document.querySelector("#button-toggle");
let circleOff = window.document.querySelector(".circle-off");
let circleOn = window.document.querySelector(".circle-on");
let txt = window.document.getElementsByClassName("txt");

function toggleEffect() {
   btn.style.filter = "drop-shadow(1px 1px 10px grey)";
 }

function clearShadowFilter() {
   btn.style.filter = "none";
 }

function putOn() {
  circleOff.style.marginLeft = "60px";
  circleOn.style.display = "block";
  txt[1].style.display = "block";
  txt[0].style.display = "none";

  setTimeout(toggleEffect, 10);
  setTimeout(clearShadowFilter, 10000);
}

function putOff() {
  circleOff.style.marginLeft = "10px";
  circleOn.style.display = "none";
  txt[1].style.display = "none";
  txt[0].style.display = "block";
 
  setTimeout(toggleEffect, 10);
  setTimeout(clearShadowFilter, 10000);
}
