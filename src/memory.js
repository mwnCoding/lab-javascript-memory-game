
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards) {
      for (let i = this.cards.length - 1; i >= 1; i--) {
        const randomNumber = Math.floor(Math.random() * i);
        const firstElement = this.cards[i];
        const secondElement = this.cards[randomNumber];
        this.cards[i] = secondElement;
        this.cards[randomNumber] = firstElement;
      }
      return this.cards;
    }
    else {
      return undefined;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.cards.length / 2 === this.pairsGuessed;
  }
}
