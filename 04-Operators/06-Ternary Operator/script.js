/*
🌟 Ternary Operator in JavaScript 🌟

The **ternary operator** is a shortcut for `if...else`.

👉 It checks a condition and decides what to do:
   - If the condition is **true**, do one thing.
   - If the condition is **false**, do something else.

*/

/*
🌟 Syntax 🌟

👉 condition ? do_this_if_true : do_this_if_false;

- **condition**: A test that gives true or false.
- **?**: Means "if the condition is true."
- **:**: Means "if the condition is false."

*/

/*
🌟 Example 1: Check Age 🌟

👉 Regular if...else:
   let age = 20;

   if (age >= 18) {
     console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }
*/

// 👉 Ternary version:
let age = 20;
console.log(age >= 18 ? "You are an adult." : "You are a minor.");
/*
📝 Output:
- If age = 20: "You are an adult."
- If age = 15: "You are a minor."
*/

/*
🌟 Example 2: Even or Odd 🌟

👉 Regular if...else:
   let num = 7;

   if (num % 2 === 0) {
     console.log("Even number.");
   } else {
     console.log("Odd number.");
   }
*/

// 👉 Ternary version:
let num = 7;
console.log(num % 2 === 0 ? "Even number." : "Odd number.");
/*
📝 Output:
- If num = 4: "Even number."
- If num = 7: "Odd number."
*/

/*
🌟 Example 3: Positive or Negative Number 🌟

👉 Regular if...else:
   let number = -5;

   if (number >= 0) {
     console.log("Positive number.");
   } else {
     console.log("Negative number.");
   }
*/

// 👉 Ternary version:
let number = -5;
console.log(number >= 0 ? "Positive number." : "Negative number.");
/*
📝 Output:
- If number = 10: "Positive number."
- If number = -5: "Negative number."
*/

/*
🌟 Summary 🌟

The ternary operator is simple and fast:
👉 condition ? do_this_if_true : do_this_if_false;

🧠 Use it for small checks to save time and keep your code clean!
*/
