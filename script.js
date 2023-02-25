// Change the light-color in traffic-light
const redLight = document.getElementById("redLight");
const greenLight = document.getElementById("greenLight");
const yellowLight = document.getElementById("yellowLight");
const car = document.getElementById("car");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");

function carMovement1() {
  changeLightColor();
  checkCarMovement1();
}

setInterval(carMovement1, 8000);

function changeLightColor() {
  if (redLight.classList.contains("active")) {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.add("active");
  } else if (yellowLight.classList.contains("active")) {
    yellowLight.classList.remove("active");
    redLight.classList.add("active");
    greenLight.classList.remove("active");
  } else if (greenLight.classList.contains("active")) {
    greenLight.classList.remove("active");
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
  }
}

function checkCarMovement1() {
  if (redLight.classList.contains("active")) {
    // console.log("This is triggered!");
    car.style.animation = "none";
    wheel1.style.animation = "none";
    wheel2.style.animation = "none";
  } else if (yellowLight.classList.contains("active")) {
    // console.log("No, this is triggered!");
    car.style.animation = "center-to-left 3s linear 1";
    wheel1.style.animation = "wheels-rotation 1.5s linear infinite";
    wheel2.style.animation = "wheels-rotation 1.5s linear infinite";

    // car.style.animation = "right-to-center 7s linear 1";
  }
}

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
