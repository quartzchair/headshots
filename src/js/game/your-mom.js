import {randomNumber} from '../util/random-number'

class YourMom {
  constructor({publicImage}) {
    console.log('YourMom called')
    // if YourMom is disappointed, she will lower your self worth or refuse to give
    // you money
    this.disappointment = randomNumber(15, 65)
    // if YourMom is worried, she will call more frequently, making it more
    // difficult for your agent to reach you
    this.worry = randomNumber(10, 30)

    this.publicImage = publicImage
    console.log(`YourMom starting disappointment: ${this.disappointment}`)
    console.log(`YourMom starting worry: ${this.worry}`)
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
      this.publicImage.likeability = publicImage.likeability - 1
    }
  }

  changeWorry(delta) {
    this.worry = this.worry + delta
  }
}

export default YourMom
