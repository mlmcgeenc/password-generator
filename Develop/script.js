// Assignment code here
var password  = {
  length: null,
  includeLowerCase: null,
  includeUpperCase: null,
  includeNumbers: null,
  includeSpecialCharacters: null,
}
var generatePassword = function () {
  return "My New Password"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
