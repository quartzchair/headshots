import {randomNumber} from '../util/random-number'

class YourAgent {
  constructor() {
    console.log('YourAgent called')
    this.effectiveness = randomNumber(5, 20)
    this.haste = randomNumber(1, 1.3)
    this.agentFee = 100
    this.isWaitingForCallback = false
    console.log(`agent effectiveness ${this.effectiveness}`)
    console.log(`agent haste ${this.haste}`)
  }
}

export default YourAgent
