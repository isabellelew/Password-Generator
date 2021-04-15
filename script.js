var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", "?", "/", ".", ",", "~", "`"]



var generateBtn = document.querySelector("#generate");

window.onload = alert("Welcome! Please click 'Generate password' to start!");

function generatePassword() {
  var lengthChoice = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");
  if(lengthChoice<8 || lengthChoice>128) {
    alert("Password must be no less than 8 characters and no more than 128 characters. Please start again.")
    return;
  }

else {
  var lowerCaseChoice = confirm("Would your password to include lower case letters?");
  var upperCaseChoice = confirm("Would your password to include upper case letters?");
  var numbersChoice = confirm("Would your password to include numbers?");
  var specialCharactersChoice = confirm("Would your password to include special characters? (i.e. !@#$%)");
}

// if (lowerCaseChoice === confirm && upperCaseChoice === confirm && numbersChoice === confirm && specialCharactersChoice === confirm) {
//   var generatePassword = 
// }

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
