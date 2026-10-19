// keyof Operator & Mapped Types

// What are the keyof Operator and Mapped Types?

// The keyof Operator: Takes an object type and produces a union string (or numeric) literal of all its keys. It bridges the gap between JavaScript values and TypeScript types.

// Mapped Types: A powerful feature that allows you to build new types by iterating over the keys of an existing type (using in keyof T), enabling you to transform property modifiers (like making everything optional, readonly, or wrapping types in wrappers like Promise or custom objects).




// ==========================================
// TOPIC: keyof Operator & Mapped Types
// ==========================================

// 1. The `keyof` Operator
interface AgencyConfig {
    siteName: string;
    activeClients: number;
    isMaintenanceMode: boolean;
}

// `AgencyKeys` evaluates to the union type: "siteName" | "activeClients" | "isMaintenanceMode"
type AgencyKeys = keyof AgencyConfig;

function getAgencyConfigProperty(config: AgencyConfig, key: AgencyKeys) {
    return config[key];
}

const myAgencyConfig: AgencyConfig = {
    siteName: "CraftODev Agency",
    activeClients: 12,
    isMaintenanceMode: false
};

const currentSiteName = getAgencyConfigProperty(myAgencyConfig, "siteName");
console.log(`Fetched Config Property: ${currentSiteName}`);


// 2. Type-Safe Property Getter Helper (Using `keyof` with Generics)
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const clientScore = getPropertyValue(myAgencyConfig, "activeClients");
console.log(`Client Score (Type-safe lookup): ${clientScore}`);


// 3. Mapped Types (Transforming existing types dynamically)
// Suppose we want to create a version of AgencyConfig where all properties are boolean flags indicating if they have been updated/validated:
type ValidationFlags<T> = {
    // Iterate over every key `K` in `T`, and set its value type to `boolean`
    [K in keyof T]: boolean;
};

const configValidationStatus: ValidationFlags<AgencyConfig> = {
    siteName: true,
    activeClients: true,
    isMaintenanceMode: false
};

console.log("Config Validation Status for siteName:", configValidationStatus.siteName);


// 4. Advanced Mapped Types with Modifiers (Adding or Removing Readonly / Optionality)
// Creating a fully Readonly mapped type manually:
type MakeReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

const lockedConfig: MakeReadonly<AgencyConfig> = {
    siteName: "CraftODev Secure",
    activeClients: 15,
    isMaintenanceMode: true
};

// lockedConfig.siteName = "New Name"; // Error: Cannot assign to 'siteName' because it is a read-only property.
console.log(`Locked Site Name: ${lockedConfig.siteName}`);