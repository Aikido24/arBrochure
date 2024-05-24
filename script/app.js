window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  let marker1 = document.getElementById("marker1");
  let marker2 = document.getElementById("marker2");
  let marker3 = document.getElementById("marker3");
  let car = document.getElementById("car3d");
  let divOverlay = document.getElementById("div-overlay");

  let video1 = document.getElementById("video");
  let video2 = document.getElementById("video2");
  console.dir(car);

  marker1.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    video1.play();
  });

  marker1.addEventListener("markerLost", function () {
    video1.pause();
  });

  marker2.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    video2.play();
  });

  marker2.addEventListener("markerLost", function () {
    video2.pause();
  });
  marker3.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    console.log(car);
    /*car.setAttribute(
      "animation-mixer",
      
    );*/

    //car.setAttribute("animation-mixer", { loop: "repeat" });
  });

  marker3.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
  });
}
