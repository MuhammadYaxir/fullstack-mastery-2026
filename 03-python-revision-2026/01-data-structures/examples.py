# Data Structures (Lists, Dictionaries, Tuples & List Comprehensions)

# What are Python Data Structures?
# Python provides built-in data structures to store, organize, and manipulate collections of data efficiently. Unlike simple variables, these hold multiple items.

# Lists (list): Ordered, mutable (changeable) collections. Can store mixed data types and allows duplicates.

# Dictionaries (dict): Key-value store collections (similar to JSON objects or JavaScript maps). Keys must be unique and immutable.

# Tuples (tuple): Ordered, immutable (unchangeable) collections. Once created, you cannot modify, add, or remove items.

# Sets (set): Unordered collections of unique elements (automatically removes duplicates).

# List Comprehensions: A clean, highly Pythonic syntax to create new lists by looping over iterables in a single line of code.

# 📂 Hands-on Code Example: examples.py


# ==========================================
# TOPIC: Python Data Structures
# ==========================================

print("=== 1. Lists (Mutable & Ordered Collections) ===")
tech_stack = ["Python", "JavaScript", "TypeScript", "React"]
print(f"Original Stack: {tech_stack}")

# Adding and removing items
tech_stack.append("Node.js")       # Adds to the end
tech_stack.insert(1, "Next.js")    # Inserts at index 1
removed_item = tech_stack.pop()    # Removes and returns the last item
print(f"Updated Stack: {tech_stack}")
print(f"Removed Item: {removed_item}")
print(f"First two techs (Slicing): {tech_stack[0:2]}")


print("\n=== 2. Dictionaries (Key-Value Pairs) ===")
project_meta = {
    "project_name": "Solar Water Pump Monitor",
    "client": "AgriTech Solutions",
    "budget": 5000,
    "is_active": True
}

# Accessing and modifying values
print(f"Project Name: {project_meta['project_name']}")
project_meta["budget"] = 5500  # Updating a value
project_meta["tech_used"] = "Python & FastAPI"  # Adding a new key-value pair

# Iterating through a dictionary
for key, value in project_meta.items():
    print(f"  -> {key}: {value}")


print("\n=== 3. Tuples (Immutable Collections) ===")
# Coordinates or fixed configuration data that should never change
server_coordinates = (33.6844, 73.0479)
print(f"Server Latitude: {server_coordinates[0]}")
# server_coordinates[0] = 35.0000  # Error! Tuples do not support item assignment.


print("\n=== 4. Sets (Unique Collections) ===")
active_tags = {"backend", "ai", "automation", "backend", "python"}
print(f"Unique Tags (Duplicates removed): {active_tags}")


print("\n=== 5. List Comprehensions (Pythonic Magic) ===")
# Traditional loop to get numbers squared
numbers = [1, 2, 3, 4, 5]
squared_traditional = []
for n in numbers:
    squared_traditional.append(n ** 2)

# List comprehension equivalent (Clean, fast, and compact)
squared_comprehension = [n ** 2 for n in numbers if n % 2 != 0] # Squares only odd numbers
print(f"Squared Odd Numbers: {squared_comprehension}")