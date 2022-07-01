
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
let recieve = document.querySelector('#modals__recieve')
let from = document.querySelector('#modals__recieve--from')
let amount = document.querySelector('#modals__recieve--amount')

export let recieveComponent = () => {
  recieve.addEventListener('submit', (e) => {
    e.preventDefault()
    let recieveData = {
      id: nanoid(10),
      title: from.value,
      date: dayjs().format('hh:mm a DD/MM/YY'),
      amount: +amount.value,
      color: 'green'
    }
    console.log(recieveData)
  })
}