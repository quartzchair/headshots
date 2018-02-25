class Protagonist {
  constructor() {
    console.log('Protagonist called')
    this.age = 24
    this.agingIncrement = 1
    this.startingLuck = 100
    this.luck = this.startingLuck
    this.luckOdds = 1 / this.luck
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
