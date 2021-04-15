// 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", "?", "/", ".", ",", "~", "`"]
var chosenCharacters = [];

var generateBtn = document.querySelector("#generate");

// When page loads, user will be alerted to click Generate Password button
this.onload = alert("Please click 'Generate password' to start!");

// When user clicks Generate Password button, generatePassword function will run
function generatePassword() {
  var chosenLength = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");

  // If user chooses an insufficient #, they will be alerted to start over. 
  if(chosenLength<8 || chosenLength>128) {
    alert("Password must be no less than 8 characters and no more than 128 characters. Please start again.")
  }

else {
  // If user wants to include lowercase letters, add lowerCase array into chosenCharacters array
  if(confirm("Would you like your password to contain lowercase letters?")) {
    Array.prototype.push.apply(chosenCharacters, lowerCase);
  }
  // If user wants to include uppercase letters, add upperCase array into chosenCharacters array
  if(confirm("Would you like your password to contain uppercase letters?")) {
    Array.prototype.push.apply(chosenCharacters, upperCase);
  }
  // If user wants to include numbers, add numbers array into chosenCharacters array
  if(confirm("Would you like your password to contain numbers?")) {
    Array.prototype.push.apply(chosenCharacters, numbers);
  }
  // If user wants to include special characters, add specialCharacters array into chosenCharacters array
  if(confirm("Would you like your password to contain special characters? (i.e. !@#$%)")) {
    Array.prototype.push.apply(chosenCharacters, specialCharacters);
  }

  
}

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
