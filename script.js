// Global variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", "?", "/", ".", ",", "~", "`"]
var chosenCharacters = [];
var password = "";

var generateBtn = document.querySelector("#generate");

// When page loads, they will be alerted to click the "generate password" button
this.onload = alert("Please click 'Generate password' to start!");

// When user clicks generate button, generatePassword function will run
function generatePassword() {

  // Prompt will ask user to choose a passworth length
  var chosenLength = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");

  // If user chooses an insufficient length, they will be alerted to start over
  if(chosenLength<8 || chosenLength>128) {
    alert("Password must be no less than 8 characters and no more than 128 characters. Please start again.")
  }

  // If user chooses a sufficient length, function will carry on
else {
  // If user confirms that they want to use lowercase letters, then lowercase letters will be added to the bag
  if(confirm("Would you like your password to contain lowercase letters?")) {
    Array.prototype.push.apply(chosenCharacters, lowerCase);
  }

  // If user confirms that they want to use uppercase letters, then uppercase letters will be added to the bag
  if(confirm("Would you like your password to contain uppercase letters?")) {
    Array.prototype.push.apply(chosenCharacters, upperCase);
  }

  // If user confirms that they want to use numbers, then numbers will be added to the bag
  if(confirm("Would you like your password to contain numbers?")) {
    Array.prototype.push.apply(chosenCharacters, numbers);
  }

  // If user confirms that they want to use special characters, then special characters will be added to the bag
  if(confirm("Would you like your password to contain special characters? (i.e. !@#$%)")) {
    Array.prototype.push.apply(chosenCharacters, specialCharacters);
  }

  // If user does not select any character types, they will be prompted to start over
  if(chosenCharacters.length===0) {
    alert("Uh oh! You did not select any character types. Please start again.");  
  }

// Characters will be chosen at random from a bag containing characters of user's preferences.
// Loop begins at index 0 and goes up in increments of 1.
// During each iteration, a random character will be picked from the bag, which will then be added into the password.
// When the loop reaches the user's chosen length, it will end. 

  for (i = 0; i < chosenLength; i++) {
    characters = chosenCharacters[Math.floor(Math.random()*chosenCharacters.length)];
    password += characters;
  }

  // Finally, the function concludes when the password is presented to the user in an alert box!
  alert("Your password is " + password)
  console.log(password);

}
}

// I could not figure out how to get the button to work, so I created an alert above
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


// I want to give credit to "https://github.com/DariaNau/password-generator-js/blob/master/script.js", whose work taught me so much about JS. At the beginning of the assignment, I was compeletely lost but after spending several hours going through every single piece of her code I was able to fully understand everything in its entirety. 