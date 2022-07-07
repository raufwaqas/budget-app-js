import {transactionCard} from '../transactionCard.mjs'
let seeAllResults = document.querySelector('#see__all--results')

export let viewAll = (data) => {
  return seeAllResults.innerHTML = data.map(x=>transactionCard(x)).join('')

}