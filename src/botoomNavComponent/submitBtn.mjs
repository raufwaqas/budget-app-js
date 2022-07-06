import { trasactionComponent } from "../transactionComponent.mjs"
import {balanceCalculator} from'../balanceCalc.mjs'

let storage = JSON.parse(localStorage.getItem('DB')) || []

export let submitBtn = (data, purpose, amount, submit) => {
  storage.push(data)
  localStorage.setItem('DB', JSON.stringify(storage))
  purpose.value = ""
  amount.value = ""
  submit.setAttribute('data-bs-dismiss', "modal")
  submit.click()
  submit.setAttribute('data-bs-dismiss', "")

  trasactionComponent(storage)
  balanceCalculator(storage)
}
