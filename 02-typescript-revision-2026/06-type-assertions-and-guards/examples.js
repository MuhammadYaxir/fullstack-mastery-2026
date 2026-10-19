"use strict";
// Type Assertions & Custom Type Guards
Object.defineProperty(exports, "__esModule", { value: true });
// What are Type Assertions and Custom Type Guards?
// Type Assertions (as): A way to tell the TypeScript compiler: "Trust me, I know what I'm doing and what the exact type of this data is." It overrides TypeScript's default type checking for a specific value.
// Custom Type Guards: A special user-defined function that returns a boolean and uses the is keyword (e.g., value is Type) to tell TypeScript how to narrow down a type in conditional blocks safely.
// ==========================================
// TOPIC: Type Assertions & Custom Type Guards
// ==========================================
// 1. Type Assertions (Using the `as` keyword)
// Sometimes you get data (like from an API or DOM element) as a generic `unknown` or broad type, 
// and you want to treat it as a specific type.
let rawUserData = { name: "Muhammad Yasir", role: "Full-Stack Developer" };
// Using type assertion to tell TypeScript: "Treat this unknown variable as an object with a name property"
const typedUser = rawUserData;
console.log(`Asserted User Role: ${typedUser.role}`);
// A custom type guard function uses a return type of `arg is Type`
function isWebDeveloper(employee) {
    // Check if a specific method or property unique to WebDeveloper exists
    return employee.writeCode !== undefined;
}
// Let's test the custom type guard
const worker = {
    writeCode: () => console.log("Coding in TypeScript & Next.js..."),
    preferredStack: ["Next.js", "Node.js", "Tailwind"]
};
if (isWebDeveloper(worker)) {
    // Inside this block, TypeScript automatically knows `worker` is a WebDeveloper!
    console.log("Worker is a developer. Stack length:", worker.preferredStack.length);
    worker.writeCode();
}
else {
    // TypeScript knows it must be a UIUXDesigner here
    console.log("Worker is a designer.");
}
//# sourceMappingURL=examples.js.map