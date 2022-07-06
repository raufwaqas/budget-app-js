import { transactionCard } from './transactionCard.mjs'
import { emptyHistory } from './emptyHistory.mjs'
// JSON.parse
let data = [JSON.parse(localStorage.getItem('DB'))]

let history = document.querySelector('.transaction__history')

export let trasactionComponent = (data) => {

  let filteredData = data.reverse().filter((item, index) => index < 5)
  if (data.length === 0) {
    return history.innerHTML = emptyHistory()
  }
  else {
    history.innerHTML = filteredData.map((item) => {
      return transactionCard(item)
    }).join('')
  }
  // history.innerHTML = transactionCard()
  // history.innerHTML = data.map(x => {
  //   return transactionCard(x)
  // })

}