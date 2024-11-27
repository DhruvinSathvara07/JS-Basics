/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
       ===> 🌈 **Comparison Operators in JavaScript** 🌈 <===
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  Comparison operators in JavaScript are used to compare two values or expressions.
  These operators return either `true` or `false`. They help you make decisions in your code! 🧠✨

  🚀 **Why do we need comparison operators?**
  Comparison operators help you decide whether something is true or false. For example, if one number is greater than another, the result will be `true`!

  💡 **Tip**: You'll use comparison operators often in `if` statements, loops, and more!

*/

/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
             🔍 **Types of Comparison Operators**
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  Here's a list of comparison operators you'll use in JavaScript:

  | **Operator**   | **What it does**                               | **Example**                           |
  |----------------|-----------------------------------------------|---------------------------------------|
  | **==**         | Equal to (checks only the value)              | `5 == 5` → `true` 🟢                    |
  | **!=**         | Not equal to (checks only the value)          | `5 != 3` → `true` ❗                    |
  | **>**          | Greater than                                  | `10 > 5` → `true` 🔝                   |
  | **<**          | Less than                                     | `3 < 5` → `true` 🔽                   |
  | **>=**         | Greater than or equal to                      | `5 >= 5` → `true` 🔝                   |
  | **<=**         | Less than or equal to                         | `2 <= 5` → `true` 🔽                  |

  ➡️ **Important Note**: 
  - The `==` operator compares only the value (not the type). It checks if the two values are the same.
  - We are focusing on `==`, `!=`, `>`, `<`, `>=`, and `<=` for this tutorial. 🚀

*/

/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
             🌈 **Examples of Comparison Operators**
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  Let’s look at some examples to understand how comparison operators work in real code! 🎯

*/

// Example 1: Equal to (==) - Check if values are the same
let num1 = 10;
let num2 = 10;
document.write("Equal to (==): num1 == num2 → ", num1 == num2, " 🟢 <br>");
console.log("Equal to (==): num1 == num2", num1 == num2); // Outputs true

// Example 2: Not equal to (!=) - Check if values are not the same
num1 = 10;
num2 = 5;
document.write("Not equal to (!=): num1 != num2 → ", num1 != num2, " ❗ <br>");
console.log("Not equal to (!=): num1 != num2", num1 != num2); // Outputs true

// Example 3: Greater than (>) - Check if the first number is bigger
num1 = 20;
num2 = 10;
document.write("Greater than (>): num1 > num2 → ", num1 > num2, " 🔝 <br>");
console.log("Greater than (>): num1 > num2", num1 > num2); // Outputs true

// Example 4: Less than (<) - Check if the first number is smaller
num1 = 3;
num2 = 7;
document.write("Less than (<): num1 < num2 → ", num1 < num2, " 🔽 <br>");
console.log("Less than (<): num1 < num2", num1 < num2); // Outputs true

// Example 5: Greater than or equal to (>=) - Check if the first number is bigger or equal
num1 = 10;
num2 = 10;
document.write("Greater than or equal to (>=): num1 >= num2 → ", num1 >= num2, " 🔝 <br>");
console.log("Greater than or equal to (>=): num1 >= num2", num1 >= num2); // Outputs true

// Example 6: Less than or equal to (<=) - Check if the first number is smaller or equal
num1 = 5;
num2 = 10;
document.write("Less than or equal to (<=): num1 <= num2 → ", num1 <= num2, " 🔽 <br>");
console.log("Less than or equal to (<=): num1 <= num2", num1 <= num2); // Outputs true


/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
             📜 **Key Rules to Remember**
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  1️⃣ **Always compare values!**: 
     - `==` checks if the values are the same, not the type. For example, `"5" == 5` is true because it only compares the values.
  
  2️⃣ **Result is true or false**: 
     Comparison operators always give you either `true` or `false`. It’s like asking "Is this statement true or false?"

  3️⃣ **Order matters!**: 
     If you have two numbers, one larger than the other, use `>` (greater than) or `<` (less than) to compare them.

  4️⃣ **Use comparison operators in conditionals**: 
     Comparison operators are often used in `if` statements, loops, and more. They help you control the flow of your code! 💻🚀
*/

/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
             🎉 **Special Cases to Explore** 🎉
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  - **Comparing different types**: 
    - What happens if you compare a number with a string? JavaScript tries to convert the string into a number (if possible).
    - For example: `"5" == 5` will return `true`.

  - **Comparing objects**: 
    - When comparing objects, JavaScript will always return `false`, even if the objects look the same. Objects are compared by reference, not by value.

*/

// Case 1: Comparing different types (string and number)
num1 = 5;
num2 = "5";  // string "5" vs number 5
document.write("Comparing Different Types: num1 == num2 → ", num1 == num2, " 🟢 <br>");
console.log("Comparing Different Types: num1 == num2", num1 == num2); // Outputs true

// Case 2: Comparing objects (objects are not equal even if they look similar)
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
document.write("Comparing Objects: obj1 == obj2 → ", obj1 == obj2, " ❌ <br>");
console.log("Comparing Objects: obj1 == obj2", obj1 == obj2); // Outputs false


/* 
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
               🎊 **End of Documation Post** 🎊
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  🎉 Congratulations! You’ve learned about **Comparison Operators** in JavaScript.
  Use them to make decisions in your code and control your program’s flow! 🎯

  💡 **Keep Learning**: Continue exploring more operators and how they work in different situations. 🌱📚

  💻 Happy Coding! 🚀
*/

