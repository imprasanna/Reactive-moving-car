const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const car = document.getElementById("car");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");
let carReadyAudio = new Audio("./audio/car-ready.mp3");
let carMovingAudio = new Audio("./audio/car-moving.mp3");

function carMoving() {
  carMovingAudio.play();
  carMovingAudio.currentTime = 2;
}

function carStopping() {
  carMovingAudio.pause();
  carMovingAudio.currentTime = 0;
}

function carMovement() {
  changeLightColor();
  checkCarMovement();
}

// // Add an event listener for the "canplaythrough" event
// carMovingAudio.addEventListener("canplaythrough", function () {
//   // Code to execute when the audio is loaded and can be played
//   console.log("Audio is loaded and can be played");
// });

// // Check if the audio is already loaded
// if (carMovingAudio.readyState >= 4) {
//   // Code to execute when the audio is already loaded
//   console.log("Audio is already loaded");
// }

setTimeout(carMoving, 10);
setTimeout(carStopping, 8000);
let id2 = setTimeout(moveCar, 1000);
setTimeout(moveCar, 3000);
setTimeout(clearInterval(id2), 5000);
setInterval(carMovement, 7000);

// Change the light-color in traffic-light
function changeLightColor() {
  if (redLight.classList.contains("active")) {
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
    greenLight.classList.remove("active");
  } else if (greenLight.classList.contains("active")) {
    greenLight.classList.remove("active");
    redLight.classList.add("active");
    yellowLight.classList.remove("active");
  } else if (yellowLight.classList.contains("active")) {
    yellowLight.classList.remove("active");
    redLight.classList.remove("active");
    greenLight.classList.add("active");
  }
}

// Check the movement of the car
function checkCarMovement() {
  if (redLight.classList.contains("active")) {
    // console.log("This is triggered!");
    car.style.animation = "none";
    // wheel1.style.animation = "none";
    // wheel2.style.animation = "none";
    // carReadyAudio.pause();
    // carMovingAudio.pause();
    // carMovingAudio.currentTime = 0;
    // carReadyAudio.currentTime = 0;
  } else if (yellowLight.classList.contains("active")) {
    carMovingAudio.pause();
    carMovingAudio.currentTime = 0;
    carReadyAudio.play();
  } else if (greenLight.classList.contains("active")) {
    // console.log("No, this is triggered!");
    car.style.animation = "center-to-left 3s linear 1";
    wheel1.style.animation = "wheels-rotation 1.5s linear infinite";
    wheel2.style.animation = "wheels-rotation 1.5s linear infinite";
    carMovingAudio.play();
    carMovingAudio.currentTime = 2;
    let id = setTimeout(moveCar, 1000);
    setTimeout(moveCar, 3000);
    setTimeout(clearInterval(id), 5000);
    // if (yellowLight.classList.contains("active")) {
    //   car.style.animation = "right-to-center 7s linear 1";
    //   wheel1.style.animation = "wheels-rotation 1.5s linear infinite";
    //   wheel2.style.animation = "wheels-rotation 1.5s linear infinite";
    // }
  }
  // car.style.animation = "right-to-center 7s linear 1";
}

// function checkCarMovement2 {
//   if (car.style.transform == "translate(-1100px, -20px)") {

//   }
// }

function moveCar() {
  let t = setInterval(frame, 1);
  let pos = -300;
  car.style.animation = none;
  car.classList.add("car-animation2");
  if (greenLight.classList.contains("active")) {
    setInterval(frame, 1);
  }
  function frame() {
    pos++;
    car.style.right = pos + "px";
    if (pos > 550 && pos < 600 && redLight.classList.contains("active")) {
      clearInterval(t);
      wheel1.style.animation = "none";
      wheel2.style.animation = "none";
      carReadyAudio.pause();
      carMovingAudio.pause();
      carMovingAudio.currentTime = 0;
      carReadyAudio.currentTime = 0;
    }
  }
}
