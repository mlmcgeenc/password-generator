// Assignment code here
var numbersOnly = /^[0-9]+$/;

var password = {
	length: null,
	includeLowercase: null,
	includeUppercase: null,
	includeNumbers: null,
	includeSpecialCharacters: null,
	setPasswordLength: function () {
		var desiredLength = window.prompt("Your password must be between 8 and 168 chracters. How many long would you like your password to be?");
		if (checkForNumbersOnly(desiredLength) && checkLength(desiredLength)) {
			this.length = desiredLength;
		}
	},
	setLowercaseOption: function () {
		this.includeLowercase = window.confirm("Would you like your password to contain lowercase letters?");
	},
	setUppercaseOption: function () {
		this.includeUppercase = window.confirm("Would you like your password to contain uppercase letters?");
	},
	setIncludeNumbersOption: function () {
		this.includeNumbers = window.confirm("Would you like your password to contain both numbers in addition to letters?");
	},
	setSpecialCharactersOption: function () {
		this.includeSpecialCharacters = window.confirm("Would you like your password to contain special characters like '!' and '#'?");
	},
};

function checkForNumbersOnly(desiredLength) {
	if (numbersOnly.test(desiredLength)) {
		return true;
	} else {
		window.alert("Your entry cannot contain letters, spaces, or special characters. Please enter the length of your password in numbers.");
		password.setPasswordLength();
	}
}

function checkLength(desiredLength) {
	var entryStringConvertedToInteger = parseInt(desiredLength);
	if (8 < entryStringConvertedToInteger && entryStringConvertedToInteger < 168) {
		return true;
	} else {
		window.alert("Your password must be between 8 and 168 characters in length. Please choose a number between 8 and 168.");
		password.setPasswordLength();
	}
}

var generatePassword = function () {
	password.setPasswordLength();
	password.setLowercaseOption();
	password.setUppercaseOption();
	password.setIncludeNumbersOption();
	password.setSpecialCharactersOption();

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
