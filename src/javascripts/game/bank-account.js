import Protagonist from './protagonist'

class BankAccount {
  constructor() {
    this.protagonist = new Protagonist()
    this.balance = 4500
    this.expenses = this.calculateExpenses()
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
    this.balance = this.balance - this.expenses
  }

  getBalance() {
    return this.balance
  }
}

export default BankAccount
