import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { submitBtn } from './submitBtn.mjs'

let loan = document.querySelector('#modals__loan')
let purpose = document.querySelector('#modals__loan--purpose')
let amount = document.querySelector('#modals__loan--amount')
let submit = document.querySelector('.modals__loan--submit')

export let loanComponent = () => {
  loan.addEventListener('submit', (e) => {
    e.preventDefault()
    let loanData = {
      id: nanoid(10),
      title: 'loan',
      date: dayjs().format('hh:mm a DD/MM/YY'),
      amount: +amount.value,
      color: 'green'
    }
    submitBtn(loanData, purpose, amount, submit)
    purpose.value ="Loan"
  })
}