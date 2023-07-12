function BankAccount(customerName, balance){
    this.customerName=customerName;
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.balance = balance;
}

// console.log(BankAccount.prototype);
BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
}

function SavingsAccount(customerName,balance){
    this.customerName=customerName;
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.balance = balance;
}
SavingsAccount.prototype.deposit = function(amount){
    this.balance+=amount;
}
// CALL, BIND AND APPLY?
