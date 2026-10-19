"use strict";
// keyof Operator & Mapped Types
Object.defineProperty(exports, "__esModule", { value: true });
function getAgencyConfigProperty(config, key) {
    return config[key];
}
const myAgencyConfig = {
    siteName: "CraftODev Agency",
    activeClients: 12,
    isMaintenanceMode: false
};
const currentSiteName = getAgencyConfigProperty(myAgencyConfig, "siteName");
console.log(`Fetched Config Property: ${currentSiteName}`);
// 2. Type-Safe Property Getter Helper (Using `keyof` with Generics)
function getPropertyValue(obj, key) {
    return obj[key];
}
const clientScore = getPropertyValue(myAgencyConfig, "activeClients");
console.log(`Client Score (Type-safe lookup): ${clientScore}`);
const configValidationStatus = {
    siteName: true,
    activeClients: true,
    isMaintenanceMode: false
};
console.log("Config Validation Status for siteName:", configValidationStatus.siteName);
const lockedConfig = {
    siteName: "CraftODev Secure",
    activeClients: 15,
    isMaintenanceMode: true
};
// lockedConfig.siteName = "New Name"; // Error: Cannot assign to 'siteName' because it is a read-only property.
console.log(`Locked Site Name: ${lockedConfig.siteName}`);
//# sourceMappingURL=examples.js.map