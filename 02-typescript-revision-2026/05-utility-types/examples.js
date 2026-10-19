"use strict";
// Utility Types (Partial, Required, Readonly, Pick, Omit)
Object.defineProperty(exports, "__esModule", { value: true });
const clientUpdates = {
    email: "yasir.updated@craftodev.com" // Only updating email, others are safely optional
};
console.log("Partial Update Payload:", clientUpdates);
const secureClient = {
    id: 101,
    name: "Muhammad Yasir",
    email: "yasir@craftodev.com"
};
// secureClient.email = "new@email.com"; // Error: Cannot assign to 'email' because it is a read-only property.
console.log(`Secured Client Name: ${secureClient.name}`);
const contactCard = {
    name: "Muhammad Yasir",
    email: "yasir@craftodev.com"
    // id: 101 // Error: Object literal may only specify known properties...
};
console.log(`Contact Card - Name: ${contactCard.name}, Email: ${contactCard.email}`);
const registrationData = {
    name: "Ali Khan",
    email: "ali@agency.com",
    phone: "+923001234567"
    // id is successfully omitted!
};
console.log(`New Registration Email: ${registrationData.email}`);
//# sourceMappingURL=examples.js.map