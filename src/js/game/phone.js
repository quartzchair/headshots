import RandomNumber from '../util/random-number'
import Mom from './mom'
import YourAgent from './your-agent'
import Calendar from './calendar'
import BankAccount from './bank-account'

class Phone {
  constructor() {
    console.log('Phone called')
    this.calendar = new Calendar()
    this.mom = new Mom()
    this.yourAgent = new YourAgent()
    this.bankAccount = new BankAccount()
  }

  recieveCall() {
    var incomingAgentOpportunity = this.isYourAgentCalling()
    var incomingMomCall = this.isMomCalling()

    if (incomingMomCall) {
      // mom takes precedence no matter what, even if your agent is trying
      // to reach you
      console.log('===== mom called =====')
    } else if (incomingAgentOpportunity && !this.yourAgent.isWaitingForCallback) {
      // you have a new lead!
      console.log('===== you have a new lead! =====')
      this.yourAgent.isWaitingForCallback = false
    } else if (incomingAgentOpportunity && this.yourAgent.isWaitingForCallback) {
      // you got the part!
      console.log('===== you got the part! =====')
    } else {
      console.log('===== nothing happens =====')
      // nothing happens
    }
  }

  isMomCalling() {
    return  this.mom.worry >= RandomNumber(1, 100) ? true : false
  }

  isYourAgentCalling() {
    return  this.yourAgent.effectiveness >= RandomNumber(1, 100) ? true : false
  }

  callMom() {
   /*  callMom will allow player to have her pay next month's expenses at
    *  the cost of making her more worried and disappointed. if she cant afford
    *  it or she is too disappointed, she will not help, but get much more
    *  anxious.
    */
    var upcomingExpenses = this.bankAccount.calculateExpenses()

    if ( !this.mom.isSheAtATippingPoint()
        && this.bankAccount.balance < upcomingExpenses
        && this.mom.moneyToGive > upcomingExpenses ) {
      this.bankAccount.balance = this.bankAccount.balance + upcomingExpenses
      this.mom.disappointment = this.mom.disappointment + 10
      this.mom.worry = this.mom.worry + 10
      this.mom.moneyToGive = this.mom.moneyToGive - upcomingExpenses
    } else if ( this.bankAccount.balance >= upcomingExpenses ){
      this.mom.worry = this.mom.worry - 2
      this.mom.disappointment = this.mom.disappointment + 2
    } else if ( this.mom.moneyToGive <= upcomingExpenses ) {
      this.mom.disappointment = this.mom.disappointment + 20
      this.mom.worry = this.mom.worry + 20
    } else {
      this.mom.worry = this.mom.worry + 20
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
