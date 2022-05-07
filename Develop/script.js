var generateBtn = document.querySelector("#generate");

// Arrays for possible passowrd characters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "=", "~", "`", "?", "<", ",", ".", ">", "/", "|", ";", "'", "{", "}"];

// empty arrays

var resultArray = [];
var userArray = [];
var passwordLengthArray = [];

  var writePassword = function () {
    reset();
    var passwordLength = window.prompt("How many characters would you like your password to be? Pick a number between 8 and 128.");
    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);

    if(passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be at least 8 and no more than 128 characters. Please try again.");
      writePassword();
    }else if (passwordLength >= 8 || passwordLength >= 128) {
      passwordLengthArray = passwordLengthArray.concat(passwordLength);
      console.log(">>" + passwordLengthArray);
      // return passwordLength;
      characterSelections();
    }else {
      window.alert("You must enter your desired password length. Please try again.");
      writePassword();
    }
  };

var characterSelections = function() {
  var promptUppercase = window.confirm ("Would you like uppercase letters in your password?");
  if (promptUppercase) {
    resultArray = resultArray.concat(uppercaseArray);
    console.log(resultArray);
  }

  var promptLowercase = window.confirm ("Would you like lowercase letters in your password?");
  if (promptLowercase) {
    resultArray = resultArray.concat(lowercaseArray);
    console.log(">>" + resultArray);
  }

  var promptNumbers = window.confirm ("Would you like numbers in your password?");
  if (promptNumbers) {
    resultArray = resultArray.concat(numArray);
    console.log("!!" + resultArray);
  }

  var promptCharacters = window.confirm ("Would you like special characters in your password?");
  if (promptCharacters) {
    resultArray = resultArray.concat(charactersArray);
  console.log("??" + resultArray);
  }
  if (promptCharacters === false && promptNumbers === false && promptLowercase === false && promptUppercase === false) {
    window.alert("You must select at least one character type. Please try again.")
  }
  generatePassword();
};

var generatePassword = function() {
  var passwordLength = passwordLengthArray[0];
  for (var i=0; i < passwordLength; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
    console.log(userArray);
  }
  inputPassword();
};

// Write password to the #password input
function inputPassword() {
  var password = userArray.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function reset() {
  var passwordLengthArray = undefined;
  var userArray = undefined;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);