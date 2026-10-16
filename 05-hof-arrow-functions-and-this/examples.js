// Higher-Order Functions, Arrow Functions & The this Keyword

// What are HOFs, Arrow Functions, and this?

// Higher-Order Functions (HOFs): Functions that operate on other functions by taking them as arguments, returning them, or both. JavaScript's built-in array methods like map, filter, and reduce are prime examples.

// Arrow Functions (() => {}): A concise syntax introduced in ES6. They feature implicit returns for single-line statements and crucially do not bind their own this keyword (they lexically inherit this from their surrounding execution context).

// The this Keyword: A special reference variable that points to the object executing the current function. Its value is dynamic and depends entirely on how and where the function is invoked.

// Explicit Binding (call, apply, bind): Methods built into JavaScript functions that allow you to explicitly dictate what this should point to.


// ==========================================
// TOPIC: HOFs, Arrow Functions & The `this` Keyword
// ==========================================

// 1. Higher-Order Functions (Built-in Array Methods)
const products = [
    { name: "Laptop", price: 1200, category: "Tech" },
    { name: "Mouse", price: 25, category: "Tech" },
    { name: "Desk", price: 300, category: "Furniture" }
];

// filter: Returns a new array with elements matching the condition
const techProducts = products.filter(item => item.category === "Tech");
console.log("Tech Products:", techProducts);

// map: Transforms each element and returns a new array
const productNames = products.map(item => item.name);
console.log("Product Names:", productNames);

// reduce: Accumulates array elements down to a single value
const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
console.log("Total Inventory Price:", totalPrice);


// 2. Arrow Functions (Concise Syntax & Implicit Return)
// Multi-line arrow function
const calculateDiscount = (price, discountRate) => {
    const finalPrice = price - (price * discountRate);
    return finalPrice;
};

// Single-line arrow function with implicit return
const square = num => num * num;

console.log("Discounted Price:", calculateDiscount(100, 0.2));
console.log("Squared Number:", square(6));


// 3. Deep Dive into the `this` Keyword
const userProfile = {
    username: "Muhammad Yasir",
    role: "Full-Stack Developer",
    
    // Regular method: `this` points to the object calling it (userProfile)
    showDetails: function() {
        console.log(`Regular Method - User: ${this.username}, Role: ${this.role}`);
    },
    
    // Arrow function method: `this` lexically binds to outer scope (undefined/global here)
    showDetailsArrow: () => {
        console.log(`Arrow Method - User: ${this.username}`);
    }
};

userProfile.showDetails();
userProfile.showDetailsArrow(); // `this.username` will be undefined


// 4. Explicit Binding: call(), apply(), and bind()
const employee = {
    name: "Ali",
    role: "Backend Engineer"
};

function introduce(location, experience) {
    console.log(`Hi, I am ${this.name}, a ${this.role} from ${location} with ${experience} years of experience.`);
}

// call(): Invokes the function immediately, passing `this` context and comma-separated arguments
introduce.call(employee, "Pakistan", 5);

// apply(): Invokes the function immediately, passing `this` context and arguments as an array
introduce.apply(employee, ["Pakistan", 5]);

// bind(): Returns a brand new function with `this` permanently locked/bound to the object
const boundIntroduce = introduce.bind(employee, "Pakistan", 5);
boundIntroduce(); // Executed later with bound context