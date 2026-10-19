"use strict";
// Advanced Types (Intersection Types, Type Guards & Narrowing)
Object.defineProperty(exports, "__esModule", { value: true });
const currentAdmin = {
    id: 101,
    email: "yasir@craftodev.com",
    adminLevel: 5,
    permissions: ["create-deploy", "manage-database", "delete-users"]
};
console.log(`Admin Level: ${currentAdmin.adminLevel}, Email: ${currentAdmin.email}`);
// 2. Type Narrowing with `typeof`
function processInput(input) {
    // TypeScript knows `input` could be a string or a number here.
    // We use a type guard (`typeof`) to narrow it down:
    if (typeof input === "string") {
        // Inside this block, TS treats `input` strictly as a string
        console.log(`Processing string input in uppercase: ${input.toUpperCase()}`);
    }
    else {
        // Inside this block, TS treats `input` strictly as a number
        console.log(`Processing numeric input multiplied by 2: ${input * 2}`);
    }
}
processInput("craftodev");
processInput(500);
function evaluateProfile(profile) {
    // Check if the property "codeLanguage" exists in the object
    if ("codeLanguage" in profile) {
        console.log(`Developer writes code in: ${profile.codeLanguage}`);
    }
    else {
        console.log(`Designer uses tool: ${profile.designTool}`);
    }
}
evaluateProfile({ codeLanguage: "TypeScript & Next.js" });
evaluateProfile({ designTool: "Figma & Canva" });
//# sourceMappingURL=examples.js.map