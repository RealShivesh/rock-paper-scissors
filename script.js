var userInput;
var userScore = 0;
var compInput;
var compScore = 0;

var compArray = ['Rock', 'Paper', 'Scissors'];

const random = () => {
    compInput = Math.floor(Math.random() * compArray.length);
    console.log(compInput);
}

const rock = () => {
    userInput = 0;
    console.log(userInput);
}

const paper = () => {
    userInput = 1;
    console.log(userInput);
}

const scissors = () => {
    userInput = 2;
    console.log(userInput);
}

if (userInput == 0 && compInput == 1 || userInput == 1 && compInput == 2 || userInput == 2 && compInput == 0) {
    compScore = compScore + 1;
    console.log(compScore);
}

if (
    userInput == 1 && compInput == 0 ||
    userInput == 2 && compInput == 1 ||
    userInput == 0 && compInput == 2) {
    userScore = userScore + 1;
    console.log('Userscore is', userScore);
}

document.getElementById("userScore").innerHTML = userScore;
document.getElementById("compScore").innerHTML = compScore;