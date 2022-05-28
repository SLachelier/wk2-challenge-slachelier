// Assignment code here
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharArr = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~', ];
var randomPassArr = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//Pseudo code: 

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
function generatePassword () {
  //users password:
  var usersChoices = [];

  // The prompt for choosing to include length:
  var charLength = prompt("Please specify a password length between 8 and 128 characters.");
    // THEN I am presented with a series of prompts for password criteria
  console.log(charLength);
  // WHEN prompted for the length of the password
  if (charLength < 7 && charLength > 129) {
  // THEN I choose a length of at least 8 characters and no more than 128 characters
    return "The password length must be between 8 and 128 characters. Please click 'Generate Password' to try again.";
  }

  // The prompt for choosing to include lowercase:

  var lowercaseConfirm = confirm ("Would you like your password to include lowercase characters? 'Ok': Yes and 'Cancel': No");
    // WHEN prompted for password criteria
  if (lowercaseConfirm) {
    // THEN I select which criteria to include in the password
    usersChoices = usersChoices.concat(lowercaseArr);
    console.log(usersChoices);
  }
 // The prompt for choosing to include uppercase:
  var uppercaseConfirm = confirm ("Would you like your password to include uppercase characters? 'Ok': Yes and 'Cancel': No");
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if (uppercaseConfirm) {
    usersChoices = usersChoices.concat(uppercaseArr);
    console.log(usersChoices);
  }
 // The prompt for choosing to include numbers:
  var numsConfirm = confirm ("Would you like your password to include numerical digits? 'Ok': Yes and 'Cancel': No");

    if (numsConfirm) {
      usersChoices = usersChoices.concat(numsArr);
      console.log(usersChoices);
    }
 // The prompt for choosing to include numbers:
  var specialCharConfirm = confirm ("Would you like your password to include special characters? 'Ok': Yes and 'Cancel': No");

    if (specialCharConfirm) {
      usersChoices = usersChoices.concat(specialCharArr);
      console.log(usersChoices)
    }

     //Error handling for input values:
     // WHEN I answer each prompt
     if (lowercaseConfirm === false && uppercaseConfirm === false && numsConfirm === false && specialCharConfirm === false) {
        return "Please confirm for at least one of the options. You may click 'Generate Password' to try again.";
     }
     // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
     for (let i = 0; i < charLength; i++) {
      randomArray = (usersChoices[Math.floor(Math.random() * usersChoices.length)]);
      randomPassArr.push(randomArray);
     }
     // THEN a password is generated that matches the selected criteria
     return randomPassArr.join("");
};
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
