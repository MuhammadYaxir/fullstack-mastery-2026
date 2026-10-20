# Control Flow & Functions (Conditionals, Loops & Lambda Functions)

# What are Control Flow and Functions in Python?

# Control Flow: The mechanisms (if, elif, else, for, while) that dictate the order in which code executes based on conditions and iterations.

# Functions (def): Reusable blocks of code that accept parameters and return outputs. Python supports default arguments, keyword arguments, and arbitrary argument lists (*args, **kwargs).

# Lambda Functions (lambda): Small, anonymous (unnamed) inline functions defined with a single expression.

# 📂 Hands-on Code Example: examples.py



# ==========================================
# TOPIC: Control Flow, Functions & Lambdas
# ==========================================

print("=== 1. Conditional Branching (if / elif / else) ===")
project_status = "in-progress"

if project_status == "completed":
    print("Project has been successfully delivered.")
elif project_status == "in-progress":
    print("Project is currently under development.")
else:
    print("Project is pending approval.")


print("\n=== 2. Loops (for & while with enumerate) ===")
# Iterating through a list with index using `enumerate`
deployment_servers = ["Node-Server-01", "Python-Worker-02", "Database-Node"]

for index, server in enumerate(deployment_servers, start=1):
    print(f"Deploying to server #{index}: {server}")

# While loop example
retry_count = 0
while retry_count < 3:
    retry_count += 1
    print(f"  -> Connection attempt {retry_count}...")


print("\n=== 3. Functions with Default & Keyword Arguments ===")
def calculate_invoice(base_price: float, tax_rate: float = 0.05, discount: float = 0.0) -> float:
    """Calculates total invoice price with default tax and optional discount."""
    subtotal = base_price - discount
    total = subtotal + (subtotal * tax_rate)
    return total

# Calling with positional and keyword arguments
invoice_total = calculate_invoice(1000.0, tax_rate=0.1, discount=50.0)
print(f"Calculated Invoice Total: ${invoice_total}")


print("\n=== 4. Advanced Arguments (*args and **kwargs) ===")
# *args collects extra positional arguments into a tuple
# **kwargs collects extra keyword arguments into a dictionary
def log_system_metrics(service_name, *args, **kwargs):
    print(f"Service: {service_name}")
    print(f"Active Tags: {args}")
    print(f"Extra Metadata: {kwargs}")

log_system_metrics("SolarPumpAPI", "v1.2", "production", region="ap-south-1", secure=True)


print("\n=== 5. Lambda Functions (Anonymous Inline Functions) ===")
# A small function that multiplies a number by 2
double_value = lambda x: x * 2
print(f"Double of 25: {double_value(25)}")

# Using lambda inside Python's built-in `sorted()` function
developers = [
    {"name": "Yasir", "score": 95},
    {"name": "Ali", "score": 88},
    {"name": "Zain", "score": 92}
]

# Sort developers by their score in descending order
sorted_devs = sorted(developers, key=lambda dev: dev["score"], reverse=True)
print("Developers sorted by score:", sorted_devs)