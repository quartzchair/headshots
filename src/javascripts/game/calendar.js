class Calendar {
  constructor() {
    console.log('Calendar called')
    var today = new Date()
    this.month = today.getMonth()
    this.year = today.getFullYear()
    this.allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  getDate() {
    console.log(this.allMonths[this.month], this.year)
    return `${this.allMonths[this.month]}, ${this.year}`
  }

  progressTime() {
    this.prevMonth = this.month
    this.year = this.month === this.allMonths.length - 1 ? this.year + 1 : this.year
    this.month = this.month === this.allMonths.length - 1 ? 0 : this.month + 1
  }
}

export default Calendar
