import Calendar from './calendar'
import BankAccount from './bank-account'
import YourMom from './your-mom'
import YourAgent from './your-agent'
import Phone from './phone'
import Headshot from './headshot'
import CastingDirector from './casting-director'
import PublicImage from './public-image'
import Protagonist from './protagonist'


class Game {
  constructor() {
    console.log('Game called')

    this.canvas = document.getElementById('game-canvas')
    this.initializeComponents()
    // this.playADemoYear()
  }

  initializeComponents() {
    this.initializeProtagonist()
    this.initializePublicImage()
    this.initializeBankAccount()
    this.initializeCalendar()
    this.initializeYourMom()
    this.initializeYourAgent()
    this.initializePhone()
    this.initializeHeadshot()
    this.initializeCastingDirector()
  }

  playADemoYear() {
    var daysInYear = this.calendar.allMonths.length * this.calendar.daysInMonth
    for ( var i = 0; i < daysInYear; i++) {
      this.phone.receiveCall()
    }
  }


  initializeProtagonist() {
    // needs `Protagonist` to hold specific player stats
      // - needs luck which should be additive, meaning if player gets luck, it's easier for
      // them to get more luck as long as they make wise decisions
      // - needs age so that player can get older as game progresses
    this.protagonist = new Protagonist()
  }

  initializePublicImage() {
    // needs `PublicImage` to determine how famous you are and what sorts of roles
    // people would believe you in
    this.publicImage = new PublicImage()
  }

  initializeCalendar() {
    // needs a `Calendar` to add a time aspect
      // - allows time to pass, which affects player's bank account negatively
      // - forces player to age, affecting public image
    this.calendar = new Calendar()
    this.calendar.getDate()
  }

  initializeBankAccount() {
    // needs a `BankAccount` to keep you from having to get a real job
      // - needs to go up when you get a role
        // amount of money depends on whether player gets A,B or C role
      // - needs to go down when you reject a role or get turned down (D role)
      // - if bank account hits zero, game over
    this.bankAccount = new BankAccount()
    this.bankAccount.getBalance()
    this.bankAccount.calculateExpenses()
  }

  initializeYourMom() {
    // needs a `Mom` to give you a sense of obligation
      // - if too little Bank Account is spent, she will increase player's Pressure
      // - if too much Bank Account is spent, she will increase player's Pride
    this.yourMom = new YourMom({
      publicImage: this.publicImage,
      bankAccount: this.bankAccount
    })
  }

  initializeYourAgent() {
    // needs `YourAgent` to get an audition for a part
      // - player can accept or reject parts
    this.yourAgent = new YourAgent()
  }

  initializePhone() {
    // needs `Phone` so that `Mom` and `YourAgent` can call you and so you can call others
    this.phone = new Phone({
      calendar: this.calendar,
      yourMom: this.yourMom,
      yourAgent: this.yourAgent,
      bankAccount: this.bankAccount
    })
  }

  initializeHeadshot() {
    // needs a `Headshot` to make and save your picture
      // - needs a timer to set a time limit
      // - needs keypress event listeners to control different facial features
    this.headshot = new Headshot()
  }

  initializeCastingDirector() {
    // needs a `CastingDirector` to check how close image is to intended role
      // - needs an emotion engine to ensure proper emotion is conveyed
      // - needs to have an A (better than intended role), B (intended role),
      //   C (worse than intended role) and D (no role) to offer you based off of
      //   emotion engine return
      // - needs to pass information back to your agent to relay back to you
    this.castingDirector = new CastingDirector()
  }
}

export default Game
