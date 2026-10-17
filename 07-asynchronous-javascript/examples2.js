// The Big Problem: JavaScript is Single-Threaded
// By default, JavaScript is single-threaded. This means it can only do one thing at a time, going strictly line by line.

// Imagine you go to a coffee shop, and you order a coffee. If the cashier stood there, froze, and refused to take anyone else's order until your coffee was physically brewed and handed to you, the whole line would get angry. That is synchronous (blocking) code. On the web, if JavaScript had to wait for a server to respond without doing anything else, your entire webpage would freeze!

// Asynchronous code solves this. It allows JavaScript to send a request (like "fetch user data") and keep running other code while it waits for the answer.

// Step 1: The Old Way (Callbacks)
// A callback is simply a function you pass into another function, saying: "Hey, when you're finally done doing your slow job in the background, run this function to let me know."

// The Analogy: You give the barista your name, walk away, and look at your phone. When your name is called, you come back.

// The Problem ("Callback Hell"): If you have 3 or 4 slow tasks that depend on each other (Task 1 -> then Task 2 -> then Task 3), your callbacks end up nested deep inside each other like a staircase, making the code a nightmare to read.

// Step 2: Promises (The Buzzer)
// To fix callback hell, JavaScript introduced Promises. A Promise is an object that represents a task that is happening right now, but will finish in the future.

// Think of it like a restaurant buzzer they hand you when you place an order:

// Pending: You are holding the buzzer. Your coffee is still brewing. (The operation is running).

// Fulfilled (Resolved): The buzzer lights up and buzzes! You get your coffee successfully. (.then())

// Rejected: The barista walks out and says, "Sorry, we ran out of coffee beans." Something went wrong. (.catch())

// Step 3: Async / Await (The Modern Way)
// Writing .then() and .catch() chains can still get long. So JavaScript introduced Async/Await, which is just "syntactic sugar" (cleaner clothing) built on top of Promises.

// It lets you write asynchronous code that looks and reads like normal, top-to-bottom code.

// async: Put this keyword in front of a function to tell JavaScript: "Hey, this function handles waiting tasks."

// await: Put this keyword in front of a promise (like fetching data) to tell JavaScript: "Pause right here until this finishes, but don't worry, the rest of the app can keep running."

// Look at the Difference in Code:
// Using Promises (.then):

fetchUserData(1)
    .then(user => {
        return fetchUserProjects(user.id);
    })
    .then(projects => {
        console.log(projects);
    })
    .catch(error => {
        console.log(error);
    });



    // Using Async / Await (Much cleaner!):

    async function showDashboard() {
    try {
        // Stop here and wait for user data, then move on
        const user = await fetchUserData(1); 
        
        // Stop here and wait for projects, using the user ID we just got
        const projects = await fetchUserProjects(user.id); 
        
        console.log(projects);
    } catch (error) {
        // If anything fails anywhere above, it jumps straight here
        console.log("Something went wrong:", error);
    }
}