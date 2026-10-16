// Functions, Scope & Closures (Advanced Details)

// What are Advanced Functions, Scope & Closures?

// Function Declaration vs Expression: Declarations are hoisted and can be called before they are defined. Expressions are assigned to variables and are not hoisted.

// Arrow Functions (() => {}): A concise syntax for writing functions. Crucially, they do not bind their own this keyword; instead, they lexically inherit this from their surrounding execution context.

// Higher-Order Functions (HOFs): Functions that operate on other functions by taking them as arguments or returning them (e.g., map, filter, reduce).

// Immediately Invoked Function Expression (IIFE): A JavaScript function that runs as soon as it is defined, often used to create a private scope and avoid polluting the global namespace.

// Rest Parameters (...args) & Spread Syntax (...): Rest syntax allows a function to accept an indefinite number of arguments as an array, while spread syntax unpacks elements.

// Scope: The accessibility context of variables. Includes Global Scope, Function Scope, and Block Scope (let/const).

// Closure: A function bundled together with references to its surrounding state (lexical environment), allowing an inner function to access and remember an outer function's variables even after the outer function has closed and returned.




// ==========================================
// TOPIC: Advanced Functions, Scope & Closures
// ==========================================

// 1. Function Declarations vs Arrow Functions & `this` Context
const regularObject = {
    name: "CraftODev",
    regularMethod: function() {
        console.log("Regular function this:", this.name); // Refers to regularObject
    },
    arrowMethod: () => {
        console.log("Arrow function this:", this.name);   // Refers to outer/global scope (undefined here)
    }
};

regularObject.regularMethod();
regularObject.arrowMethod();


// 2. Higher-Order Functions (Taking functions as arguments)
function calculate(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const double = n => n * 2;
console.log("Higher-Order Map Result:", calculate([1, 2, 3], double));


// 3. Immediately Invoked Function Expression (IIFE)
(function() {
    let privateMessage = "I am safely encapsulated inside an IIFE!";
    console.log(privateMessage);
})();


// 4. Rest Parameters (...)
function sumAll(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
console.log("Sum All:", sumAll(10, 20, 30, 40)); // 100


// 5. Lexical Scope & Nested Scope chain
let globalVariable = "I am global";

function outerFunction() {
    let outerVariable = "I am inside outer()";

    function innerFunction() {
        let innerVariable = "I am inside inner()";
        console.log(globalVariable);  // Accessible via scope chain
        console.log(outerVariable);   // Accessible via lexical scope
        console.log(innerVariable);   // Accessible locally
    }
    innerFunction();
}
outerFunction();


// 6. Closures (Preserving outer scope state for data privacy)
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable trapped by closure

    return {
        deposit: function(amount) {
            balance += amount;
            return `Deposited: ${amount}, New Balance: ${balance}`;
        },
        withdraw: function(amount) {
            if (amount > balance) return "Insufficient funds!";
            balance -= amount;
            return `Withdrew: ${amount}, Remaining Balance: ${balance}`;
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(500);
console.log(myAccount.deposit(200));   // Deposited: 200, New Balance: 700
console.log(myAccount.withdraw(100));  // Withdrew: 100, Remaining Balance: 600
console.log("Final Balance:", myAccount.getBalance()); // 600