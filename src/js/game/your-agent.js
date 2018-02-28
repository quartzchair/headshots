import {randomNumber} from '../util/random-number'
import YourAgentsParts from './your-agents-parts'

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

  findALead() {
    var randomLead = YourAgentsParts[Math.floor(Math.random()*YourAgentsParts.length)]
    var intro = `Got some big news! I found a part for you working on a ${randomLead.type}, which is ${randomLead.genre} called '${randomLead.name}'. `
    var lines = `It has ${randomLead.hasLines} lines `
    var particle = 'and '
    var pays = ''

    if (randomLead.type === 'commercial') {
      intro = `Got some big news! I found a part for you making a ${randomLead.type} for ${randomLead.genre} for ${randomLead.name}. `
    }

    if (!randomLead.hasLines) {
      lines = 'There are no lines, though '
    }

    if ((!randomLead.hasLines && randomLead.payment > 0) || randomLead.hasLines && randomLead.payment <= 0 ) {
      particle = 'but '
    }

    if (randomLead.payment >= 1000) {
      pays = 'it pays really well. '
    } else if (randomLead.payment >= 100) {
      pays = 'it pays pretty good. '
    } else if (randomLead.payment > 0) {
      pays = 'it pays ok. '
    } else {
      pays = 'it does not pay. '
    }

    console.log(intro + lines + particle + pays + 'What are your thoughts?')
  }
}

export default YourAgent
