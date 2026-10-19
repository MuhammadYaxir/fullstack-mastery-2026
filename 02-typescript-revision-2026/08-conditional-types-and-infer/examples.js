"use strict";
// Conditional Types & The infer Keyword
Object.defineProperty(exports, "__esModule", { value: true });
const check1 = true; // Evaluates to boolean
const check2 = 42; // Evaluates to number
console.log(`Check 1 is boolean: ${typeof check1 === "boolean"}`);
const accessCheck = "Full Access Granted";
console.log(`Access Status: ${accessCheck}`);
// 3. The `infer` Keyword (Extracting Return Types)
// Suppose we have an asynchronous function and we want to know what type of data its Promise resolves to.
// TypeScript has a built-in version of this called `Awaited<T>`, but here is how it works under the hood:
async function fetchAgencyData() {
    return { agencyName: "CraftODev", projectsCount: 12 };
}
// Result: { agencyName: string; projectsCount: number; }
const resolvedData = {
    agencyName: "CraftODev Agency",
    projectsCount: 15
};
console.log(`Unwrapped Agency Name: ${resolvedData.agencyName}`);
//# sourceMappingURL=examples.js.map