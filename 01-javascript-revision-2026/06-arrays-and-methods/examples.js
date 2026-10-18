// Arrays & Array Methods

// What are Arrays and Modern Array Methods?

// Array: A special data structure used to store multiple values in a single variable. Arrays in JavaScript are zero-indexed and dynamic.

// Mutating vs. Non-Mutating Methods:

// Mutating Methods change the original array in place (e.g., push(), pop(), splice(), sort()).

// Non-Mutating Methods leave the original array untouched and return a brand new array (e.g., map(), filter(), concat()).

// map(): Iterates over an array, transforms each element, and returns a brand-new array of the exact same length.

// filter(): Tests each element against a condition and returns a new array containing only the elements that pass.

// reduce(): Executes a reducer function on each element, accumulating the results down into a single final value (number, string, object, etc.).

// Other Essential Array Methods
// What are the other Array Methods?

// Adding / Removing Elements:

// push(): Adds an element to the end of an array (Mutates original).

// pop(): Removes the last element from an array (Mutates original).

// unshift(): Adds an element to the beginning of an array (Mutates original).

// shift(): Removes the first element from an array (Mutates original).

// splice(start, deleteCount, items): Adds or removes elements anywhere in the array (Mutates original).

// slice(start, end): Copies a portion of an array into a brand-new array (Non-mutating).

// Searching & Checking:

// includes(val): Returns true if the array contains a specific value.

// some(): Returns true if at least one element passes the test function.

// every(): Returns true if all elements pass the test function.

// Utility Methods:

// forEach(): Loops through an array to perform side effects (does not return a new array like map).

// sort(): Sorts the elements of an array in place (Mutates original).

// ==========================================
// TOPIC: Arrays & Advanced Array Methods
// ==========================================

const portfolioProjects = [
    { id: 1, title: "CraftODev Agency Website", category: "Full-Stack", active: true, views: 1200 },
    { id: 2, title: "Solar Water Pump Dashboard", category: "IoT", active: true, views: 850 },
    { id: 3, title: "Children's Book KDP Studio", category: "Design", active: false, views: 400 },
    { id: 4, title: "n8n AI Automation Hub", category: "Automation", active: true, views: 2300 }
];


// 1. map() - Transforming data (Non-mutating)
// Extracting just the titles of all projects
const projectTitles = portfolioProjects.map(project => project.title);
console.log("Project Titles:", projectTitles);


// 2. filter() - Selecting specific elements (Non-mutating)
// Finding only the active projects
const activeProjects = portfolioProjects.filter(project => project.active === true);
console.log("Active Projects Count:", activeProjects.length);


// 3. reduce() - Accumulating values (Calculating total views)
const totalViews = portfolioProjects.reduce((accumulator, currentProject) => {
    return accumulator + currentProject.views;
}, 0); // 0 is the initial value of the accumulator

console.log("Total Portfolio Views:", totalViews);


// 4. find() - Locating the first matching element
const specificProject = portfolioProjects.find(project => project.category === "IoT");
console.log("Found Project:", specificProject);


// 5. Chaining Methods Together
// Get the titles of active projects with views greater than 1000
const topActiveTitles = portfolioProjects
    .filter(project => project.active && project.views > 1000)
    .map(project => project.title);

console.log("Top Active Project Titles:", topActiveTitles);





// ==========================================
// TOPIC: Additional Essential Array Methods
// ==========================================

let techStack = ["React", "Node.js", "Express"];

// 1. Adding & Removing Elements (Mutating)
techStack.push("Next.js");      // Adds to end -> ["React", "Node.js", "Express", "Next.js"]
techStack.unshift("TypeScript"); // Adds to start -> ["TypeScript", "React", "Node.js", "Express", "Next.js"]
let removedLast = techStack.pop(); // Removes "Next.js"


// 2. slice() vs splice()
let numbers = [10, 20, 30, 40, 50];

// slice(): Non-mutating (Extracts index 1 to 3, excluding 4)
let slicedPart = numbers.slice(1, 4); 
console.log("Sliced Array:", slicedPart); // [20, 30, 40]
console.log("Original Unchanged:", numbers); // [10, 20, 30, 40, 50]

// splice(): Mutating (Starting at index 2, delete 1 item, insert 99)
numbers.splice(2, 1, 99);
console.log("Spliced Original Modified:", numbers); // [10, 20, 99, 40, 50]


// 3. Searching & Checking
const scores = [45, 60, 80, 95, 30];

// includes()
console.log("Has 80?:", scores.includes(80)); // true

// some(): Does at least one score exceed 90?
const hasHighScore = scores.some(score => score > 90);
console.log("Has a score > 90:", hasHighScore); // true

// every(): Are all scores above 20?
const allPassed = scores.every(score => score > 20);
console.log("Are all scores > 20:", allPassed); // true


// 4. forEach() (Executing side effects without returning a new array)
console.log("--- ForEach Loop ---");
techStack.forEach((tech, index) => {
    console.log(`Index ${index}: ${tech}`);
});