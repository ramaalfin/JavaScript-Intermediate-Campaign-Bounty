# Bank Account Management Website
Introduction

This project is a simulated bank account management website created using HTML, CSS, and JavaScript. It allows users to interact with a bank account by performing transactions such as deposits, withdrawals, and balance checks. In this write-up, I'll provide instructions on how to use the website and a walkthrough of how classes, switch statements, and try-catch-finally statements were incorporated.

How to Use the Website

1. Open the index.html file in a web browser.
2. Select the account type (either "Savings" or "Checking").
3. Enter your account holder name.
4. You will see your initial balance displayed as $0.
5. In the "Transaction Type" dropdown, choose whether you want to deposit, withdraw, or check your balance.
6. Enter the transaction amount.
7. Click the "Perform Transaction" button.
8. If there is an error (e.g., insufficient funds or invalid input), an error message will be displayed.
9. Your updated balance will be shown on the page.

Incorporating Classes

The core of this project is the BankAccount class, defined in script.js. This class encapsulates account properties (account holder, account type, balance) and provides methods for deposit, withdrawal, and checking the balance. It promotes code organization and reusability.

Implementing Switch Statements

Switch statements are used in the script.js file to determine the type of transaction selected by the user. Depending on the transaction type, the appropriate method of the BankAccount class (deposit, withdraw, or getBalance) is called. This enhances code readability and maintainability.

Handling Errors with Try-Catch-Finally

The try-catch-finally structure is employed to gracefully handle errors. When a user attempts a transaction that could result in an error (e.g., attempting to withdraw more than the account balance), a catch block captures the error and displays an error message. The finally block ensures that the input field is cleared, promoting a clean user experience.

This website provides a practical and user-friendly way to manage a bank account while demonstrating the use of classes, switch statements, and try-catch-finally statements in a web application. Users can experiment with different transactions and experience how the website handles various scenarios.