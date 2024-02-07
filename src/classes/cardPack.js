import Card from "./card.js"
import Hands from "./hands.js"

export default class CardPack {
    combinations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    cardPips = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    colorsAndSymbols = [
        { symbol: "♦", color: "Red" }, { symbol: "♣", color: "Black" },
        { symbol: "♥", color: "Red" }, { symbol: "♠", color: "Black" }
    ]
    constructor() {
        this.cards = []
        this._generatePack()
    }
    _generatePack() {
        this.colorsAndSymbols.forEach(casItem => {
            let index = 0;
            this.combinations.forEach(combination => {
                this.cards.push(new Card(combination, this.cardPips[index], casItem.color, casItem.symbol))
                index++;
            })
        })
        /*
        for (let i in colorsAndSymbols) {
            console.log(colorsAndSymbols[i].color)
            let index = 0;
            for (let x in combinations) {
                cardPackage.push(new Card(combinations[x], cardPips[index], colorsAndSymbols[i].color, colorsAndSymbols[i].symbol))
                index++;
            }
        }
        */
    }

    shuffle() {
        if (this.cards == [])
            return;
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCardAtStart() {
        let pickedCards = [];
        for (let i = 0; i < 2; i++) {
            pickedCards.push(this.cards.shift())
        }
        return pickedCards;
    }

    drawCard() {
        let pickedCard = this.cards[0];
        this.cards.shift()
        return pickedCard;
    }

    recieveCards(cardsToReturn) {
        if (cardsToReturn instanceof Array) {
            cardsToReturn.forEach(x => this.cards.push(x))
        } else {
            this.cards.push(cardsToReturn)
        }
    }
}


