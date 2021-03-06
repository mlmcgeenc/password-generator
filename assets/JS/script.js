// Assignment code here
var numbersOnly = /^[0-9]+$/;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = `~!@#$%^&*()_+-={}|;':"<>?\/,.`;

var userPassword = {
	password: null,
	length: null,
	includeLowercase: false,
	includeUppercase: false,
	selectedLettercase: [],
	includeLetters: false,
	includeNumbers: false,
	includeSpecialCharacters: false,
	selectedCharacters: [],
	checkForNumbersOnly: function (desiredLength) {
		if (numbersOnly.test(desiredLength)) {
			return true;
		} else {
			window.alert(
				"Your entry cannot contain letters, spaces, or special characters. Please enter the length of your password in numbers."
			);
			this.setPasswordLength();
		}
	},
	checkLength: function (desiredLength) {
		var desiredLengthAsAnInteger = parseInt(desiredLength);
		if (7 < desiredLengthAsAnInteger && desiredLengthAsAnInteger < 169) {
			return true;
		} else {
			window.alert(
				"Your password must be between 8 and 168 characters in length. Please choose a number between 8 and 168."
			);
			this.setPasswordLength();
		}
	},
	setPasswordLength: function () {
		var desiredLength = window.prompt(
			"Your password must be between 8 and 168 chracters. How many long would you like your password to be?"
		);
		if (this.checkForNumbersOnly(desiredLength) && this.checkLength(desiredLength)) {
			this.length = parseInt(desiredLength);
		}
	},
	setLowercaseOption: function () {
		this.includeLowercase = window.confirm(
			"Would you like your password to contain lowercase letters?"
		);
	},
	setUppercaseOption: function () {
		this.includeUppercase = window.confirm(
			"Would you like your password to contain uppercase letters?"
		);
	},
	setIncludeLettersOption: function () {
		this.setLowercaseOption();
		this.setUppercaseOption();
		if (this.includeLowercase || this.includeUppercase) {
			this.includeLetters = true;
		} else {
			this.includeLetters = false;
		}
	},
	setIncludeNumbersOption: function () {
		this.includeNumbers = window.confirm(
			"Would you like your password to contain numbers?"
		);
	},
	setSpecialCharactersOption: function () {
		this.includeSpecialCharacters = window.confirm(
			"Would you like your password to contain special characters like '!' and '#'?"
		);
	},
	collectLetterCaseOptions: function () {
		var letterCaseOptions = [];
		if (this.includeLowercase) {
			letterCaseOptions.push("lowercase");
		}
		if (this.includeUppercase) {
			letterCaseOptions.push("uppercase");
		}
		this.selectedLettercase = letterCaseOptions;
	},
	collectCharacterOptions: function () {
		var characterOptions = [];
		if (this.includeLetters) {
			characterOptions.push("letters");
		}
		if (this.includeNumbers) {
			characterOptions.push("numbers");
		}
		if (this.includeSpecialCharacters) {
			characterOptions.push("specials");
		}
		this.selectedCharacters = characterOptions;
	},
	determineLetterCase: function (letter) {
		if (this.includeLowercase && this.includeUppercase) {
			if (Math.floor(Math.random() * 2) === 1) {
				return letter.toUpperCase();
			} else {
				return letter;
			}
		} else if (this.includeUppercase) {
			return letter.toUpperCase();
		} else {
			return letter;
		}
	},
	buildPasswordString: function () {
		this.setPasswordLength();
		this.setIncludeLettersOption();
		this.setIncludeNumbersOption();
		this.setSpecialCharactersOption();
		this.collectLetterCaseOptions();
		this.collectCharacterOptions();
		var finalPassword = "";
		if (this.includeLetters || this.includeNumbers || this.includeSpecialCharacters) {
			for (i = 0; i < this.length; i++) {
				var characterType = Math.floor(
					Math.random() * this.selectedCharacters.length
				);
				switch (this.selectedCharacters[characterType]) {
					case "letters":
						var selectedLetter = selectRandomItem(alphabet);
						finalPassword =
							finalPassword + this.determineLetterCase(selectedLetter);
						break;
					case "numbers":
						finalPassword = finalPassword + selectRandomItem(numbers);
						break;
					case "specials":
						finalPassword =
							finalPassword + selectRandomItem(specialCharacters);
						break;
				}
			}
		} else {
			window.alert("You must choose to include at least one character type.");
		}
		return finalPassword;
	},
};

function selectRandomItem(listOfCharacters) {
	return listOfCharacters.charAt(
		Math.floor(Math.random() * (listOfCharacters.length - 1) + 1)
	);
}

var generatePassword = function () {
	return userPassword.buildPasswordString();
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
