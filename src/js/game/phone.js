import {randomNumber} from '../util/random-number'

class Phone {
  constructor({calendar, yourMom, yourAgent, bankAccount}) {
    console.log('Phone called')
    this.calendar = calendar
    this.yourMom = yourMom
    this.yourAgent = yourAgent
    this.bankAccount = bankAccount
  }

  receiveCall() {
    var incomingAgentOpportunity = this.isYourAgentCalling()
    var incomingAgentCallback = this.isYourAgentCallingBack()
    var incomingMomCall = this.isMomCalling()

    if (incomingMomCall) {
      // mom takes precedence no matter what, even if your agent is trying
      // to reach you
      console.log('==> mom called <==')
      this.yourMom.constructConversation()
      if (incomingAgentOpportunity) {
        console.log('==> ...and you missed a call from your agent <==')
        if (this.yourAgent.isWaitingForCallback) {
          console.log('==> ...and it was a callback for the part! oh no! <==')
          this.yourAgent.isWaitingForCallback = false
        }
      }
    } else if (incomingAgentOpportunity && !this.yourAgent.isWaitingForCallback) {
      // you have a new lead!
      console.log('==> your agent called and you have a new lead! <==')
      this.yourAgent.isWaitingForCallback = true
    } else if (incomingAgentOpportunity && this.yourAgent.isWaitingForCallback) {
      // you got the part!
      console.log('==> your agent called back and you got the part! payday! <==')
      this.yourAgent.isWaitingForCallback = false
    } else {
      console.log('==> no calls today <==')
      // nothing happens
    }
  }


  isMomCalling() {
    return  this.yourMom.worry >= randomNumber(1, 100) ? true : false
  }

  isYourAgentCalling() {
    return  this.yourAgent.effectiveness >= randomNumber(1, 100) ? true : false
  }

  isYourAgentCallingBack() {
    return  this.yourAgent.effectiveness * this.yourAgent.haste >= randomNumber(1, 100) ? true : false
  }


  callMom() {
   /*  callMom will allow player to have her pay next month's expenses at
    *  the cost of making her more worried and disappointed. if she cant afford
    *  it or she is too disappointed, she will not help, but get much more
    *  anxious.
    */
    var upcomingExpenses = this.bankAccount.calculateExpenses()

    if ( !this.yourMom.isSheAtATippingPoint() &&
        this.bankAccount.balance < upcomingExpenses &&
        this.bankAccount.momsBalance > upcomingExpenses ) {
      this.bankAccount.balance = this.bankAccount.balance + upcomingExpenses
      this.yourMom.disappointment = this.yourMom.disappointment + 10
      this.yourMom.worry = this.yourMom.worry + 10
      this.bankAccount.momsBalance = this.bankAccount.momsBalance - upcomingExpenses

    } else if ( this.bankAccount.balance >= upcomingExpenses ){
      this.yourMom.worry = this.yourMom.worry - 2
      this.yourMom.disappointment = this.yourMom.disappointment + 2

    } else if ( this.bankAccount.momsBalance <= upcomingExpenses ) {
      this.yourMom.disappointment = this.yourMom.disappointment + 20
      this.yourMom.worry = this.yourMom.worry + 20

    } else {
      this.yourMom.worry = this.yourMom.worry + 20
    }
  }

  callAgent() {
   /* callAgent will allow player to call agent to see if there are any jobs
    * s/he forgot to mention, as well as fire agent
    */
    if (this.yourAgent.isWaitingForCallback) {
      // oh yea, i forgot to tell you - you got the part!
    }
  }
}

export default Phone
