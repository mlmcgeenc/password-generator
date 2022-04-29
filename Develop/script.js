// Assignment code here
var numbersOnly = /^[0-9]+$/;

var userPassword = {
	password: null,
	length: null,
	includeLowercase: null,
	includeUppercase: null,
	selectedLettercase: [],
	includeLetters: true,
	includeNumbers: null,
	includeSpecialCharacters: null,
	selectedCharacters: [],
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
	setIncludeLettersOption: function () {
		userPassword.setLowercaseOption();
		userPassword.setUppercaseOption();
		if (this.includeLowercase == false && this.includeUppercase == false) {
			this.includeLetters = false;
		}
	},
	setIncludeNumbersOption: function () {
		this.includeNumbers = window.confirm("Would you like your password to contain numbers?");
	},
	setSpecialCharactersOption: function () {
		this.includeSpecialCharacters = window.confirm("Would you like your password to contain special characters like '!' and '#'?");
	},
	collectCaseOptions: function () {
		var letterCaseOptions = [];
		if (this.includeLowercase == true) {
			letterCaseOptions.push("lowercase");
		}
		if (this.includeUppercase == true) {
			letterCaseOptions.push("uppercase");
		}
		this.selectedLettercase = letterCaseOptions;
	},
	collectCharacterOptions: function () {
		var characterOptions = [];
		if (this.includeLetters == true) {
			characterOptions.push("letters");
		}
		if (this.includeNumbers == true) {
			characterOptions.push("numbers");
		}
		if (this.includeSpecialCharacters == true) {
			characterOptions.push("specials");
		}
		this.selectedCharacters = characterOptions;
	},
	buildPasswordString: function () {
		userPassword.setPasswordLength();
		userPassword.setIncludeLettersOption();
		userPassword.setIncludeNumbersOption();
		userPassword.setSpecialCharactersOption();
		userPassword.collectCaseOptions();
		userPassword.collectCharacterOptions();

		var finalPassword = "";
		for (i = 0; i < this.length; i++) {
			var characterType = Math.floor(Math.random() * this.selectedCharacters.length);
			switch (this.selectedCharacters[characterType]) {
				case "letters":
					finalPassword = finalPassword + selectRandomLetter();
				case "numbers":
					finalPassword = finalPassword + selectRandomNumber();
				case "specials":
					finalPassword = finalPassword + selectRandomSpecialCharacter();
			}
		}
		console.log(finalPassword);
		return finalPassword;
	},
};

function checkForNumbersOnly(desiredLength) {
	if (numbersOnly.test(desiredLength)) {
		return true;
	} else {
		window.alert("Your entry cannot contain letters, spaces, or special characters. Please enter the length of your password in numbers.");
		userPassword.setPasswordLength();
	}
}

function checkLength(desiredLength) {
	var desiredLengthAsAnInteger = parseInt(desiredLength);
	if (7 < desiredLengthAsAnInteger && desiredLengthAsAnInteger < 169) {
		return true;
	} else {
		window.alert("Your password must be between 8 and 168 characters in length. Please choose a number between 8 and 168.");
		userPassword.setPasswordLength();
	}
}

function selectRandomLetter() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	return selectRandomItem(alphabet);
}

function selectRandomNumber() {
	var numbers = "1234567890";
	return selectRandomItem(numbers);
}

function selectRandomSpecialCharacter() {
	var specialCharacters = `~!@#$%^&*()_+-={}|;':"<>?\/,.`;
	return selectRandomItem(specialCharacters);
}

function selectRandomItem(listOfCharacters) {
	return listOfCharacters.charAt(Math.floor(Math.random() * (listOfCharacters.length - 1) + 1));
}

console.log(selectRandomLetter());
console.log(selectRandomNumber());
console.log(selectRandomSpecialCharacter());

var generatePassword = function () {
	// userPassword.setPasswordLength();
	// userPassword.setIncludeLettersOption();
	// userPassword.setIncludeNumbersOption();
	// userPassword.setSpecialCharactersOption();
	// userPassword.collectCaseOptions();
	// userPassword.collectCharacterOptions();
	return userPassword.buildPasswordString();

	// console.log(userPassword.collectCaseOptions(), userPassword.collectCharacterOptions());
	// console.log("The password settings so far are:", userPassword);
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
