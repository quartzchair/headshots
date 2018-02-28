import {randomNumber} from '../util/random-number'
import YourMomsTalkingPoints from './your-moms-talking-points'

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

  constructConversation() {
    // will need a conversation on a slide, where if mom is more disappointed
    // or worried, she will say more cutting/panicky things
    var conversation = `${YourMomsTalkingPoints.intro[Math.floor(Math.random()*YourMomsTalkingPoints.intro.length)]} ${YourMomsTalkingPoints.request[Math.floor(Math.random()*YourMomsTalkingPoints.request.length)]} ${YourMomsTalkingPoints.emphasis[Math.floor(Math.random()*YourMomsTalkingPoints.emphasis.length)]} ${YourMomsTalkingPoints.conclusion[Math.floor(Math.random()*YourMomsTalkingPoints.conclusion.length)]}`
    console.log(conversation)
  }
}

export default YourMom
