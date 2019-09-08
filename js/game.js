const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
};

const game = {
    playerHand: "",
    aiHand: ""
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => (hand.style.boxShadow = ""));
    console.log(game.playerHand);
    this.style.boxShadow = "0 0 0 4px red";
}
// handSelection = (e) => {
//     console.log(e.target)
// }
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}
function checkResult(player, ai) {
    if (player === ai) {
        return "draw";
    } else if (
        (player === "papier" && ai === "kamień") ||
        (player === "kamień" && ai === "nożyczki") ||
        (player === "nożyczki" && ai === "papier")
    ) {
        return "win";
    } else {
        return "loss";
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;
    console.log(result)

    if (result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!! "
        document.querySelector('[data-summary="who-win"]').style.color = "green"
    } else if (result === "loss") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent ="Komputer wygrał :)"
        document.querySelector('[data-summary="who-win"]').style.color = "red"
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent ="remis :\\"
        document.querySelector('[data-summary="who-win"]').style.color = "gray"
    }
}
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = ""
    game.playerHand = ""
}

function startGame() {
    if (!game.playerHand) {
        return console.log("wybierz dłoń");
    }
    game.aiHand = aiChoice();
    console.log(game.aiHand);
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    console.log(gameResult)
    endGame()
}

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);

const panelResult = document.querySelector(".panel-right");
