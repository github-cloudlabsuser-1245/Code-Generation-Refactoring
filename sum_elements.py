# A poorly written example of a program in Python. It prompts the user for the number of elements to sum, takes those integers as input, and handles some basic error cases

MAX = 100

class InputError(Exception):
    pass

def calculate_sum(arr):
    result = 0
    for num in arr:
        result += num
    return result

def main():
    try:
        n = int(input("Enter the number of elements (1-100): "))
        if not 1 <= n <= MAX:
            raise InputError("Invalid input. Please provide a digit ranging from 1 to 100.")

        arr = []

        print(f"Enter {n} integers:")
        for _ in range(n):
            try:
                arr.append(int(input()))
            except ValueError:
                raise InputError("Invalid input. Please enter valid integers.")

        total = calculate_sum(arr)
        print("Sum of the numbers:", total)

    except InputError as e:
        print(e)
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
