// Advanced Functions & Functional Patterns

// What are Advanced Functions & Patterns?

// Pure Functions: A function where the return value is only determined by its input values, and it produces no side effects (does not mutate external state or global variables).

// Recursion: A programming technique where a function calls itself repeatedly until it reaches a defined "base case" that stops the execution.

// Currying: A functional programming technique where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument.

// Function Composition: The process of combining two or more functions to produce a new function, where the output of one function becomes the input of the next.

// Callbacks: A function passed into another function as an argument, to be executed later when an asynchronous or synchronous task completes.

// ==========================================
// TOPIC: Advanced Functions & Functional Patterns
// ==========================================

// 1. Pure Functions vs Impure Functions
let globalTaxRate = 0.05; // External state

// Impure Function (Depends on and modifies/relies on external state or has side effects)
function calculateTotalImpure(price) {
    return price + (price * globalTaxRate);
}

// Pure Function (Deterministic: same input always returns same output, no side effects)
function calculateTotalPure(price, taxRate) {
    return price + (price * taxRate);
}

console.log("Pure Calculation:", calculateTotalPure(100, 0.05));


// 2. Recursion (Function calling itself with a base case)
function countdown(n) {
    // Base case: stops the recursion
    if (n <= 0) {
        console.log("Liftoff! 🚀");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive call
}

console.log("--- Recursion Countdown ---");
countdown(3);


// 3. Currying (Transforming f(a, b, c) into f(a)(b)(c))
function multiplyCurried(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

// Using arrow functions for cleaner syntax:
const curriedAdd = a => b => c => a + b + c;

console.log("Curried Multiplication:", multiplyCurried(2)(3)(4)); // 24
console.log("Curried Addition:", curriedAdd(5)(10)(15));        // 30


// 4. Function Composition (Combining functions: f(g(x)))
const addFive = x => x + 5;
const multiplyByTwo = x => x * 2;

// Composing manually: multiplyByTwo applied to the result of addFive
const compositeResult = multiplyByTwo(addFive(10)); // (10 + 5) * 2 = 30
console.log("Function Composition Result:", compositeResult);


// 5. Callbacks (Passing functions as arguments for async or post-processing tasks)
function processUserData(username, callback) {
    console.log(`Processing user: ${username}...`);
    setTimeout(() => {
        const userData = { id: 101, name: username, status: "Active" };
        callback(userData); // Execute callback once data is ready
    }, 1000);
}

processUserData("Muhammad Yasir", function(user) {
    console.log("Callback executed! User data received:", user);
});