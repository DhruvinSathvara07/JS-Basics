/* 
  🌟===================================================🌟
      ===> 🌈 Three Types of Variables in JavaScript 🌈 <===
  🌟===================================================🌟
*/

/* 
  JavaScript provides three types of variables:
  1️⃣ **var** - The original variable keyword in JavaScript.
  2️⃣ **let** - A modern, block-scoped variable keyword.
  3️⃣ **const** - A keyword for declaring constants, derived from "constant".
*/

/* 
  💡 Quick Overview:
  - `var`   ➡️ Allows reassignment & redeclaration.
  - `let`   ➡️ Allows reassignment but NOT redeclaration.
  - `const` ➡️ Does NOT allow reassignment or redeclaration.
*/

/* 
  🌟===============================================🌟
      🛠️ Basic Knowledge: What is a Variable? 
  🌟===============================================🌟
*/

/* 
  🎯 **Definition**: 
  Variables are like containers/boxes that store data in JavaScript.

  📦 **Real-Life Analogy**: 
  A box stores items. Similarly, variables store data (e.g., words, numbers, etc.).
*/

/* 
  🌟===============================================🌟
      🚀 How to Create Variables in JavaScript
  🌟===============================================🌟
*/

/* 
  📝 Steps:
  1️⃣ Choose the type: `var`, `let`, or `const`.
  2️⃣ Write the type, give the variable a name.
  3️⃣ Assign a value using `=` (text values in quotes " ").
  4️⃣ End with a semicolon (`;`).

  ✍️ Examples:
*/
var name = "D.N.Sathvara"; // A string
let age = 25;              // A number
const pi = 3.14;           // A constant

/* 
  🔎 **Viewing Variable Values**:
*/
document.write(name);  // Display value in the browser.
console.log(age);      // Display value in the console.

/* 
  🌟===============================================🌟
      🔄 Reassignment and Redeclaration
  🌟===============================================🌟
*/

/* 
  📝 **Reassignment**: Changing an existing variable's value.
*/
let greeting = "Hello";
greeting = "Hi"; // ✅ Updates the value

/* 
  📝 **Redeclaration**: Declaring the same variable again.
*/
var welcomeMessage = "Welcome";
var welcomeMessage = "Hello again"; // ✅ Works with `var`

// let greeting = "Welcome"; // ❌ Redeclaration not allowed with `let`

/* 
  ⚠️ Summary:
  - `var` ➡️ Allows reassignment & redeclaration.
  - `let` ➡️ Allows reassignment, NOT redeclaration.
  - `const` ➡️ Does NOT allow either reassignment or redeclaration.
*/

/* 
  🌟===============================================🌟
      ✨ Key Differences: var, let, and const
  🌟===============================================🌟
*/

/* 
  1️⃣ **var**:
*/
var a = "Initial";
a = "Updated";    // ✅ Reassignment
var a = "Again";  // ✅ Redeclaration

/* 
  2️⃣ **let**:
*/
let b = "Initial";
b = "Updated";    // ✅ Reassignment
// let b = "Again"; // ❌ Redeclaration not allowed

/* 
  3️⃣ **const**:
*/
const c = "Fixed";
// c = "Change";   // ❌ Reassignment not allowed
// const c = "New"; // ❌ Redeclaration not allowed

/* 
  🌟===============================================🌟
      🔄 Reassignment and Redeclaration Table
  🌟===============================================🌟
*/

/* 
  | Behavior        | var            | let          | const       |
  |-----------------|----------------|--------------|-------------|
  | Reassignment    | ✅ Allowed      | ✅ Allowed    | ❌ Not Allowed |
  | Redeclaration   | ✅ Allowed      | ❌ Not Allowed | ❌ Not Allowed |
*/


/* 
  🌟===============================================🌟
      📜 Rules for Variable Naming
  🌟===============================================🌟
*/

/* 
  ✅ Valid Names:
*/
let firstName = "John";
let _age = 30;
let $price = 50;
let userName = "Alice";
let user_name = "Bob";

/*
  ❌ Invalid Names (fixed and commented out):
*/
// let 1name = "Anna";     // ❌ Cannot start with a number
// let my-name = "Bob";    // ❌ Hyphens not allowed
// let let = 10;           // ❌ Reserved keyword
// let user name = "Alice";// ❌ Spaces not allowed

/* 
  📌 Summary:
  1️⃣ Start with a letter, `_`, or `$`.
  2️⃣ Avoid reserved keywords (e.g., `let`, `const`, `function`).
  3️⃣ Do NOT use spaces or hyphens (`-`).
*/

/* 
  🌟===============================================🌟
      🎉 End of Documentation 🎉
  🌟===============================================🌟
*/
