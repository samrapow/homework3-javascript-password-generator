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
// make passwordLength a global variable
var passwordLength;
function getPasswordLength() {
  passwordLength = prompt("Please enter a password length that is an integer between 8 and 128 characters");
  // Check if the inputted string is an integer between 8 and 128. If it isn't, reprompt the user
  if (passwordLength != null && Number.isInteger(parseFloat(passwordLength)) && parseInt(passwordLength) >=8 && parseInt(passwordLength) <=128)
  {
    // THEN my input should be validated
    var proceed = confirm("Are you sure that you would like to include " + passwordLength + " characters?");
    if (proceed) {
      // check whether to include lowercase characters next 
      confirmLowercaseCharacters();
      return;
    } else {
      getPasswordLength();
    }
    // if the person clicks cancel (and therefore the value is null), exit the prompt
  } else if (passwordLength === null ) {
    return;
  } else {
    getPasswordLength();
  }
}


// WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var isLowercase;
function confirmLowercaseCharacters() {
  isLowercase = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include lowercase characters")
  if (isLowercase === "Yes" || isLowercase === "No") {
    // THEN my input should be validated
    var proceed = confirm("Are you sure that you would like to keep your answer as \"" + isLowercase + "\" for including lowercase characters?");
    if (proceed) {
      // check whether to include uppercase characters next 
      confirmUppercaseCharacters();
      return;
    } else {
      confirmLowercaseCharacters() ;
    }
    
  } else if (isLowercase === null ) {
    return;
  } else {
    confirmLowercaseCharacters();
  }
}

var isUppercase;
function confirmUppercaseCharacters() {
  isUppercase = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include uppercase characters")
  if (isUppercase === "Yes" || isUppercase === "No") {
    // THEN my input should be validated
    var proceed = confirm("Are you sure that you would like to keep your answer as \"" + isUppercase + "\" for including uppercase characters?");
    if (proceed) {
      // check whether to include numeric characters next 
      confirmNumericCharacters();
      return;
    } else {
      confirmUppercaseCharacters() ;
    }

  } else if (isUppercase === null ) {
    return;
  } else {
    confirmUppercaseCharacters();
  }
}

var isNumeric;
function confirmNumericCharacters() {
  isNumeric = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include numeric characters")
  if (isNumeric === "Yes" || isNumeric === "No") {
    // THEN my input should be validated
    var proceed = confirm("Are you sure that you would like to keep your answer as \"" + isNumeric + "\" for including numeric characters?");
    if (proceed) {
      // check whether to include special characters next 
      confirmSpecialCharacters();
      return;
    } else {
      confirmNumericCharacters() ;
    }

  } else if (isNumeric === null ) {
    return;
  } else {
    confirmNumericCharacters();
  }
}

var isSpecial;
function confirmSpecialCharacters() {
  isSpecial = prompt("Please respond with \"Yes\" or \"No\" to indicate whether you would like to include special characters")
  if (isSpecial === "Yes" || isSpecial === "No") {
    // THEN my input should be validated
    var proceed = confirm("Are you sure that you would like to keep your answer as \"" + isSpecial + "\" for including special characters?");
    if (proceed) {
      // make sure that at least one character type is selected
      // selectAtLeastOne();
      selectAtLeastOne();
      return;
    } else {
      confirmSpecialCharacters() ;
    }

  } else if (isSpecial === null ) {
    return;
  } else {
    confirmSpecialCharacters();
  }
}

// and at least one character type should be selected
function selectAtLeastOne () {
  if (isLowercase === "No" && isUppercase === "No" && isNumeric === "No" && isSpecial === "No") {
    var restart = alert("You must respond \"Yes\" to at least one character type. Please choose again");
    // start choosing lowercase characters again
    confirmLowercaseCharacters();
    return;
  } else {
    document.getElementById("password").innerHTML = isSpecial;
    return;
  }
}

// THEN a password is generated that matches the selected criteria