class BankAccount {
  constructor() {
    this.balance = 4500
    this.expenses = 500
  }

  payBills() {
    this.balance = this.balance - this.expenses
  }

  getBalance() {
    console.log(this.balance)
    return this.balance
  }
}

export default BankAccount
