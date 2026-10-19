// Utility Types (Partial, Required, Readonly, Pick, Omit)

// What are TypeScript Utility Types?

// Utility Types: Built-in helper types provided by TypeScript that let you transform, adapt, and manipulate existing types easily without rewriting code. They promote DRY (Don't Repeat Yourself) principles.

// Partial<T>: Makes all properties of a type optional (useful for update/patch requests).

// Required<T>: Makes all optional properties of a type mandatory/required.

// Readonly<T>: Makes all properties immutable (cannot be reassigned after creation).

// Pick<T, K>: Creates a new type by picking a specific set of properties (K) from type T.

// Omit<T, K>: Creates a new type by dropping or removing specific properties (K) from type T.




// ==========================================
// TOPIC: TypeScript Utility Types
// ==========================================

// Base Interface for a Client/User
interface ClientUser {
    id: number;
    name: string;
    email: string;
    phone?: string; // Optional property
}

// 1. Partial<T> - Makes all properties optional
// Useful when sending an update payload where a client might only update their email or name.
type UpdateClientDTO = Partial<ClientUser>;

const clientUpdates: UpdateClientDTO = {
    email: "yasir.updated@craftodev.com" // Only updating email, others are safely optional
};

console.log("Partial Update Payload:", clientUpdates);


// 2. Readonly<T> - Makes all properties immutable
type LockedClient = Readonly<ClientUser>;

const secureClient: LockedClient = {
    id: 101,
    name: "Muhammad Yasir",
    email: "yasir@craftodev.com"
};

// secureClient.email = "new@email.com"; // Error: Cannot assign to 'email' because it is a read-only property.
console.log(`Secured Client Name: ${secureClient.name}`);


// 3. Pick<T, K> - Selects only specific properties from a type
// Suppose we only want user contact info (name and email), stripping out the id and phone:
type ClientContactInfo = Pick<ClientUser, "name" | "email">;

const contactCard: ClientContactInfo = {
    name: "Muhammad Yasir",
    email: "yasir@craftodev.com"
    // id: 101 // Error: Object literal may only specify known properties...
};

console.log(`Contact Card - Name: ${contactCard.name}, Email: ${contactCard.email}`);


// 4. Omit<T, K> - Removes specific properties from a type
// Suppose we want all user details EXCEPT the 'id' when creating a new record in the database:
type NewClientInput = Omit<ClientUser, "id">;

const registrationData: NewClientInput = {
    name: "Ali Khan",
    email: "ali@agency.com",
    phone: "+923001234567"
    // id is successfully omitted!
};

console.log(`New Registration Email: ${registrationData.email}`);