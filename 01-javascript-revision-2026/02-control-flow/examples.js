// Control Flow & Loops

// What is Control Flow?
// Control flow is the order in which individual statements, instructions, 
// or function calls are executed or evaluated in a programming language. 
// By default, code runs top-to-bottom, but control flow structures let you make decisions and repeat tasks.

// Key Concepts

// Conditionals (if, else if, else, switch): Allow your program to make decisions and execute different blocks of code based on 
// specific conditions.

// Loops (for, while, for...of, for...in): Allow you to automate repetitive tasks and iterate over data structures 
// like arrays and objects.

// Ternary Operator: A concise, one-line shorthand for a standard if...else statement.

// 01-javascript-revision-2026/02-control-flow/examples.js


// ==========================================
// TOPIC: Control Flow & Loops
// ==========================================

// 1. Conditionals (if / else if / else)
let userRole = "admin";

if (userRole === "admin") {
    console.log("Access granted to admin dashboard.");
} else if (userRole === "editor") {
    console.log("Access granted to editorial tools.");
} else {
    console.log("Access restricted.");
}


// 2. Switch Statements (Great for multiple specific value matches)
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Just another regular day.");
}


// 3. Loops (For, While, For...of)

// A. Standard For Loop
console.log("--- For Loop ---");
for (let i = 1; i <= 3; i++) {
    console.log(`Count index: ${i}`);
}

// B. For...of Loop (Best for looping through arrays)
console.log("--- For...of Loop ---");
const techStack = ["JavaScript", "TypeScript", "React", "Next.js"];

for (let tech of techStack) {
    console.log(`Practicing: ${tech}`);
}