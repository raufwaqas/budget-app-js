import { paymnetComponent } from './payment.mjs'
import { recieveComponent } from './recieve.mjs'
import { sendComponent } from './send.mjs'
import { loanComponent } from './loan.mjs'

export let bottomNavComponent = () => {
  paymnetComponent()
  recieveComponent()
  sendComponent()
  loanComponent()
}
