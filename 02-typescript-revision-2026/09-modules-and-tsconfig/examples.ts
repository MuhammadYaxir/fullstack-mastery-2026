// TypeScript Modules, Namespaces & tsconfig.json Deep Dive

// What are Modules and the tsconfig.json Configuration?

// ES Modules (import/export): The modern standard for organizing code across multiple files. Each file has its own isolated scope, preventing global variable pollution.

// Namespaces (namespace): An older, TypeScript-specific way to group related code under a single global namespace. While mostly superseded by ES modules today, you'll still encounter them in legacy codebases or third-party type definitions (.d.ts).

// tsconfig.json Deep Dive: The blueprint that controls how the TypeScript compiler behaves. Key settings include:

// target: Specifies the ECMAScript target version (e.g., ESNext or ES2022).

// strict: Enables all strict type-checking options (crucial for robust code).

// rootDir & outDir: Controls where your source .ts files live and where compiled .js files are outputted.





// ==========================================
// TOPIC: TypeScript Modules & Configuration
// ==========================================

// 1. Simulating ES Module Exports & Imports
// In a real multi-file project, you export code using `export` and pull it in using `import`.
export interface AgencyService {
    serviceName: string;
    price: number;
}

export function calculateServiceCost(service: AgencyService, hours: number): number {
    return service.price * hours;
}

// Local validation test within this module file
const webDevService: AgencyService = {
    serviceName: "Full-Stack Next.js App",
    price: 75 // per hour
};

const totalCost = calculateServiceCost(webDevService, 40);
console.log(`Service: ${webDevService.serviceName} | Total Cost: $${totalCost}`);


// 2. Legacy/Ambient Namespaces (Often seen in older TypeScript declarations)
namespace AgencyAnalytics {
    export function trackEvent(eventName: string): void {
        console.log(`[Analytics Engine]: Event tracked -> ${eventName}`);
    }
}

// Calling the namespace function
AgencyAnalytics.trackEvent("user_signup_completed");


// 3. Understanding Production `tsconfig.json` Structure
// A typical production-ready tsconfig.json looks like this:
/*
{
  "compilerOptions": {
    "target": "ES2022",                  // Modern JS output
    "module": "NodeNext",                // Modern Node module resolution
    "lib": ["ES2022"],                   // Environment libraries
    "strict": true,                      // Maximum type safety
    "esModuleInterop": true,             // Compatibility for CommonJS imports
    "skipLibCheck": true,                // Skip type checking of declaration files for speed
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]                // Files to compile
}
*/
console.log("TypeScript configuration review completed successfully!");