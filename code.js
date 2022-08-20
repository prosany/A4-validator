// problem 1
function radianToDegree(radian) {
  if (typeof radian === "number") return (radian * 57.295779513).toFixed(2);
  else return "Please give a valid radian value.";
}

// problem 2

function isJavaScriptFile(fileName) {
  if (typeof fileName === "string") {
    if (fileName.slice(-3) === ".js") return true;
    else return false;
  } else return "Give a valid fileName";
}

// problem 3
function oilPrice(diesel, petrol, octan) {
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octan === "number"
  ) {
    return diesel * 114 + petrol * 130 + octan * 135;
  } else return "Please give valid oil value";
}

// problem 4

function publicBusFare(passenger) {
  if (typeof passenger === "number") {
    return ((passenger % 50) % 11) * 250;
  } else return "Please give valid passenger number";
}

// problem 5

function isBestFriend(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
      return true;
    } else {
      return false;
    }
  } else return "Give valid object property";
}
