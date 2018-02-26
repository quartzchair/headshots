import Calendar from './calendar'
import BankAccount from './bank-account'
import Mom from './mom'
import YourAgent from './your-agent'
import Phone from './phone'
import Headshot from './headshot'
import CastingDirector from './casting-director'
import PublicImage from './public-image'
import Protagonist from './protagonist'

class Game {
  constructor() {
    console.log('Game called')

    var canvas = document.getElementById('game-canvas')
    this.start()
  }

  start() {
    // needs a `Calendar` to add a time aspect
      // - allows time to pass, which affects player's bank account negatively
      // - forces player to age, affecting public image

    var calendar = new Calendar()
    calendar.getDate()
    // needs a `BankAccount` to keep you from having to get a real job
      // - needs to go up when you get a role
        // amount of money depends on whether player gets A,B or C role
      // - needs to go down when you reject a role or get turned down (D role)
      // - if bank account hits zero, game over
    var bankAccount = new BankAccount()
    bankAccount.getBalance()
    bankAccount.calculateExpenses()

    // needs `YourAgent` to get an audition for a part
      // - player can accept or reject parts
    var yourAgent = new YourAgent()

    // needs a `Mom` to give you a sense of obligation
      // - if too little Bank Account is spent, she will increase player's Pressure
      // - if too much Bank Account is spent, she will increase player's Pride
    var mom = new Mom()

    // needs `Phone` so that `Mom` and `YourAgent` can call you and so you can call others
    var phone = new Phone()

    // needs a `Headshot` to make and save your picture
      // - needs a timer to set a time limit
      // - needs keypress event listeners to control different facial features
    var headshot = new Headshot()

    // needs a `CastingDirector` to check how close image is to intended role
      // - needs an emotion engine to ensure proper emotion is conveyed
      // - needs to have an A (better than intended role), B (intended role),
      //   C (worse than intended role) and D (no role) to offer you based off of
      //   emotion engine return
      // - needs to pass information back to your agent to relay back to you
    var castingDirector = new CastingDirector()

    // needs `PublicImage` to determine how famous you are and what sorts of roles
    // people would believe you in
    var publicImage = new PublicImage()

    // needs `Protagonist` to hold specific player stats
      // - needs luck which should be additive, meaning if player gets luck, it's easier for
      // them to get more luck as long as they make wise decisions
      // - needs age so that player can get older as game progresses
    var protagonist = new Protagonist()
  }
}

export default Game
