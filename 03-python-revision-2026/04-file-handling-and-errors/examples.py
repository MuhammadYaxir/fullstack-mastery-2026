# File Handling & Error Management

# What are File Handling and Error Management in Python?

# File Handling: The process of opening, reading, writing, and closing files on disk. Python uses the with statement (context manager) as a best practice because it automatically handles closing the file when operations finish, preventing memory leaks and file locks.

# Error Management (try/except): A mechanism to catch and handle runtime errors gracefully so your application doesn't crash abruptly when something unexpected happens (like a missing file or bad input).

# 📂 Hands-on Code Example: examples.py


# ==========================================
# TOPIC: File Handling & Error Management
# ==========================================

import os

print("=== 1. Writing to a Text File ===")
file_path = "agency_log.txt"

# Using 'with' context manager to safely write to a file
# 'w' mode overwrites the file, 'a' mode appends to it
with open(file_path, "w", encoding="utf-8") as file:
    file.write("System Log initialized: CraftODev Automation Pipeline.\n")
    file.write("Status: All services operational.\n")

print(f"Successfully wrote data to '{file_path}'")


print("\n=== 2. Reading from a Text File ===")
try:
    with open(file_path, "r", encoding="utf-8") as file:
        file_contents = file.read()
        print("--- File Contents Start ---")
        print(file_contents.strip())
        print("--- File Contents End ---")
except FileNotFoundError:
    print(f"Error: The file '{file_path}' was not found.")


print("\n=== 3. Exception Handling (try / except / else / finally) ===")

def divide_numbers(numerator: float, denominator: float):
    try:
        result = numerator / denominator
    except ZeroDivisionError:
        print("Runtime Error: Cannot divide by zero!")
        return None
    except TypeError:
        print("Runtime Error: Invalid data types provided for division.")
        return None
    else:
        # Runs only if no exception occurred
        print(f"Division successful: {numerator} / {denominator} = {result}")
        return result
    finally:
        # Always runs, regardless of success or failure (great for cleanup)
        print("  [Execution finished for this operation]\n")

# Testing the division function
divide_numbers(100, 4)
divide_numbers(50, 0)   # Triggers ZeroDivisionError


print("=== 4. Cleaning Up (Removing Test File) ===")
if os.path.exists(file_path):
    os.remove(file_path)
    print(f"Temporary test file '{file_path}' cleaned up successfully.")