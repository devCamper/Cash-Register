function checkCashRegister(price, cash, cid) {
  let cidCopy = []
  for(let i = 0; i < cid.length; i++) {
    cidCopy.push([])
      cidCopy[i].push(cid[i][0])
      cidCopy[i].push(0)
  }
  //
  let changeDue = cash - price
  if(changeDue >= 0.25 && cid[3][1] != 0) {
    changeDue -= 0.25
    cid[3][1] -= 0.25
    cidCopy[3][1] += 0.25
  }
  if(changeDue >= 0.25 && cid[3][1] != 0) {
    changeDue -= 0.25
    cid[3][1] -= 0.25
    cidCopy[3][1] += 0.25
  }
  //
  let change = []
  for(let i = 0; i < cidCopy.length; i++) {
    if(cidCopy[i][1] != 0) {
      change.push(cidCopy[i])
    }
  }
  var returnValue = {
    status: "OPEN",
    change: change
  }
  return returnValue;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])[3])