const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const car = document.getElementById("car");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");

function carMovement() {
  changeLightColor();
  checkCarMovement();
}

setInterval(carMovement, 8000);

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
    wheel1.style.animation = "none";
    wheel2.style.animation = "none";
  } else if (greenLight.classList.contains("active")) {
    // console.log("No, this is triggered!");
    car.style.animation = "center-to-left 3s linear 1";
    wheel1.style.animation = "wheels-rotation 1.5s linear infinite";
    wheel2.style.animation = "wheels-rotation 1.5s linear infinite";
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

// // Move the car (reference: w3schools)
// function moveCar() {
//   let id = null;
//   const car = document.getElementById("car");
//   let pos = 0;
//   if (redLight.classList.contains("active")) {
//     clearInterval(id);
//     wheel1.style.animation = "none";
//     wheel2.style.animation = "none";
//   }
//   wheel1.style.animation = "wheels-rotation 2.5s infinite linear";
//   wheel2.style.animation = "wheels-rotation 2s infinite linear";
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos < 800) {
//       pos++;

//     }
//   }
// }
