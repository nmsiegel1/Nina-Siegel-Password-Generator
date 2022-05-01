var generateBtn = document.querySelector("#generate");

// Arrays for possible passowrd characters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArrya = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "=", "~", "`", "?", "<", ",", ".", ">", "/", "|", ";", "'", "{", "}"];

// empty arrays

var resultArray = [];
var userArray = [];

  var writePassword = function () {
    var passwordLength = window.prompt("How many characters would you like your password to be? Pick a number between 8 and 128.");
    console.log(passwordLength);

    // return passwordLength;
    passwordLength = parseInt(passwordLength);
    if(passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be at least 8 and no more than 128 characters. Please try again.");
      writePassword();
    }else if (passwordLength >= 8 || passwordLength >= 128) {
      console.log(">>" + passwordLength);
      characterSelctions();
    }else {
      window.alert("You must enter your desired password length. Please try again.");
      writePassword();
    }
  };

var characterSelctions = function() {
  window.prompt ("Would you like uppercase letters in your password?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);