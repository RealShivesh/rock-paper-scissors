let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user_score")
const compScore_span = document.getElementById("comp_score")

const scoreBoard = document.querySelector(".scoreboard")

const result_div = document.querySelector(".result")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}

function convert(inp){
if (inp === "rock") return "Rock"
if (inp === "paper") return "Paper"
if (inp === "scissors") return "Scissors"
}

function win(user, comp) {
    userScore++
    userScore_span.innerHTML = userScore
    console.log(user)
    console.log(comp)
    result_div.innerHTML = `${convert(user)} beats ${convert(comp)}! You win`
}

function lose(user, comp) {
    compScore++
    compScore_span.innerHTML =  compScore
    console.log(user)
    console.log(comp)
    result_div.innerHTML = convert(comp) + " beats " + convert(user) + "! You lose"
}

function draw(user, comp) {
    console.log(user)
    console.log(comp)
    result_div.innerHTML = convert(user) + " draws with " + convert(comp)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice)
            break
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice)
            break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice)
    }
}

function main() {
    rock.addEventListener('click', function () {
        game("rock");
    })

    paper.addEventListener('click', function () {
        game("paper");
    })

    scissors.addEventListener('click', function () {
        game("scissors");
    })
}

main();