# Object-Oriented Programming (OOP) in Python

# What is Object-Oriented Programming in Python?
# OOP is a programming paradigm that uses classes and objects to bundle data and functionality together. This allows you to model real-world entities cleanly and write reusable, modular code.

# Classes (class): The blueprint or template for creating objects.

# The Constructor (__init__): A special initialization method automatically called when a new object instance is created from a class.

# Self (self): A reference to the current instance of the class, used to access instance variables and methods.

# Inheritance: The ability of a child class to inherit properties and methods from a parent class, promoting code reuse.

# Encapsulation: Restricting access to certain attributes and methods using single underscores (_protected) or double underscores (__private) to protect internal object state.

# 📂 Hands-on Code Example: examples.py



# ==========================================
# TOPIC: Object-Oriented Programming (OOP)
# ==========================================

print("=== 1. Defining Classes, Constructors, and Methods ===")

class AgencyService:
    # Constructor method to initialize object attributes
    def __init__(self, service_name: str, base_fee: float):
        self.service_name = service_name
        self.base_fee = base_fee
        self.__is_active = True  # Private attribute (name mangled internally)

    # Instance method
    def get_service_summary(self) -> str:
        status = "Active" if self.__is_active else "Inactive"
        return f"Service: {self.service_name} | Fee: ${self.base_fee} | Status: {status}"

    # Public method to safely toggle private state
    def toggle_status(self):
        self.__is_active = not self.__is_active


# Creating an object instance
web_service = AgencyService("Full-Stack Next.js App", 1200.0)
print(web_service.get_service_summary())

web_service.toggle_status()
print(f"After toggling status: {web_service.get_service_summary()}")


print("\n=== 2. Inheritance & Method Overriding ===")

# Parent/Super class
class Project:
    def __init__(self, title: str, client: str):
        self.title = title
        self.client = client

    def get_details(self) -> str:
        return f"Project: {self.title} for Client: {self.client}"


# Child/Subclass inheriting from Project
class AutomationProject(Project):
    def __init__(self, title: str, client: str, workflow_engine: str):
        # Super() calls the parent class constructor
        super().__init__(title, client)
        self.workflow_engine = workflow_engine

    # Overriding the parent method
    def get_details(self) -> str:
        base_info = super().get_details()
        return f"{base_info} [Automation Engine: {self.workflow_engine}]"


# Creating an automation project instance
n8n_project = AutomationProject("Lead Generation Pipeline", "AgriTech Corp", "n8n & OpenAI API")
print(n8n_project.get_details())


print("\n=== 3. Encapsulation & Properties (Getters / Setters) ===")

class SecureVault:
    def __init__(self, api_key: str):
        self.__api_key = api_key  # Private attribute

    # Property getter decorator
    @property
    def api_key(self) -> str:
        return f"KEY-***-{self.__api_key[-4:]}"

    # Property setter decorator with validation
    @api_key.setter
    def api_key(self, new_key: str):
        if len(new_key) < 8:
            print("Error: API key is too short!")
        else:
            self.__api_key = new_key
            print("API key updated successfully.")


vault = SecureVault("sk-proj-live-123456")
print(vault.api_key)  # Accessed like a property, runs getter code

vault.api_key = "short"  # Triggers error validation
vault.api_key = "sk-proj-live-999999"  # Successfully updates
print(vault.api_key)