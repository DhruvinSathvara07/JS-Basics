/* 
  🌟===================================================🌟
       ===> ✨ **Assignment Operators in JavaScript** ✨ <===
  🌟===================================================🌟

  Assignment operators let you update variables quickly and efficiently! 🛠️
  They are shortcuts for combining calculations and assignments in a single step.

  💡 **Pro Tip**: Mastering these operators makes your code cleaner and faster! 🚀
*/

/* 
  🌟===============================================🌟
             🎯 **List of Assignment Operators**
  🌟===============================================🌟

  Here's a summary of the most common assignment operators:

  | **Operator** | **What it does**                   | **Example**                   |
  |--------------|------------------------------------|-------------------------------|
  | =            | Assigns a value                   | `x = 10` 🟢                   |
  | +=           | Adds and assigns                  | `x += 5` → `x = x + 5` ➕      |
  | -=           | Subtracts and assigns             | `x -= 3` → `x = x - 3` ➖      |
  | *=           | Multiplies and assigns            | `x *= 2` → `x = x * 2` ✖️      |
  | /=           | Divides and assigns               | `x /= 4` → `x = x / 4` ➗      |
  | %=           | Modulus and assigns (remainder)   | `x %= 3` → `x = x % 3` ➘      |
  | **=          | Exponentiation and assigns        | `x **= 2` → `x = x ** 2` 💥    |

  ➡️ **Tip**: These operators work only with numbers. 🔢
*/

/* 
  🌟===============================================🌟
          🌈 **Examples of Assignment Operators**
  🌟===============================================🌟

  Let's see how these operators work in action! 🔥
*/

// 📝  Example 1: Basic Assignment (=)
let x = 10;  // Initial value of x
let y = 20;  // Initial value of y
x = y; // Assign the value of y to x
document.write("Basic Assignment: x = ", x, " (y = 20) 🟢 <br>"); // Display in browser
console.log("Basic Assignment: x =", x); // Output in console

// 📝   Example 2: Add and Assign (+=)
x = 10;  // Reset x to 10
y = 5;   // Reset y to 5
x += y;  // Adds y to x → x = x + y
document.write("Add and Assign: x += y → ", x, " ➕ (y = 5) <br>"); // Display in browser
console.log("Add and Assign: x =", x); // Output in console

// 📝   Example 3: Subtract and Assign (-=)
x = 20;  // Reset x to 20
y = 3;   // Reset y to 3
x -= y;  // Subtracts y from x → x = x - y
document.write("Subtract and Assign: x -= y → ", x, " ➖ (y = 3) <br>"); // Display in browser
console.log("Subtract and Assign: x =", x); // Output in console

// 📝   Example 4: Multiply and Assign (*=)
x = 5;   // Reset x to 5
y = 4;   // Reset y to 4
x *= y;  // Multiplies x by y → x = x * y
document.write("Multiply and Assign: x *= y → ", x, " ✖️ (y = 4) <br>"); // Display in browser
console.log("Multiply and Assign: x =", x); // Output in console

// 📝   Example 5: Divide and Assign (/=)
x = 40;  // Reset x to 40
y = 4;   // Reset y to 4
x /= y;  // Divides x by y → x = x / y
document.write("Divide and Assign: x /= y → ", x, " ➗ (y = 4) <br>"); // Display in browser
console.log("Divide and Assign: x =", x); // Output in console

// 📝   Example 6: Modulus and Assign (%=)
x = 17;  // Reset x to 17
y = 5;   // Reset y to 5
x %= y;  // Finds the remainder when x is divided by y → x = x % y
document.write("Modulus and Assign: x %= y → ", x, " ➘ (y = 5) <br>"); // Display in browser
console.log("Modulus and Assign: x =", x); // Output in console

// 📝   Example 7: Exponentiation and Assign (**=)
x = 3;   // Reset x to 3
y = 2;   // Reset y to 2
x **= y; // Raises x to the power of y → x = x ** y
document.write("Exponentiation and Assign: x **= y → ", x, " 💥 (y = 2) <br>"); // Display in browser
console.log("Exponentiation and Assign: x =", x); // Output in console

/* 
  🌟===============================================🌟
             📜 **Key Rules to Remember**
  🌟===============================================🌟

  1️⃣ **Use with numbers**: Assignment operators work best with numbers. 🔢
  2️⃣ **Order of Operations**: These follow the PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) rule. ⏱️
  3️⃣ **Type Matters**: Be mindful of data types (e.g., `+=` can concatenate strings! 🧶).
  4️⃣ **Test in Console**: Always experiment with examples to solidify your understanding! 🧑‍💻
*/

/* 
  🌟===============================================🌟
           🎉 **Special Cases to Explore** 🎉
  🌟===============================================🌟
*/

// Case 1: Adding strings and numbers
let result = "5" + 3; // Concatenates → Output: "53"
document.write("Adding Strings and Numbers: ", result, " 📚 <br>"); // Display in browser
console.log("Adding Strings and Numbers:", result); // Output in console

// Case 2: Division by zero
let divideByZero = 10 / 0; // Output: Infinity
document.write("Division by Zero: ", divideByZero, " ♾️ <br>"); // Display in browser
console.log("Division by Zero:", divideByZero); // Output in console

// Case 3: Mixing data types
let mixedType = "5" * 2; // JavaScript converts "5" to a number → Output: 10
document.write("Mixed Data Types: ", mixedType, " 🔄 <br>"); // Display in browser
console.log("Mixed Data Types:", mixedType); // Output in console

/* 
  🌟===============================================🌟
               🎊 **End of Documentation** 🎊
  🌟===============================================🌟

  🚀 You've now mastered assignment operators in JavaScript! 🌟
  Keep practicing to become a coding superstar. 💻
  Happy coding! 👨‍💻👩‍💻
*/
