import { trasactionComponent } from "../transactionComponent.mjs"

export let submitBtn = (data, purpose, amount, submit) => {
  localStorage.setItem('DB', JSON.stringify(data))
  purpose.value = ""
  amount.value = ""
  submit.setAttribute('data-bs-dismiss', "modal")
  submit.click()
  submit.setAttribute('data-bs-dismiss', "")

  trasactionComponent()
}
