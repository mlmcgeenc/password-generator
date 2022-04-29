// Assignment code here
var numbersOnly = /^[0-9]+$/;

var password = {
	length: null,
	includeLowerCase: null,
	includeUpperCase: null,
	includeNumbers: null,
	includeSpecialCharacters: null,
	setPasswordLength: function () {
		var desiredLength = window.prompt("Your password must be between 8 and 168 chracters. How many long would you like your password to be?");
		if (checkForNumbersOnly(desiredLength) && checkLength(desiredLength)) {
			this.length = desiredLength;
		}
	},
	setLowercaseOption: function () {},
	setUppercaseOption: function () {},
	setIncludeNumbersOption: function () {},
	setAssignSpecialCharactersOption: function () {},
};

function checkForNumbersOnly(desiredLength) {
	if (numbersOnly.test(desiredLength)) {
		return true;
	} else {
		window.alert("Your entry cannot contain letters, spaces, or special characters. Please enter the length of your password in numbers.")
		password.setPasswordLength()
	}
}

function checkLength(desiredLength) {
	var entryStringConvertedToInteger = parseInt(desiredLength);
	if (8 < entryStringConvertedToInteger && entryStringConvertedToInteger < 168) {
		return true;
	} else {
		window.alert("Your password must be between 8 and 168 characters in length. Please choose a number between 8 and 168.")
		password.setPasswordLength()
	}
}

var generatePassword = function () {
	password.setPasswordLength();

	console.log("The password settings so far are:", password);
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
