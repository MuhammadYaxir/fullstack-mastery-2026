// ES6+ Features (Destructuring, Spread/Rest & Template Literals)

// What are ES6+ Features?

// ES6 (ECMAScript 2015): A major update to JavaScript that introduced modern, clean syntax shortcuts which make code significantly easier to write, read, and maintain.

// Destructuring: A syntax that lets you quickly unpack values from arrays or properties from objects into distinct variables.

// Spread Operator (...): Unpacks or spreads out elements of an array or properties of an object into a new place.

// Rest Parameter (...): Collects multiple remaining elements and bundles them together into a single array.

// Template Literals (`${}`): An easier way to write strings using backticks, allowing embedded variables and multi-line strings without messy string concatenation (+).



// ==========================================
// TOPIC: ES6+ Modern JavaScript Features
// ==========================================

// 1. Template Literals (String Interpolation)
const developer = {
    firstName: "Muhammad",
    lastName: "Yasir",
    role: "Full-Stack Developer"
};

// Old way: "Hello, " + developer.firstName + " " + developer.lastName
// Modern ES6 Template Literal:
const greetingMessage = `Welcome back, ${developer.firstName} ${developer.lastName}! Role: ${developer.role}.`;
console.log(greetingMessage);


// 2. Object & Array Destructuring
const userSettings = {
    theme: "dark",
    notifications: true,
    version: "2.5.0"
};

// Extracting properties into variables with matching names
const { theme, notifications } = userSettings;
console.log(`Theme: ${theme}, Notifications Enabled: ${notifications}`);

// Array Destructuring
const rgbColors = [255, 128, 0];
const [red, green, blue] = rgbColors;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);


// 3. Spread Operator (...) - Unpacking
const frontendTech = ["React", "Next.js", "Tailwind"];
const backendTech = ["Node.js", "Express", "MongoDB"];

// Combining arrays using spread
const fullStackMastery = [...frontendTech, "TypeScript", ...backendTech];
console.log("Full-Stack Stack:", fullStackMastery);

// Cloning and updating objects immutably using spread
const originalUser = { name: "Yasir", level: 2 };
const upgradedUser = { ...originalUser, level: 3, agency: "CraftODev" };
console.log("Upgraded User Object:", upgradedUser);


// 4. Rest Parameter (...) - Bundling remaining arguments
function summarizeProject(projectName, ...contributors) {
    console.log(`Project: ${projectName}`);
    console.log(`Total Contributors: ${contributors.length}`);
    console.log(`Contributors List:`, contributors);
}

summarizeProject("Solar Water Pump Control Hub", "Yasir", "Ali", "Hamza");