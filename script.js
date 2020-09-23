///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var upper;
var lower;
var numberS;
var special;

function getRandomUpper() {
  upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return upper[Math.floor(Math.random() * upper.length)];
}
// else (confirmLower());
// continue;
function getRandomLower() {
  lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return lower[Math.floor(Math.random() * lower.length)];
}
function getRandomNumber() {
  numberS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return numberS[Math.floor(Math.random() * numberS.length)];
}
function getRandomSymbol() {
  special = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "<",
    ">",
    "/",
    "{",
    "[",
    ".",
  ];

  return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomSymbol());

function generatePasswordOptions() {
  var passwordLength = Number(
    prompt(
      "How many characters do you want your password to be? ATTN: between 8-128 characters!"
    )
  );
  var confirmUpper = confirm("Do you want uppercase letters in your password?");
  var confirmLower = confirm("Do you want lowercase letters?");
  var confirmNumbers = confirm("Do you want to include numbers");
  var confirmSymbols = confirm("Would you like to include special characters?");

  if (!Number.isNaN(passwordLength)) {
    console.log("how many characters do you want your password to be?");
  } else {
    prompt("must be a number!");
  }
  var passwordOptions = {
    HasUpper: confirmUpper,
    HasLower: confirmLower,
    HasNumbers: confirmNumbers,
    HasSymbols: confirmSymbols,
    length: passwordLength,
  };
  return passwordOptions;
}

function getrandom(arr) {
  var randomIndex = Math.floor(Math.random(), arr.length);
  var randomElement = arr[randomIndex];
  console.log("random element is " + randomElement);
  return randomElement;
}
function generatePassword() {
  var result = [];
  var possibleCharacters = "";
  var guarteedCharacters = [];
  var options = generatePasswordOptions();
  if (options.HasUpper) {
    guarteedCharacters = guarteedCharacters.push(getrandom(upper));
    possibleCharacters = possibleCharacters.concat(getRandomUpper());
    console.log("possible characters" + possibleCharacters);
  }
  if (options.HasLower) {
    // guarteedCharacters = guarteedCharacters.push(getrandom(lower));
    possibleCharacters = possibleCharacters.concat(getRandomLower());
    console.log("possible characters " + possibleCharacters);
  }
  if (options.HasNumbers) {
    // guarteedCharacters = guarteedCharacters.push(getrandom(numberS));
    possibleCharacters = possibleCharacters.concat(getRandomNumber());
    console.log("possible numbers " + possibleCharacters);
  }

  if (options.HasSymbols) {
    // guarteedCharacters = guarteedCharacters.push(getrandom(special));
    possibleCharacters = possibleCharacters.concat(getRandomSymbol());
    console.log("possible symbols " + possibleCharacters);
  }
  // function random(possibleCharacters) {}

  console.log("possiblecharacters" + possibleCharacters);
  for (var i = 0; i < options.length; i++) {
    var randomPossibleCharacters =
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    console.log("randomPossibleCharacters " + randomPossibleCharacters);
    result.push(randomPossibleCharacters);
  }
  for (var i = 0; i < guarteedCharacters.length; i++) {
    result[i] = guarteedCharacters[i];
  }

  return result.join("");
}

// var passwordLength = Number(
//   prompt(
//     "How many characters do you want your password to be? ATTN: between 8-128 characters!"
//   )
// );
// var confirmUpper = confirm("Do you want uppercase letters in your password?");
// var confirmLower = confirm("Do you want lowercase letters?");
// var confirmNumbers = confirm("Do you want to include numbers");
// var confirmSymbols = confirm("Would you like to include special characters?");
// var lengthEquation = i = 0; 7 > i <= 128; i++;
// var lengthArr = [
// "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128",
// ];

// for (
//   var i = 8;
//   i < lengthArr.length && i > lengthArr[7];
//   [i.passwordLength] + 1) {
// if (!Number.isNaN(passwordLength)) {
//   console.log("how many characters do you want your password to be?");
// } else {
//   prompt("must be a number!");
// }

// if (passwordLength.value < 8) {
//   console.log(passwordLength);
// } else {
//   prompt("Invalid Choice");
// console.log("too small ");

// if (passwordLength > 128) {
//   prompt("Invalid Choice");
//   console.log("too large!"

// if (passwordLength) {
// let length = getrandompasswordLength - (8)[lengthArr[i]];
// };
// return password;
///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
// uncomment line below

// Write password to the #password input
// uncomment line below too 39. skip 41 and uncomment 42
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

///////////////////////////////////////////////////////////////////
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
