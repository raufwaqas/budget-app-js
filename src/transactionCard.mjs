export let transactionCard = (data) => {
  // let { id, title, date, transID, amount } = data
  return `
          <div id="transaction__history--78246trjhdskfh">
              <div class="row__1">
                <div class="row__1--title fw-semibold">Grocery</div>
                <div class="row__1--date fw-light">02:21 pm 23/06/22</div>
              </div>
              <div class="row__2">
                <div class="row__2--transID fw-light py-1">trans ID : 65jhds</div>
                <div class="row__2--amount fw-semibold">$19,768.03</div>
              </div>
          </div>
          <hr>
  `
}