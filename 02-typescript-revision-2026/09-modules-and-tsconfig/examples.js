"use strict";
// TypeScript Modules, Namespaces & tsconfig.json Deep Dive
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateServiceCost = calculateServiceCost;
function calculateServiceCost(service, hours) {
    return service.price * hours;
}
// Local validation test within this module file
const webDevService = {
    serviceName: "Full-Stack Next.js App",
    price: 75 // per hour
};
const totalCost = calculateServiceCost(webDevService, 40);
console.log(`Service: ${webDevService.serviceName} | Total Cost: $${totalCost}`);
// 2. Legacy/Ambient Namespaces (Often seen in older TypeScript declarations)
var AgencyAnalytics;
(function (AgencyAnalytics) {
    function trackEvent(eventName) {
        console.log(`[Analytics Engine]: Event tracked -> ${eventName}`);
    }
    AgencyAnalytics.trackEvent = trackEvent;
})(AgencyAnalytics || (AgencyAnalytics = {}));
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
  "include": ["src/**/ 
    * "]                // Files to compile;
    * /;
console.log("TypeScript configuration review completed successfully!");
//# sourceMappingURL=examples.js.map