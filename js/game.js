const gameSummary = {
    numbers: 0,
    win: 0,
    losses: 0,
    draws: 0,
};

const game = {
    playerHand: "",
    aiHand: "",

};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
    console.log(this);
    game.playerHand = this.dataset.option;
    hands.forEach(hands => hands.style.boxShadow = '')
    console.log(game.playerHand);
    this.style.boxShadow = '0 0 0 4px red'
}
// handSelection = (e) => {
//     console.log(e.target)
// }

hands.forEach(hand => hand.addEventListener("click", handSelection));
