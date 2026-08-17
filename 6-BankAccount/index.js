const BankAccount= {
    accountHolder:"YganehBagherian",
    accountNumber:"6542817900",
    balance:15000000,
    deposit: function (amount) {
        this.balance += amount;
    },
    withdraw: function (amount) {
        this.balance -= amount;
    },
    checkBalance: function() {
        console.log("current balance: " , this.balance);
    },
};
console.log("accountHolder: " , BankAccount.accountHolder);
console.log("accountNumber: " , BankAccount.accountNumber);
console.log("current balance: " , BankAccount.balance);
BankAccount.withdraw(50000);
BankAccount.checkBalance();
