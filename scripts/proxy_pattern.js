// BankAccount class to manage bank account
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Withdrawal denied.");
        }
    }

    checkBalance() {
        console.log(`Account balance: ${this.balance}$`);
    }
}

const bankAccount = new BankAccount();

// AuthorizationProxy class controls access to bank account methods
class AuthorizationProxy {
    constructor(bankAccount) {
        this.bankAccount = bankAccount;
    }
  
    deposit(user, amount) {
        if (user === "admin") {
            this.bankAccount.deposit(amount);
            console.log(`Deposited ${amount}$`);
        } else {
            console.log(`Permission denied for ${user}`);
        }
    }
    
    withdraw(user, amount) {
        if (user === "admin") {
            this.bankAccount.withdraw(amount);
            console.log(`Withdrawn ${amount}$`);
        } else {
            console.log(`Permission denied for ${user}`);
        }
    }

    checkBalance(user) {
        if (user === "admin") {
            this.bankAccount.checkBalance();
        } else {
            console.log(`Permission denied for ${user}`);
        }
    }
}

// Example usage of the Proxy Pattern
const user = new AuthorizationProxy(bankAccount);
user.deposit("admin", 10000);
user.deposit("user", 15000);
user.withdraw("admin", 8600);
user.withdraw("user", 3000);
user.checkBalance("admin");
user.checkBalance("user");
