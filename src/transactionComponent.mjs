import { transactionCard } from './transactionCard.mjs'

// JSON.parse
let data = [JSON.parse(localStorage.getItem('DB'))]

let history = document.querySelector('.transaction__history')

export let trasactionComponent = () => {

  // history.innerHTML = transactionCard()
  history.innerHTML = data.map(x => {
    return transactionCard(x)
  })
}