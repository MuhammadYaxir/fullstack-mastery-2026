"use strict";
// Basic Types, Interfaces & Type Aliases
Object.defineProperty(exports, "__esModule", { value: true });
// What are Basic Types, Interfaces, and Type Aliases in TypeScript?
// Arrays & Tuples: Arrays store lists of a single type (e.g., string[]). A Tuple is a fixed-length array where each element has a specific, known type (e.g., [string, number]).
// Interfaces (interface): A powerful way to define the exact shape and contract of an object (what properties and methods it must have). Interfaces can also be extended.
// Type Aliases (type): Used to create a custom name for any type (primitives, unions, or complex objects).
// Union Types (|): Allows a variable to accept multiple possible types (e.g., string | number).
// ==========================================
// TOPIC: Basic Types, Interfaces & Type Aliases
// ==========================================
// 1. Arrays and Tuples
const developerSkills = ["JavaScript", "TypeScript", "React", "Node.js"];
// Tuple: Fixed length and specific types at each index [id, username]
const userRecord = [101, "Muhammad Yasir"];
console.log(`User ID: ${userRecord[0]}, Name: ${userRecord[1]}`);
// 2. Union Types (Allowing multiple types)
let apiStatus = "loading";
apiStatus = "success"; // Valid
const myProject = {
    id: 1,
    title: "CraftODev Agency Platform",
    category: "Full-Stack Development"
};
console.log(`Project: ${myProject.title} (${myProject.category})`);
const leadDeveloper = {
    id: 2,
    title: "Solar Water Pump Dashboard",
    category: "IoT",
    role: "Lead Full-Stack Developer",
    160: 160 // TypeScript allows matching object keys, but let's map monthlyHours correctly:
};
// Fixing property assignment for AgencyMember:
const leadDevInfo = {
    id: 2,
    title: "Solar Water Pump Dashboard",
    category: "IoT",
    role: "Lead Full-Stack Developer",
    monthlyHours: 160
};
console.log(`${leadDevInfo.role} working on ${leadDevInfo.title}`);
let studentId = "TX-9988";
studentId = 9988; // Both are valid!
//# sourceMappingURL=examples.js.map