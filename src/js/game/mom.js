import RandomNumber from '../util/random-number'
import Phone from './phone'
import PublicImage from './public-image'

class Mom {
  constructor() {
    console.log('Mom called')
    // if Mom is disappointed, she will lower your self worth or refuse to give
    // you money
    this.disappointment = RandomNumber(25, 75)
    // if Mom is worried, she will call more frequently, making it more
    // difficult for your agent to reach you
    this.worry = RandomNumber(10, 40)
    this.moneyToGive = 4500

    console.log(`Mom starting disappointment: ${this.disappointment}`)
    console.log(`Mom starting worry: ${this.worry}`)
  }

  isSheProud() {
    return this.disappointment <= 10 ? true : false
  }

  isSheAtATippingPoint() {
    return this.disappointment >= 90 ? true : false
  }

  isSheWorriedSick() {
    return this.worry >= 90 ? true : false
  }

  changeDisappointment(delta) {
    this.disappointment = this.disappointment + delta

    // if mom is disappointed, it lowers your self confidence, which makes it
    // harder for you to be likeable
    if ( delta < 0 ) {
      var publicImage = new PublicImage()
      publicImage.likeability = publicImage.likeability - 1
    }
  }

  changeWorry(delta) {
    this.worry = this.worry + delta
  }
}

export default Mom
