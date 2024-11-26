/* 
  🌟===================================================🌟
       ===> 🌈 **Arithmetic Operators in JavaScript** 🌈 <===
  🌟===================================================🌟

  Arithmetic operators are essential for performing mathematical calculations in JavaScript.
  These operators can be applied to numbers and are often used in expressions to calculate results.

  💡 **Tip**: Understanding how arithmetic operators work is crucial for solving everyday problems in coding and logic.
*/

/* 
  🌟===============================================🌟
             🔢 **List of Arithmetic Operators**
  🌟===============================================🌟
  Here's a table summarizing the most common arithmetic operators:

  | **Operator**   | **Description**                          | **Example**                  |
  |----------------|------------------------------------------|------------------------------|
  |       +        | Addition                                 | `5 + 3` → `8`                |
  |       -        | Subtraction                              | `5 - 3` → `2`                |
  |       *        | Multiplication                           | `5 * 3` → `15`               |
  |       /        | Division                                 | `6 / 3` → `2`                |
  |       %        | Modulus(remainder of division)           | `5 % 3` → `2`                |
  |       ++       | Increment(add 1 to the variable)         | `var x = 5; x++` → `6`       |
  |       --       | Decrement(subtract 1 from the variable)  | `var x = 5; x--` → `4`       |
  |       **       | Exponentiation                           | `2 ** 3` → `8`               |

  ➡️ ** Note **: Modulus(%) returns the remainder after division, useful for checking divisibility.
*/

/* 
  🌟===============================================🌟
          💡 **Examples of Arithmetic Operators**
  🌟===============================================🌟

  Here are some examples of how to use the arithmetic operators in JavaScript:
*/

// Helper function to display results
function displayResult(label, result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML += `<p><strong>${label}</strong>: <span style="color: #4CAF50;">${result}</span></p>`;
}

// Example 1: Addition
var sum = 5 + 3;               // 5 + 3 = 8
displayResult("Addition", sum); // Display in browser
console.log("Addition: ", sum); // Output in console

// Example 2: Subtraction
var difference = 5 - 3;        // 5 - 3 = 2
displayResult("Subtraction", difference); // Display in browser
console.log("Subtraction: ", difference); // Output in console

// Example 3: Multiplication
var product = 5 * 3;           // 5 * 3 = 15
displayResult("Multiplication", product); // Display in browser
console.log("Multiplication: ", product); // Output in console

// Example 4: Division
var quotient = 6 / 3;          // 6 / 3 = 2
displayResult("Division", quotient); // Display in browser
console.log("Division: ", quotient); // Output in console

// Example 5: Modulus (remainder)
var remainder = 5 % 3;         // 5 % 3 = 2 (remainder of 5 ÷ 3)
displayResult("Modulus", remainder); // Display in browser
console.log("Modulus: ", remainder); // Output in console

// Example 6: Increment
var increment = 5;
increment++;                    // 5 + 1 = 6
displayResult("Increment", increment); // Display in browser
console.log("Increment: ", increment); // Output in console

// Example 7: Decrement
var decrement = 5;
decrement--;                    // 5 - 1 = 4
displayResult("Decrement", decrement); // Display in browser
console.log("Decrement: ", decrement); // Output in console

// Example 8: Exponentiation
var power = 2 ** 3;             // 2^3 = 8
displayResult("Exponentiation", power); // Display in browser
console.log("Exponentiation: ", power); // Output in console


/* 
  🌟===============================================🌟
             📜 **Rules for Using Arithmetic Operators**
  🌟===============================================🌟

  These are the key rules to keep in mind while using arithmetic operators:

  1️⃣ **Only numbers**: Arithmetic operators work with numbers, not with strings or other data types.
  2️⃣ **Division by zero**: If you divide a number by zero, the result will be `Infinity` or `NaN`.
  3️⃣ **Order of operations**: JavaScript follows standard order of operations (PEMDAS). Use parentheses to control the sequence.
  4️⃣ **Automatic type conversion**: JavaScript automatically converts types when necessary, but be mindful of mixed types.
*/

/* 
  🌟===============================================🌟
              🔎 **Examples of Special Cases**
  🌟===============================================🌟

  - Division by zero:
*/
var divisionByZero = 5 / 0;     // Output: Infinity
displayResult("Division by Zero", divisionByZero); // Display in browser
console.log("Division by Zero: ", divisionByZero); // Output in console

// - String concatenation with addition:
var stringConcatenation = "5" + 3; // Output: "53" (string + number becomes string)
displayResult("String Concatenation", stringConcatenation); // Display in browser
console.log("String Concatenation: ", stringConcatenation); // Output in console

/* 
  🌟===============================================🌟
               🎉 **End of Documentation** 🎉
  🌟===============================================🌟
*/
