// Run and validate function with different case
function radianToDegree(radian) {
  let errorMessage = "Please Provide a Valid Number As Input";
  if (typeof radian == "number") {
    let degree = radian * (180 / Math.PI); // converting radian to degree
    let finalResult = degree.toFixed(2);
    return finalResult;
  } else {
    return errorMessage;
  }
}

function isJavaScriptFile(string) {
  let errorMessage = "Please Provide a Valid String As Input";
  if (typeof string == "string") {
    let stringInLower = string.toLowerCase();
    let subString = stringInLower.slice(
      stringInLower.length - 3,
      stringInLower.length
    );
    if (
      subString.indexOf(".") == subString.length - 3 &&
      subString.indexOf("j") == subString.length - 2 &&
      subString.indexOf("s") == subString.length - 1
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return errorMessage;
  }
}

function oilPrice(diesel, petrol, ocatne) {
  let errorMessage = "Please Provide a Valid Number as Input";
  if (
    typeof diesel == "number" &&
    typeof petrol == "number" &&
    typeof ocatne == "number" &&
    diesel >= 0 &&
    petrol >= 0 &&
    ocatne >= 0
  ) {
    let dieselPrice = 114;
    let petrolPrice = 130;
    let ocatnePrice = 135;
    let totalPrice =
      diesel * dieselPrice + petrol * petrolPrice + ocatne * ocatnePrice; //calculating total price of diesel, petrol and octane
    return totalPrice;
  } else {
    return errorMessage; // showing error message (if input is not a number)
  }
}

function publicBusFare(people) {
  let errorMessage = "Please Provide a Valid Number as Input";
  if (typeof people == "number" && people >= 0) {
    let ticketPrice = 250;
    let peopleInMicroBus = people % 50; // Segregation of people for placement in MicroBus
    let peopleInPublicBus = peopleInMicroBus % 11; // Segregation of people for placement in Public Bus
    let ticketPriceOfPublicBus = peopleInPublicBus * ticketPrice;
    return ticketPriceOfPublicBus;
  } else {
    return errorMessage; //showing error message (if input is not a valid number)
  }
}

function isBestFriend(person1, person2) {
  let errorMessage = "Please Provide a Valid Object as Input";
  if (typeof person1 == "object" && typeof person2 == "object") {
    let public1Name = person1.name; //converting into lowecase
    let public1Friend = person1.friend; //converting into lowecase
    let public2Name = person2.name; //converting into lowecase
    let public2Friend = person2.friend; //converting into lowecase
    if (public1Name == public2Friend && public1Friend == public2Name) {
      //checking the condition
      return true;
    } else {
      return false;
    }
  } else {
    return errorMessage; //showing error message (if input is not an object)
  }
}
