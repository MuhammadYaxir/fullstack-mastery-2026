// Classes & Access Modifiers (public, private, protected)

// What are Access Modifiers in TypeScript Classes?

// Public (public): The default modifier. Properties and methods can be accessed from anywhere (inside the class, by subclasses, and outside the class by instances).

// Private (private): Restricts access so that properties or methods can only be accessed from inside the exact class they were declared in. Not even child classes can see them.

// Protected (protected): Similar to private, but allows access from inside the class and by any child classes that inherit from it.

// // Parameter Properties: A handy TypeScript shortcut that lets you declare and initialize class properties directly inside the constructor parameters, reducing repetitive boilerplate code.


// ==========================================
// TOPIC: Classes & Access Modifiers
// ==========================================

// 1. Using Access Modifiers and Parameter Properties
class AgencyProject {
    // Parameter properties: declaring public/private directly inside constructor parameters
    constructor(
        public projectName: string,
        protected clientName: string,
        private projectBudget: number
    ) {}

    // Public method accessible by anyone
    getPublicSummary(): string {
        return `Project: ${this.projectName} | Client: ${this.clientName}`;
    }

    // Protected or private methods can handle internal logic
    protected calculateTax(): number {
        return this.projectBudget * 0.1; // 10% tax calculation
    }
}

const webProject = new AgencyProject("Solar Water Pump Hub", "AgriTech Corp", 5000);
console.log(webProject.getPublicSummary());
// console.log(webProject.projectBudget); // Error: Property 'projectBudget' is private and only accessible within class 'AgencyProject'.


// 2. Inheritance and Protected Access
class EnterpriseProject extends AgencyProject {
    constructor(projectName: string, clientName: string, projectBudget: number, public tier: string) {
        super(projectName, clientName, projectBudget);
    }

    getFinancialOverview(): string {
        // We can access `clientName` because it is `protected`
        // But we CANNOT access `projectBudget` because it is `private`
        const estimatedTax = this.calculateTax(); // Allowed because it's protected
        return `Enterprise Project for ${this.clientName} [Tier: ${this.tier}]. Estimated Tax: $${estimatedTax}`;
    }
}

const enterpriseApp = new EnterpriseProject("Next.js E-Commerce Platform", "Global Retail", 12000, "Tier-1");
console.log(enterpriseApp.getFinancialOverview());


// 3. Getters and Setters (Controlled access to private data)
class SecureVault {
    constructor(private _apiKey: string) {}

    // Getter function to read the private property safely
    get apiKey(): string {
        // You could add security or masking checks here
        return `KEY-***-${this._apiKey.slice(-4)}`;
    }

    // Setter function to update the private property with validation
    set apiKey(newKey: string) {
        if (newKey.length < 10) {
            console.log("Error: API Key is too short to be valid!");
            return;
        }
        this._apiKey = newKey;
        console.log("API Key successfully updated.");
    }
}

const vault = new SecureVault("SECRET-LIVE-KEY-1234");
console.log(vault.apiKey); // Accessing via getter (looks like a property, runs code)

vault.apiKey = "short"; // Triggers validation error
vault.apiKey = "NEW-SECRET-LIVE-KEY-9999"; // Successfully updates