import Phone from './phone'

class Mom {
  constructor() {
    console.log('Mom called')
    // if Mom is disappointed, she will lower your self worth
    this.disappointment = Math.ceil(Math.random()*100)
    // if Mom is worried, she will call more frequently, making it more
    // difficult for your agent to reach you
    this.worry = Math.ceil(Math.random()*100)

    console.log(this.disappointment, this.isSheProud(), this.worry, this.isSheWorriedSick())
  }

  isSheProud() {
    return this.disappointment <= 10 ? true : false
  }

  isSheWorriedSick() {
    // if this.isSheProud() return false
    return this.worry >= 90 ? true : false
  }
}

export default Mom
