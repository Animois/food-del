Readme file:
# Naming Conventions
Naming conventions are important to improve code readability, consistency, and maintainability. Below are common naming styles used in various programming languages:
## camelCase
- **Definition**: First letter of the identifier is lowercase, and each subsequent word starts with an uppercase letter.
- **Example**: `firstName`
- **Used In**: JavaScript, Java, C#
## PascalCase
- **Definition**: Similar to camelCase, but the first letter is also uppercase.
- **Example**: `BankAccount`
- **Used In**: C#, Java (especially for class names)
## snake_case
- **Definition**: Words are in lowercase and separated by underscores.
- **Example**: `user_name`
- **Used In**: Python, SQL
## UPPER_SNAKE_CASE
- **Definition**: All uppercase letters with words separated by underscores.
- **Example**: `MAX_USERS`
- **Used In**: Python, C, C++ (typically for constants)
## kebab-case
- **Definition**: All lowercase letters with words separated by hyphens.
- **Example**: `user-profile`
- **Used In**: CSS, URLs
## Hungarian Notation
- **Definition**: Prefixing variables with a type or purpose.
- **Example**: `iAge`, `fPrice`
- **Used In**: C++, older programming styles
## SCREAMING_SNAKE_CASE
- **Definition**: Similar to UPPER_SNAKE_CASE, often used for constants.
- **Example**: `MAX_LOGIN_ATTEMPTS`
- **Used In**: Java, Python
## Summary Table
| Naming Style           | Example             | Usage in Languages                 |
|------------------------|---------------------|------------------------------------|
| camelCase              | `firstName`         | JavaScript, Java, C#               |
| PascalCase             | `BankAccount`       | C#, Java (class names)             |
| snake_case             | `user_name`         | Python, SQL                        |
| UPPER_SNAKE_CASE       | `MAX_USERS`         | Python, C, C++ (constants)         |
| kebab-case             | `user-profile`      | CSS, URLs                          |
| Hungarian Notation     | `iAge`, `fPrice`    | C++, older programming             |
| SCREAMING_SNAKE_CASE   | `MAX_LOGIN_ATTEMPTS`| Java, Python                       |

User_info,c file:
#include <stdio.h>
#define MAX_USERS 100  // UPPER_SNAKE_CASE constant
void print_user_info(char user_name[], int user_age) { // snake_case
    printf("User Name: %s\n", user_name);
    printf("User Age: %d\n", user_age);
}
int main() {
    char user_name[] = "John Cena";
    int user_age = 46;
    print_user_info(user_name, user_age);
    return 0;
}

UserInfo.cpp file:
#include <iostream>
using namespace std;
class UserInfo { // PascalCase for class
public:
    string firstName;
    int age;
    void displayInfo() { // camelCase for method
        cout << "First Name: " << firstName << endl;
        cout << "Age: " << age << endl;
    }
};
int main() {
    UserInfo user;  // PascalCase class object
    user.firstName = "Cristiano";
    user.age = 49;
    user.displayInfo();
    return 0;
}

Code Documentation:
## Part 2.2: Code Documentation
### Language 1: C
- Used `snake_case` for variable and function names (e.g., `user_name`, `print_user_info`).
- Used `UPPER_SNAKE_CASE` (also known as `SCREAMING_SNAKE_CASE`) for constants (e.g., `MAX_USERS`).
- These naming conventions are common in C and make it easy to distinguish between variables and constants.
### Language 2: C++
- Used `camelCase` for function and variable names (e.g., `firstName`, `displayInfo`).
- Used `PascalCase` for class names (e.g., `UserInfo`), which is standard in C++ and Java.
- This style improves readability and follows object-oriented programming conventions.
### Why Use Naming Conventions?
- Makes the code more readable and understandable.
- Helps developers quickly identify the purpose of variables, constants, functions, or classes.
- Makes it easier to collaborate and maintain the code in the future.
