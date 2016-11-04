var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function takeFee(feeObject) {
    return "taking the fee: " + feeObject.fee;
}
var BankAccount = (function () {
    function BankAccount(paramName, paramAmount) {
        this.name = paramName;
        this.amount = paramAmount;
        this.currentAmount = paramAmount;
    }
    BankAccount.prototype.overdraftProtection = function () {
        return Math.floor(this.currentAmount / 1000) * 100;
    };
    BankAccount.prototype.makeWithdrawal = function (amount) {
        this.currentAmount -= amount;
    };
    return BankAccount;
}());
var myBank = new BankAccount("mark", 25);
myBank.makeWithdrawal(25);
console.log("my bank name is: " + myBank.name);
myBank.name = 'kelsey';
myBank.amount = 0;
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountHolderName, initialAmount, beneficiaryAccount) {
        _super.call(this, accountHolderName, initialAmount);
        this.beneficiary = beneficiaryAccount;
        this.fee = 25;
    }
    SavingsAccount.prototype.overdraftProtection = function () {
        console.log("no protection");
        takeFee(this);
        return 0;
    };
    SavingsAccount.prototype.makeReverseWithdrawal = function (givingAmount) {
        this.amount += givingAmount;
    };
    return SavingsAccount;
}(BankAccount));
var mySavingsAccount = new SavingsAccount("wayne", 500, 'mark');
var CheckingAccount = (function () {
    function CheckingAccount() {
    }
    return CheckingAccount;
}());
var myChecking = new CheckingAccount();
// let myIChecking = new IFee();
var yourBank = {
    fee: 50,
    frequency: "yearly"
};
var yourChBank = {
    fee: 50,
    frequency: "yearly"
};
console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + ". isnt that a drag");
console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + " isnt that a drag");
