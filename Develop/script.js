// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt the user for a password length when the Generate Password button is clicked
function getPasswordLength() {
  var passwordLength = prompt("Please enter a password length that is an integer between 8 and 128 characters");
  // Check if the inputted string is an integer between 8 and 128. If it isn't, reprompt the user
  if (passwordLength != null && Number.isInteger(parseFloat(passwordLength)) && parseInt(passwordLength) >=8 && parseInt(passwordLength) <=128)
  {
    // 
    confirmLowercaseCharacters();
    return;
    // if the person clicks cancel (and therefore the value is null), exit the prompt
  } else if (passwordLength === null ) {
    return;
  } else {
    getPasswordLength();
  }
}

// WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function confirmLowercaseCharacters() {
  var isLowercase = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include lowercase characters")
  if (isLowercase === "Yes" || isLowercase === "No") {
    confirmUppercaseCharacters();
    return;
  } else if (isLowercase === null ) {
    return;
  } else {
    confirmLowercaseCharacters();
  }
}

function confirmUppercaseCharacters() {
  var isUppercase = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include uppercase characters")
  if (isUppercase === "Yes" || isUppercase === "No") {
    confirmNumericCharacters();
    return;
  } else if (isUppercase === null ) {
    return;
  } else {
    confirmUppercaseCharacters();
  }
}

function confirmNumericCharacters() {
  var isNumeric = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include numeric characters")
  if (isNumeric === "Yes" || isNumeric === "No") {
    confirmSpecialCharacters();
    return;
  } else if (isNumeric === null ) {
    return;
  } else {
    confirmNumericCharacters();
  }
}

function confirmSpecialCharacters() {
  var isSpecial = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include special characters")
  if (isSpecial === "Yes" || isSpecial === "No") {
    document.getElementById("password").innerHTML = isSpecial;
    return;
  } else if (isSpecial === null ) {
    return;
  } else {
    confirmSpecialCharacters();
  }
}