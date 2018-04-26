// let fs = require("fs")

// fs.appendFile('./bank.csv', 'utf8', (error) => {
//     console.log(error)
// })

// let deposit = depositString []
// let withdrawl = withdrawal []

function withdrawlMoney(amount) {
    var balance = 2000;
    if (amount % 5 != 0) {
        alert('Incorrect Withdrawal Amount (not multiple of 5)');
        return false;
    } else if (amount >= balance) {
        alert('Insufficient Funds');
        return false;
    }
    balance = balance - amount - 0.50;
    alert('Successful Transaction! \n Available Balance is: Rs ' + balance);
}

function enterAmount() {
    var amount = document.getElementById("amount").value;
    withdrawlMoney(amount);
}
document.getElementById("enter").addEventListener("click", enterAmount);