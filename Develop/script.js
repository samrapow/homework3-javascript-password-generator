// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
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
    generatePassword();
    return;
  }
}

// THEN a password is generated that matches the selected criteria
function generatePassword () {
  if (isLowercase === "Yes" && isUppercase === "No" && isNumeric === "No" && isSpecial === "No") {
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "Yes" && isNumeric === "No" && isSpecial === "No") {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "Yes" && isNumeric === "Yes" && isSpecial === "No") {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "Yes" && isNumeric === "Yes" && isSpecial === "Yes") {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "Yes" && isNumeric === "Yes" && isSpecial === "Yes") {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "No" && isNumeric === "Yes" && isSpecial === "Yes") {
    var charset = "0123456789 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "No" && isNumeric === "No" && isSpecial === "Yes") {
    var charset = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "No" && isNumeric === "Yes" && isSpecial === "No") {
    var charset = "0123456789";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "Yes" && isNumeric === "No" && isSpecial === "No") {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "No" && isNumeric === "Yes" && isSpecial === "Yes") {
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "No" && isNumeric === "No" && isSpecial === "Yes") {
    var charset = "abcdefghijklmnopqrstuvwxyz !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "No" && isNumeric === "Yes" && isSpecial === "No") {
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "Yes" && isNumeric === "No" && isSpecial === "Yes") {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "No" && isUppercase === "Yes" && isNumeric === "Yes" && isSpecial === "No") {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  } else if (isLowercase === "Yes" && isUppercase === "Yes" && isNumeric === "No" && isSpecial === "Yes") {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
    for (var i = 0, x = charset.length; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.random() * x);
    }
    return password;
  }
  else {
    console.log("an error happened");
    return;
  }
}