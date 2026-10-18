// Introduction to TypeScript

// What is TypeScript?

// TypeScript (TS): A strongly typed programming language developed by Microsoft that builds on JavaScript. It is a superset of JavaScript—meaning any valid JavaScript code is already valid TypeScript.

// Static Typing: Unlike JavaScript's dynamic typing, TypeScript allows you to define explicit types for variables, function parameters, and return values. Errors are caught during development (compile-time) rather than when your users run the app (runtime).

// Transpilation: Browsers and Node.js cannot read TypeScript directly. It must be compiled (transpiled) into plain JavaScript using the TypeScript compiler (tsc) before it can be executed.



// ==========================================
// TOPIC: Introduction to TypeScript & Static Types
// ==========================================

// 1. Explicit Type Annotations vs JavaScript Dynamic Typing
// In JS, a variable can change types freely. In TS, we lock down the type:
let userApiKey: string = "TS-KEY-98765";
// userApiKey = 12345; // Error: Type 'number' is not assignable to type 'string'.

let userScore: number = 100;
let isActiveDeveloper: boolean = true;


// 2. Typing Function Parameters and Return Values
// We explicitly state that parameters must be numbers, and the function must return a number
function calculateTotalRevenue(monthlyRevenue: number, months: number): number {
    return monthlyRevenue * months;
}

const total = calculateTotalRevenue(5000, 12);
console.log(`Annual Revenue: $${total}`);


// 3. Type Inference (TypeScript is smart!)
// Even if you don't write the type explicitly, TS infers it based on the assigned value
let inferredAgency = "CraftODev"; // TS automatically knows this is a string
// inferredAgency = 42; // Error: Type 'number' is not assignable to type 'string'.