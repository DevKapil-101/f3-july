class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random() * 1000000000);
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
}

const pcAccount = new BankAccount('pc',500);
console.log(pcAccount);

pcAccount.deposit(400);
console.log(pcAccount);

