// ==========================================
// TOPIC: JavaScript Basics & Dynamic Typing
// Introduction to JavaScript
// What is JavaScript?
// JavaScript (JS) is a lightweight, interpreted, or JIT-compiled programming language with first-class functions. 
// While it is most famous as the scripting language for Web pages, it is also used in a non-browser environment 
// such as Node.js for backend development, mobile app development, and automation.

// Key Characteristics
// Dynamic Typing: Variables are not bound to a specific data type. A variable can hold a number and later hold a string.

// Single-Threaded: JavaScript executes code sequentially on a single main thread using an event loop to handle asynchronous operations.

// Multi-Paradigm: Supports object-oriented, imperative, and functional programming styles.

// Interpreted / JIT Compiled: Modern browsers use Just-In-Time (JIT) compilation to compile JavaScript into machine code right before execution for high performance.
// ==========================================

// 1. JavaScript is Dynamically Typed
let flexibleVar = "Hello, World!"; // Initially a string
console.log(typeof flexibleVar, flexibleVar);

flexibleVar = 42; // Now it's a number
console.log(typeof flexibleVar, flexibleVar);

flexibleVar = { active: true }; // Now it's an object
console.log(typeof flexibleVar, flexibleVar);


// 2. First-Class Functions (Functions can be treated like variables)
const greet = function(name) {
    return `Welcome to JavaScript mastery, ${name}!`;
};

// Passing a function as an argument
function executeTask(taskFunction, parameter) {
    return taskFunction(parameter);
}

console.log(executeTask(greet, "Yasir"));