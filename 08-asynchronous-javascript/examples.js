// Asynchronous JavaScript (Promises & Async/Await)

// What is Asynchronous JavaScript?

// Synchronous vs. Asynchronous: Synchronous code executes line-by-line, blocking further execution until the current line finishes. Asynchronous code allows long-running operations (like fetching data from a database or API) to run in the background without freezing the main thread.

// Callback Hell: The anti-pattern of nesting multiple callbacks inside one another to handle sequential asynchronous tasks, making code unreadable and hard to maintain.

// Promise: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise is in one of three states: Pending, Fulfilled, or Rejected.

// Async / Await: Syntactic sugar built on top of Promises. The async keyword makes a function return a promise, and await pauses the execution of the async function until the promise resolves, allowing asynchronous code to look and read like synchronous code.



// ==========================================
// TOPIC: Asynchronous JavaScript (Promises & Async/Await)
// ==========================================

// 1. Simulating Asynchronous Code with setTimeout (Callbacks)
console.log("1. Requesting user data...");

setTimeout(() => {
    console.log("2. User data received from server (via callback).");
}, 1500);

console.log("3. Doing other tasks while waiting...");


// 2. Creating a Custom Promise
function fetchUserDataFromDB(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data from database...");
        
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Muhammad Yasir", role: "Full-Stack Developer" });
            } else {
                reject(new Error("User not found in database!"));
            }
        }, 2000);
    });
}

// Consuming a Promise using .then() and .catch()
fetchUserDataFromDB(1)
    .then(user => {
        console.log("Promise Resolved Successfully:", user);
    })
    .catch(error => {
        console.error("Promise Rejected:", error.message);
    });


// 3. Modern Approach: Async / Await with Try/Catch
async function displayDashboardData() {
    try {
        console.log("--- Starting Async/Await Execution ---");
        
        // Await pauses execution until the promise resolves
        const user = await fetchUserDataFromDB(1);
        console.log(`Welcome back, ${user.name} (${user.role})!`);
        
        // Simulating a second dependent fetch
        console.log("Fetching user projects...");
        const projectsCount = await Promise.resolve(5); // Simulated fast promise
        console.log(`User has ${projectsCount} active projects.`);

    } catch (error) {
        console.error("Error caught in async function:", error.message);
    } finally {
        console.log("--- Async Execution Finished ---");
    }
}

displayDashboardData();