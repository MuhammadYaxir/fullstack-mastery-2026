// Advanced Types (Intersection Types, Type Guards & Narrowing)

// What are Advanced Types in TypeScript?

// Intersection Types (&): Combines multiple types or interfaces into a single new type that possesses all the properties of each combined type.

// Type Narrowing: The process of refining a variable's type within a conditional block (using checks like typeof, instanceof, or the in operator) so TypeScript knows exactly what methods or properties are safe to use.





// ==========================================
// TOPIC: Advanced Types, Intersections & Narrowing
// ==========================================

// 1. Intersection Types (&) - Combining multiple types
interface BaseUser {
    id: number;
    email: string;
}

interface AdminPermissions {
    adminLevel: number;
    permissions: string[];
}

// Combining both interfaces into a new type using '&'
type SuperAdmin = BaseUser & AdminPermissions;

const currentAdmin: SuperAdmin = {
    id: 101,
    email: "yasir@craftodev.com",
    adminLevel: 5,
    permissions: ["create-deploy", "manage-database", "delete-users"]
};

console.log(`Admin Level: ${currentAdmin.adminLevel}, Email: ${currentAdmin.email}`);


// 2. Type Narrowing with `typeof`
function processInput(input: string | number) {
    // TypeScript knows `input` could be a string or a number here.
    // We use a type guard (`typeof`) to narrow it down:
    if (typeof input === "string") {
        // Inside this block, TS treats `input` strictly as a string
        console.log(`Processing string input in uppercase: ${input.toUpperCase()}`);
    } else {
        // Inside this block, TS treats `input` strictly as a number
        console.log(`Processing numeric input multiplied by 2: ${input * 2}`);
    }
}

processInput("craftodev");
processInput(500);


// 3. Type Narrowing with the `in` Operator (Checking object properties)
interface DeveloperProfile {
    codeLanguage: string;
}

interface DesignerProfile {
    designTool: string;
}

function evaluateProfile(profile: DeveloperProfile | DesignerProfile) {
    // Check if the property "codeLanguage" exists in the object
    if ("codeLanguage" in profile) {
        console.log(`Developer writes code in: ${profile.codeLanguage}`);
    } else {
        console.log(`Designer uses tool: ${profile.designTool}`);
    }
}

evaluateProfile({ codeLanguage: "TypeScript & Next.js" });
evaluateProfile({ designTool: "Figma & Canva" });