"use strict";
// Functions, Optional Parameters & Generics
Object.defineProperty(exports, "__esModule", { value: true });
// What are Functions and Generics in TypeScript?
// Function Typing: Explicitly defining the data types for each parameter a function accepts and the type of value it returns.
// Optional (?) & Default Parameters: Parameters can be marked as optional using a question mark, or assigned a default fallback value if none is provided.
// Generics (<T>): A powerful feature that lets you write reusable, flexible code components (functions, classes, or interfaces) that work with any data type while preserving 100% strict type safety (avoiding the unsafe any type).
// ==========================================
// TOPIC: Functions, Optional Parameters & Generics
// ==========================================
// 1. Typing Function Parameters and Return Types
function createUser(name, age) {
    return {
        name,
        age,
        isActive: true
    };
}
const newUser = createUser("Muhammad Yasir", 28);
console.log(`Created User: ${newUser.name}, Active: ${newUser.isActive}`);
// 2. Optional and Default Parameters
// `role` is optional (has `?`), `status` has a default value of "active"
function formatUserGreeting(username, role, status = "active") {
    const roleText = role ? `(${role})` : "(Developer)";
    return `Hello, ${username} ${roleText} - Status: ${status}`;
}
console.log(formatUserGreeting("Yasir", "Full-Stack Lead"));
console.log(formatUserGreeting("Ali")); // Uses default status
// 3. Generics (<T>) - Reusable and Type-Safe Code
// Instead of using `any` (which loses type safety), Generics allow us to capture the type passed in
function getFirstElement(array) {
    return array[0];
}
const numberArray = [10, 20, 30, 40];
const firstNum = getFirstElement(numberArray); // Explicitly passing type
console.log(`First Number: ${firstNum}`);
const stringArray = ["React", "Next.js", "TypeScript"];
const firstStr = getFirstElement(stringArray); // TypeScript infers T as string automatically!
console.log(`First Tech: ${firstStr}`);
const userResponse = {
    status: 200,
    message: "Success",
    data: {
        userId: 1,
        username: "yasir_craftodev"
    }
};
console.log(`API Response Data ID: ${userResponse.data.userId}`);
//# sourceMappingURL=examples.js.map