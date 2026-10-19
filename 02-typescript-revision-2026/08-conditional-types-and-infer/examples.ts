// Conditional Types & The infer Keyword

// What are Conditional Types and the infer Keyword?

// Conditional Types: Allow you to write types that choose between one of two possible types based on a condition (using a ternary operator syntax: T extends U ? X : Y).

// The infer Keyword: Used inside a conditional type to "extract" or "infer" a specific type variable on the fly (for example, extracting the return type of a function or the data type inside a Promise).




// ==========================================
// TOPIC: Conditional Types & The `infer` Keyword
// ==========================================

// 1. Basic Conditional Types
// A type that checks if `T` extends `string`. If yes, returns boolean, otherwise returns number.
type IsString<T> = T extends string ? boolean : number;

const check1: IsString<string> = true; // Evaluates to boolean
const check2: IsString<number> = 42;    // Evaluates to number

console.log(`Check 1 is boolean: ${typeof check1 === "boolean"}`);


// 2. Practical Conditional Types (API Response Type Resolver)
interface AdminUser {
    role: "admin";
    permissions: string[];
}

interface GuestUser {
    role: "guest";
}

// Check what kind of user role was passed and return the corresponding log message type
type UserAccessLevel<T> = T extends AdminUser ? "Full Access Granted" : "Restricted Access";

type AdminAccess = UserAccessLevel<AdminUser>; // "Full Access Granted"
type GuestAccess = UserAccessLevel<GuestUser>; // "Restricted Access"

const accessCheck: AdminAccess = "Full Access Granted";
console.log(`Access Status: ${accessCheck}`);


// 3. The `infer` Keyword (Extracting Return Types)
// Suppose we have an asynchronous function and we want to know what type of data its Promise resolves to.
// TypeScript has a built-in version of this called `Awaited<T>`, but here is how it works under the hood:

async function fetchAgencyData() {
    return { agencyName: "CraftODev", projectsCount: 12 };
}

// Custom conditional type using `infer` to extract the return type of a function
type ExtractFunctionReturn<T> = T extends (...args: any[]) => infer R ? R : never;

// Extracting the promise type returned by `fetchAgencyData`
type FetchReturnType = ExtractFunctionReturn<typeof fetchAgencyData>; 
// Result: Promise<{ agencyName: string; projectsCount: number; }>


// 4. Extracting the resolved type inside a Promise using `infer`
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Unwrapping the Promise to get the raw object type directly!
type CleanAgencyData = UnwrapPromise<FetchReturnType>; 
// Result: { agencyName: string; projectsCount: number; }

const resolvedData: CleanAgencyData = {
    agencyName: "CraftODev Agency",
    projectsCount: 15
};

console.log(`Unwrapped Agency Name: ${resolvedData.agencyName}`);