// Basic Types, Interfaces & Type Aliases

// What are Basic Types, Interfaces, and Type Aliases in TypeScript?

// Arrays & Tuples: Arrays store lists of a single type (e.g., string[]). A Tuple is a fixed-length array where each element has a specific, known type (e.g., [string, number]).

// Interfaces (interface): A powerful way to define the exact shape and contract of an object (what properties and methods it must have). Interfaces can also be extended.

// Type Aliases (type): Used to create a custom name for any type (primitives, unions, or complex objects).

// Union Types (|): Allows a variable to accept multiple possible types (e.g., string | number).



// ==========================================
// TOPIC: Basic Types, Interfaces & Type Aliases
// ==========================================

// 1. Arrays and Tuples
const developerSkills: string[] = ["JavaScript", "TypeScript", "React", "Node.js"];

// Tuple: Fixed length and specific types at each index [id, username]
const userRecord: [number, string] = [101, "Muhammad Yasir"];
console.log(`User ID: ${userRecord[0]}, Name: ${userRecord[1]}`);


// 2. Union Types (Allowing multiple types)
let apiStatus: "loading" | "success" | "error" = "loading";
apiStatus = "success"; // Valid
// apiStatus = "failed"; // Error: Type '"failed"' is not assignable to type...


// 3. Interfaces (Defining object contracts)
interface Project {
    readonly id: number; // Cannot be changed after creation
    title: string;
    category: string;
    liveUrl?: string; // Optional property (denoted by ?)
}

const myProject: Project = {
    id: 1,
    title: "CraftODev Agency Platform",
    category: "Full-Stack Development"
};

console.log(`Project: ${myProject.title} (${myProject.category})`);


// 4. Extending Interfaces
interface AgencyMember extends Project {
    role: string;
    monthlyHours: number;
}

const leadDeveloper: AgencyMember = {
    id: 2,
    title: "Solar Water Pump Dashboard",
    category: "IoT",
    role: "Lead Full-Stack Developer",
    160: 160 // TypeScript allows matching object keys, but let's map monthlyHours correctly:
};

// Fixing property assignment for AgencyMember:
const leadDevInfo: AgencyMember = {
    id: 2,
    title: "Solar Water Pump Dashboard",
    category: "IoT",
    role: "Lead Full-Stack Developer",
    monthlyHours: 160
};

console.log(`${leadDevInfo.role} working on ${leadDevInfo.title}`);


// 5. Type Aliases (Alternative to interfaces for custom types)
type ID = string | number; // Union type alias
let studentId: ID = "TX-9988";
studentId = 9988; // Both are valid!