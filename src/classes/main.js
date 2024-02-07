import CardPack from "./cardPack.js";
import Hands from "./hands.js";

let cardPack = new CardPack()
let player = new Hands(false)
let dealer = new Hands(true)

document.getElementById("draw").onclick = () => {
    hitCard(player)
    showCards()
    console.log(player.checkCardSum())
}

cardPack.shuffle()
console.log(cardPack.cards)

//player.getCard(cardPack.drawCard())
//console.log(player.getCard(cardPack.drawCard()))
//cardPack.recieveCards(player.returnCardsToPackage())


function hitCard(hands) {
    hands.getCard(cardPack.drawCard())
}

function showCards() {
    const showCards = document.getElementById("cards")

    for (let i = 0; i < player.cardsInHand.length; i++) {
        let newP = document.createElement("p")
        newP.innerText = player.cardsInHand[i].pip
        showCards.append(newP)
    }

}