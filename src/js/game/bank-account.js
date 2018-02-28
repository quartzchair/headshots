import Protagonist from './protagonist'

class BankAccount {
  constructor() {
    this.protagonist = new Protagonist()
    this.balance = 4500
    this.momsBalance = 4500
  }

  calculateExpenses() {
    var expenses = 0
    for (var expense in this.protagonist.expenses) {
      if (this.protagonist.expenses.hasOwnProperty(expense)) {
        expenses = expenses + this.protagonist.expenses[expense]
      }
    }
    return expenses
  }

  getPaid(paycheck) {
    this.balance = this.balance + paycheck
  }

  payBills() {
    var expenses = this.calculateExpenses()
    this.balance = this.balance - expenses
  }

  getBalance() {
    return this.balance
  }
}

export default BankAccount
