// Bank Account class
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }
}

// UI Elements
const accountTypeSelect = document.getElementById("account-type");
const accountHolderInput = document.getElementById("account-holder");
const balanceDisplay = document.getElementById("balance");
const transactionTypeSelect = document.getElementById("transaction-type");
const amountInput = document.getElementById("amount");
const performTransactionButton = document.getElementById("perform-transaction");
const errorMessage = document.getElementById("error-message");

let currentAccount;

// Event listeners
performTransactionButton.addEventListener("click", () => {
    try {
        const transactionType = transactionTypeSelect.value;
        const amount = parseFloat(amountInput.value);

        switch (transactionType) {
            case "deposit":
                currentAccount.deposit(amount);
                break;
            case "withdraw":
                currentAccount.withdraw(amount);
                break;
            case "balance-check":
                break;
            default:
                throw new Error("Invalid transaction type");
        }

        balanceDisplay.textContent = currentAccount.getBalance();
        errorMessage.textContent = "";
    } catch (error) {
        errorMessage.textContent = error.message;
    } finally {
        amountInput.value = "";
    }
});

// Initialize the account
accountTypeSelect.addEventListener("change", () => {
    const accountType = accountTypeSelect.value;
    const accountHolder = accountHolderInput.value;
    currentAccount = new BankAccount(accountHolder, accountType);
    balanceDisplay.textContent = currentAccount.getBalance();
});
