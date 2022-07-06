export let transactionCard = (data) => {
  let { id, title, date, color, amount } = data
  return `
          <div id='transaction__history--${id}'>
              <div class="row__1">
                <div class="row__1--title fw-semibold">${title}</div>
                <div class="row__1--date fw-light">${date}</div>
              </div>
              <div class="row__2">
                <div class="row__2--transID fw-light py-1">trans ID : ${id}</div>
                <div class="row__2--amount fw-semibold ${color}">$${amount}</div>
              </div>
          </div>
          <hr>
  `
}