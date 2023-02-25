// Change the light-color in traffic-light
let redLight = document.getElementById("redLight");
let greenLight = document.getElementById("greenLight");
let yellowLight = document.getElementById("yellowLight");

while (1) {
  setInterval(changeLightColor, 8000);
  checkCarMovement();
}

function changeLightColor() {
  if (yellowLight.classList.contains("active")) {
    yellowLight.classList.remove("active");
    redLight.classList.add("active");
    greenLight.classList.remove("active");
  } else if (redLight.classList.contains("active")) {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.add("active");
  } else if (greenLight.classList.contains("active")) {
    greenLight.classList.remove("active");
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
  }
}

// Move the car
function checkCarMovement() {
  while (
    !yellowLight.classList.contains("active") &&
    !greenLight.classList.contains("active")
  ) {
    if (redLight.classList.contains("active")) {
      document.getElementById("car").style.animation = "none";
      document.getElemenetById("wheel1").style.animation = "none";
      document.getElemenetById("wheel2").style.animation = "none";
    } else if (yellowLight.classList.contains("active")) {
      document.getElementById("car").style.animation =
        "car-moving 6s linear infinite";
      document.getElementById("wheel1").style.animation =
        "wheels-rotation 2s infinite linear";
      document.getElementById("wheel2").style.animation =
        "wheels-rotation 2s infinite linear";
    }
  }
}
