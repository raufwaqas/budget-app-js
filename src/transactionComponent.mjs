import { transactionCard } from './transactionCard.mjs'

let history = document.querySelector('.transaction__history')

export let trasactionComponent = (data) => {

  history.innerHTML += transactionCard()
  history.innerHTML += transactionCard()
  history.innerHTML += transactionCard()
}