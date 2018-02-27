class Protagonist {
  constructor() {
    console.log('Protagonist called')
    this.name = 'Sam'
    this.age = 24
    this.agingIncrement = 1
    this.isWoman = false
    this.startingLuck = 100
    this.luck = this.startingLuck
    this.luckOdds = 1 / this.luck
    // if self worth is low, its harder to be likeable
    this.selfWorth = 50

    this.expenses = {
      'housing': 300,
      'utilities': 100,
      'food': 100
    }
  }

  growOlder() {
    this.age = this.age + this.agingIncrement
  }

  getLuckier() {
    this.luck = this.luck - (this.luck/10)
  }

  loseLuck() {
    this.luck = this.startingLuck
  }
}

export default Protagonist
