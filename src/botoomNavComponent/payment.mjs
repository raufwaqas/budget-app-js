import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { submitBtn } from './submitBtn.mjs'
let payment = document.querySelector('#modals__payment')
let purpose = document.querySelector('#modals__payment--purpose')
let amount = document.querySelector('#modals__payment--amount')
let submit = document.querySelector('.modals__payment--submit')


export let paymnetComponent = () => {
  payment.addEventListener('submit', (e) => {
    e.preventDefault()
    let paymentData = {
      id: nanoid(10),
      title: purpose.value,
      date: dayjs().format('hh:mm a DD/MM/YY'),
      amount: +-amount.value,
      color: 'red'
    }
    // localStorage.setItem('DB', JSON.stringify(paymentData))
    // purpose.value = ""
    // amount.value = ""
    // submit.setAttribute('data-bs-dismiss', "modal")
    // submit.click()
    // submit.setAttribute('data-bs-dismiss', "")
    submitBtn(paymentData, purpose, amount, submit)
  })
}

