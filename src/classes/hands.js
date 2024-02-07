export default class Hands {
    cardsInHand = []
    constructor(dealer) {
        this.dealer = dealer;
    }

    getCard(input) {
        this.cardsInHand.push(input)
        return this.cardsInHand;
    }

    checkCardSum() {
        let sum = 0;
        this.cardsInHand.flatMap(item => sum += item.value)
        return sum
    }

    returnCardsToPackage() {
        let copyCardsToReturn = this.cardsInHand;
        this.cardsInHand = []
        return copyCardsToReturn;
    }
}