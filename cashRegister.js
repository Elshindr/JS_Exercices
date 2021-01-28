function checkCashRegister(price, cash, cid) {
    // Objects and array Declaration
    var arrVal = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1.0], ["FIVE", 5.0], ["TEN", 10.0], ["TWENTY", 20.0], ["ONE HUNDRED", 100.0]];
    var objCash = {
        status: "-1",
        change: []
    };
    
    // Variables Declaration
    var coinNeed = cash - price;
    var diff = coinNeed;
    var sum = 0;
    var index = 0;

    // Arrays Creation: keep only coins we need, then reverse to sort in highest to lowest order.
    var arrCid = cid.filter((coin, i) => (coin != 0 && arrVal[i][1] <= coinNeed));
    var arrVal = arrVal.filter((coin, i) => (i < arrCid.length && arrCid[i][0] == coin[0])).reverse();
    var sumArrCid = arrCid.reduce((sum, coin) => (sum += coin[1]), 0);
    arrCid.reverse();
    
    
    // Treatments //
    if (sumArrCid < coinNeed) { // IF NOT enough cash in cash-in-drawer
        objCash.status = "INSUFFICIENT_FUNDS";
    } 
    else if (sumArrCid == coinNeed) { // IF JUST enough cash in cash-in-drawer
        objCash.status = "CLOSED";
        objCash.change = cid;
    } 
    else {// IF enough cash in cash-in-drawer
        while (index < arrCid.length || diff.toFixed(2) != 0) {
            sum = 0;
            while (arrCid[index][1] > 0 && arrVal[index][1] <= coinNeed && diff.toFixed(2) != 0 && diff.toFixed(2) >= arrVal[index][1]) {
                arrCid[index][1] = arrCid[index][1] - arrVal[index][1];
                diff -= arrVal[index][1];
                sum += arrVal[index][1];
            }
            arrCid[index][1] = parseFloat(sum);
            index++;

        }
        objCash.status = "OPEN";
        objCash.change = arrCid.filter(coin => (coin[1] != 0));
    }


    return objCash;
}

// Test example
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), '\n');

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), '\n');