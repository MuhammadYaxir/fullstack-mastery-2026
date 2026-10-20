# Unlike TypeScript, Python is dynamically typed at runtime (you don't explicitly write type annotations like : string or : number by default, though Python does support optional type hints). Python relies heavily on clean indentation instead of curly braces {} and semicolons.

# 1. Variables and Dynamic Typing
# In Python, you declare a variable simply by assigning a value to it using the = operator. Python automatically figures out the data type.

# Python
# # Variable assignments
# agency_name = "CraftODev"  # String
# active_projects = 12       # Integer
# success_rate = 98.5        # Float (decimal)
# is_active = True           # Boolean (Note: Python uses Capital 'T' for True and 'F' for False)
# 2. Fundamental Data Types
# Strings (str): Text enclosed in single (') or double (") quotes.

# Integers (int): Whole numbers.

# Floats (float): Numbers with decimal points.

# Booleans (bool): True or False.

# NoneType (None): Represents the absence of a value (similar to null or undefined in JavaScript/TypeScript).

# 3. String Manipulation & f-Strings
# Python has powerful string formatting using f-strings (formatted string literals), which look very similar to template literals in JavaScript.

# Python
# client_name = "Ali Khan"
# project_budget = 1500

# # f-string formatting
# greeting = f"Client: {client_name} | Budget: ${project_budget * 2}"
# print(greeting)
# 4. Type Casting (Converting Types)
# You can easily convert between types using built-in functions like str(), int(), and float():

# Python
# string_number = "500"
# converted_number = int(string_number)  # Converts string to integer
# total = converted_number + 100         # Result: 600
# 📂 Hands-on Code Example: examples.py
# Create a new folder named 01-python-revision/00-core-syntax/ in your workspace, save the code below into a file named examples.py, and run it using python examples.py in your terminal.


# ==========================================
# TOPIC: Core Syntax, Variables & Basic Data Types
# ==========================================

print("=== 1. Variables & Data Types ===")
developer_handle: str = "Yasir"  # Optional type hint in Python
hourly_rate = 45.00              # float
hours_worked = 160               # int
is_available_for_hire = True     # bool

total_monthly_earnings = hourly_rate * hours_worked
print(f"Developer: {developer_handle}")
print(f"Estimated Monthly Earnings: ${total_monthly_earnings}")


print("\n=== 2. String Methods ===")
agency_tagline = "  craftodev - full-stack & ai automation agency  "
print(f"Original: '{agency_tagline}'")
print(f"Title Case: {agency_tagline.title().strip()}")
print(f"Uppercase: {agency_tagline.upper().strip()}")


print("\n=== 3. Type Conversion (Casting) ===")
string_id = "1098"
numeric_id = int(string_id)
print(f"Converted ID Type: {type(numeric_id)} | Value: {numeric_id + 5}")