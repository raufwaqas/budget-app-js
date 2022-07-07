import { getDateToday } from './date.mjs'
import { balanceCalculator } from './balanceCalc.mjs'
import { trasactionComponent } from './transactionComponent.mjs'
import { bottomNavComponent } from './botoomNavComponent/index.mjs'
import { viewAll } from './botoomNavComponent/seeAll.mjs'


let storage = JSON.parse(localStorage.getItem('DB')) || []
getDateToday()
balanceCalculator(storage)
trasactionComponent(storage)

bottomNavComponent()
viewAll(storage)