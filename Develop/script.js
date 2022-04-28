// Assignment code here
var numbersOnly = /^[0-9]+$/;

var password = {
	length: null,
	includeLowerCase: null,
	includeUpperCase: null,
	includeNumbers: null,
	includeSpecialCharacters: null,
	checkLength: function (userEntry) {
    var entryConvertedToInteger = parseInt(userEntry);
    console.log(typeof(entryConvertedToInteger))
		if (8 < entryConvertedToInteger && entryConvertedToInteger < 168) {
			console.log("This is a good length");
			return true;
		} else {
			console.log("This length is out of range");
			return false;
		}
	},
	checkForNumbersOnly: function (userEntry) {
		if (numbersOnly.test(userEntry)) {
			console.log("This is a number");
			return true;
		} else {
			console.log("This is not a number");
      return false;
		}
	},
	setPasswordLength: function () {
		var userEntry = window.prompt("Your password must be between 8 and 168 chracters. How many long would you like your password to be?");
		if (this.checkForNumbersOnly(userEntry) && this.checkLength(userEntry)) {
			this.length = userEntry;
		}
	},
	userAssignLowerCase: function () {},
	userAssignUpperCase: function () {},
	userAssignIncludeNumbers: function () {},
	userAssignSpecialCharacters: function () {},
};

var generatePassword = function () {
	password.setPasswordLength();

  console.log("The password settings so far are:", password)
};

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
