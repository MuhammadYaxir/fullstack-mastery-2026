// Variables, Data Types & Operators
// Key Definitions
// Variables (let, const, var): Containers for storing data values.

// const: Block-scoped, cannot be reassigned (though objects/arrays assigned to it can have their properties mutated).

// let: Block-scoped, can be reassigned.

// var: Function-scoped, hoisted with an initial value of undefined. (Generally avoided in modern JS).

// Primitives vs Reference Types:

// Primitives: Immutable data types stored directly in the stack (String, Number, Boolean, Undefined, Null, Symbol, BigInt).

// Reference Types: Mutable data structures stored in the heap, accessed via reference pointers (Objects, Arrays, Functions).

// Operators: Symbols used to perform operations on values and variables (Arithmetic, Assignment, Comparison, Logical).



// ==========================================
// TOPIC: Variables, Data Types & Operators
// ==========================================

// 1. Variable Declarations
const apiKey = "12345-ABCDE"; // Constant: Cannot be reassigned
let userScore = 10;          // Mutable: Can be updated
userScore = 15;              // Valid update


// 2. JavaScript Data Types (Primitives vs Reference)

// A. Primitives (Passed by value)
let name = "Yasir";         // String
let age = 30;               // Number
let isDeveloper = true;     // Boolean
let unassigned;             // Undefined
let emptyValue = null;      // Null (intentional absence of value)
let uniqueId = Symbol("id"); // Symbol (unique identifier)
let largeNumber = 9007199254740991n; // BigInt

console.log(typeof age);        // "number"
console.log(typeof emptyValue); // "object" (famous historical JS bug!)

// B. Reference Types (Passed by reference)
let user = {
    firstName: "Muhammad",
    role: "Full-Stack Developer"
};

let numbersList = [1, 2, 3, 4, 5];


// 3. Operators Overview
let a = 10;
let b = 3;

// Arithmetic
console.log(a + b); // Addition: 13
console.log(a ** b); // Exponentiation: 1000

// Comparison (Strict vs Loose)
console.log(5 == "5");   // true (Loose equality - performs type coercion)
console.log(5 === "5");  // false (Strict equality - checks both value and type)

// Logical Operators
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission); // AND: false
console.log(isLoggedIn || hasPermission); // OR: true
console.log(!isLoggedIn);                // NOT: false