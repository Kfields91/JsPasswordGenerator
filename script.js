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

function getRandomLower() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  var num = "0123456789";
  return num[Math.floor(Math.random() * num.length)];
}

function getRandomSymbol() {
  var symbol = "~!@#$%^&*()<>/{}=[],.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
// return(getRandomLower());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Math is not defined when ran

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
// uncomment line below
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// uncomment line below too 39. skip 41 and uncomment 42
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

////////////////////////////////////////////////////////////////////
