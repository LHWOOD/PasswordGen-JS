// Assignment Code
//Declaring a series of variables to global memory and assigning values of arrays
var generateBtn = document.querySelector("#generate");

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "_",
];
var possibleCode = [];

// this function takes the generated password and displays to id password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// this function executes a series of prompts, confrims, or alerts to gather user information
function generatePassword() {
  var passwordLength = prompt(
    "How long do you want your Password to be? (Passwords must be between 8 and 128 characters long.)"
  );
  //if password length does not fit the criteria, then it alerts and restarts
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passwords must be between 8 and 128 characters long!");
    generatePassword();
  } else {
    alert("You have selected " + passwordLength + " characters long");
  }
  //the next three confirms gather user code preferences, alerts their response, and pushes to possibleCode array
  var lowercaseChoice = confirm(
    "Would you like your passcode to contain lowercase letters?"
  );
  if (lowercaseChoice === true) {
    possibleCode.push(lowercase);
    alert("Lowercase has been selected.");
  }
  var uppercaseChoice = confirm(
    "Would you like your passcode to contain uppercase letters?"
  );
  if (uppercaseChoice === true) {
    possibleCode.push(uppercase);
    alert("Uppercase has been selected.");
  }
  var numberChoice = confirm(
    "Would you like your passcode to contain numbers?"
  );
  if (numberChoice === true) {
    possibleCode.push(numbers);
    alert("Numbers have been selected.");
  }
  var specialCharacterChoice = confirm(
    "Would you like your passcode to contain special characters?"
  );
  if (specialCharacterChoice === true) {
    possibleCode.push(specialCharacter);
    alert("Special characters have been selected.");
  }
  //if the user does not select atleast one critieria then alerts and starts over
  if (possibleCode == 0) {
    alert("Your password must contain values!");
    generatePassword();
  }
  //creation of additional arrays that convert the possibleCode array or arrays to one array
  var finalPassOp = possibleCode.flat();

  var arrayPass = [];
  //for loop to use the length of selected password and creates random code
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * finalPassOp.length);
    arrayPass.push(finalPassOp[random]);
  }
  finalPass = arrayPass.join("");
  return finalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("Click", generatePassword);
