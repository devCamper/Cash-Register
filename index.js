function checkCashRegister(price, cash, cid) {
  let cidCopy = []
  for(let i = 0; i < cid.length; i++) {
    cidCopy.push([])
    cidCopy[i].push(cid[i][0])
    cidCopy[i].push(0)
  }
  cid = cid.reverse()
  cidCopy = cidCopy.reverse()
  //
  let changeDue = cash - price
  //
  let insuffFunds = false;
  while(true) {
    
    if(changeDue >= 100 && cid[0][1] != 0) {
      changeDue -= 100
      cid[0][1] -= 100
      cidCopy[0][1] += 100
    }
    else if(changeDue >= 20 && cid[1][1] != 0) {
      changeDue -= 20
      cid[1][1] -= 20
      cidCopy[1][1] += 20
    }
    else if(changeDue >= 10 && cid[2][1] != 0) {
      changeDue -= 10
      cid[2][1] -= 10
      cidCopy[2][1] += 10
    }
    else if(changeDue >= 5 && cid[3][1] != 0) {
      changeDue -= 5
      cid[3][1] -= 5
      cidCopy[3][1] += 5
    }
    else if(changeDue >= 1 && cid[4][1] != 0) {
      changeDue -= 1
      cid[4][1] -= 1
      cidCopy[4][1] += 1
    }
    else if(changeDue >= 0.25 && cid[5][1] != 0) {
      changeDue -= 0.25
      cid[5][1] -= 0.25
      cidCopy[5][1] += 0.25
    }
    else if(changeDue >= 0.10 && cid[6][1] != 0) {
      changeDue -= 0.10
      cid[6][1] -= 0.10
      cidCopy[6][1] += 0.10
    }
    else if(changeDue >= 0.05 && cid[7][1] != 0) {
      changeDue -= 0.05
      cid[7][1] -= 0.05
      cidCopy[7][1] += 0.05
    }
    else if(changeDue >= 0.01 && cid[8][1] != 0) {
      changeDue -= 0.01
      cid[8][1] -= 0.01
      cidCopy[8][1] += 0.01
    }
    else {
      if(changeDue > 0 && cid[8][1] != 0) {
        changeDue = 0
        cid[8][1] = 0
        cidCopy[8][1] = Math.round(cidCopy[8][1]*100)/100
        cidCopy[8][1] += 0.01
      }
      else if(changeDue == 0) {
        break;
      }
      else {
        insuffFunds = true;
      }
    }
  }
  //
  let change = []
  for(let i = 0; i < cidCopy.length; i++) {
    if(cidCopy[i][1] != 0) {
      change.push(cidCopy[i])
    }
  }
  let returnValue;
  if(insuffFunds) {
    returnValue = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  else {
    
    for(let i = 0; i < cid.length; i++) {
      if(cid[i][1] != 0) {
        returnValue = {
          status: "OPEN",
          change: change
        }
        return returnValue
      }
    }
    returnValue = {
      status: "CLOSED",
      change: cidCopy.reverse()
    }
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

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))