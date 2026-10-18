// Object-Oriented JavaScript (Prototypes & Classes)

// What is Object-Oriented Programming (OOP) in JavaScript?

// Prototypal Inheritance: Unlike class-based languages like Java or C++, JavaScript uses prototypes under the hood. Every object in JavaScript has an internal link to another object called its prototype, allowing it to inherit properties and methods.

// Classes (class): Introduced in ES6, JavaScript classes are not a new object-oriented model; they are syntactic sugar over JavaScript's existing prototype-based inheritance, making code cleaner and easier to write.

// Constructor: A special method inside a class used for creating and initializing an object instance of that class.

// Inheritance (extends & super): Allows a child class to inherit properties and methods from a parent class, reducing code duplication.




// ==========================================
// TOPIC: Object-Oriented JavaScript (Classes & Inheritance)
// ==========================================

// 1. Defining a Base Class
class Developer {
    // Constructor initializes properties when a new instance is created
    constructor(name, mainLanguage) {
        this.name = name;
        this.mainLanguage = mainLanguage;
    }

    // Method shared across instances (attached to prototype)
    code() {
        return `${this.name} is writing clean code in ${this.mainLanguage}.`;
    }

    introduce() {
        return `Hi, my name is ${this.name} and my primary tech is ${this.mainLanguage}.`;
    }
}

// Creating an instance of Developer
const dev1 = new Developer("Muhammad Yasir", "JavaScript");
console.log(dev1.introduce());
console.log(dev1.code());


// 2. Inheritance using `extends` and `super`
class FullStackDeveloper extends Developer {
    constructor(name, mainLanguage, agencyName) {
        // `super` calls the constructor of the parent class (Developer)
        super(name, mainLanguage);
        this.agencyName = agencyName;
    }

    // Overriding a parent method or adding new methods
    manageAgency() {
        return `${this.name} manages operations at ${this.agencyName}.`;
    }

    // Polymorphism: Customizing the parent introduce method
    introduce() {
        return `${super.introduce()} I run ${this.agencyName}.`;
    }
}

// Creating an instance of FullStackDeveloper
const fullStackDev = new FullStackDeveloper("Muhammad Yasir", "TypeScript", "CraftODev");

console.log(fullStackDev.introduce());
console.log(fullStackDev.code());
console.log(fullStackDev.manageAgency());


// 3. Understanding Prototypal Inheritance under the hood
// Every object has a prototype chain. Let's inspect it:
console.log("Is fullStackDev an instance of FullStackDeveloper?", fullStackDev instanceof FullStackDeveloper); // true
console.log("Is fullStackDev an instance of Developer?", fullStackDev instanceof Developer); // true