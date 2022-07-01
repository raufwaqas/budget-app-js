import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
let loan = document.querySelector('#modals__loan')
let amount = document.querySelector('#modals__loan--amount')

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
    console.log(loanData)
  })
}