interface IFee {
    fee: number;
    frequency: string;
}

function takeFee(feeObject: IFee) {
    return "taking the fee: " + feeObject.fee;
}

class BankAccount {
    public currentAmount: number;
    public name: string;
    public amount: number
    
    constructor(paramName: string, paramAmount: number){
        this.name = paramName;
        this.amount = paramAmount;
        this.currentAmount = paramAmount;
    }

    overdraftProtection(): number {
        return Math.floor(this.currentAmount / 1000) * 100;    
    } 

    makeWithdrawal(amount: number){
        this.currentAmount -= amount;
    }
}

let myBank = new BankAccount("mark", 25);
myBank.makeWithdrawal(25);
console.log(`my bank name is: ${myBank.name}`);
myBank.name = 'kelsey';
myBank.amount = 0;



class SavingsAccount extends BankAccount implements IFee{

    fee: number;
    frequency: string;

    beneficiary: string;

    constructor(accountHolderName: string, initialAmount: number, beneficiaryAccount: string){
        super(accountHolderName, initialAmount);
        this.beneficiary = beneficiaryAccount;
        this.fee = 25;
    }

    overdraftProtection(){
        console.log("no protection");
        takeFee(this);
        return 0;
    }

    makeReverseWithdrawal(givingAmount){
        this.amount += givingAmount;
    }
}

let mySavingsAccount = new SavingsAccount("wayne", 500, 'mark');


class CheckingAccount implements IFee {
    fee: number;
    frequency: string;
}

let myChecking = new CheckingAccount();

// let myIChecking = new IFee();

let yourBank: IFee = {
    fee: 50,
    frequency: "yearly"
}

let yourChBank: CheckingAccount = {
    fee: 50,
    frequency: "yearly"
}


console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + ". isnt that a drag");

console.log(`these are the fees: ${yourChBank.fee} that occur ${yourChBank.frequency} isnt that a drag`);
