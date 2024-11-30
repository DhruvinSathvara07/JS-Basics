/*
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
       ===> 🌈 **If-Else Statements in JavaScript** 🌈 <===
  🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟

  **If-else statements** are used to make decisions in your code.
  They allow comaparsion on your code

*/

/*
 🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟
            🔍 **How If-Else Works**
 🌟~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌟


 ✨ **Purpose** ✨
 - The `if...else` statement is like a 🛤️ road sign for your code.
 - It helps the program decide which path to take based on a condition.

 🚦 **Syntax** 🚦

   if (condition) { // 🚀 If the condition is true, do this...
      💡 Action for TRUE condition
   } else {         // ⏳ If the condition is false, do that...
      💡 Action for FALSE condition
   }
*/

const a = 5;
const b = 10;

// const a = 50;
// const b = 10;

if (a < b) {
  document.write("B is greater than A");
} else {
  document.write("A is greater than B");
}


/*
 🔍 **Example** 🔍
   let age = 20;

   if (age >= 18) {   // 🎯 Condition: Is age 18 or more?
     console.log("🎉 You are an adult!");  // 🎉 If TRUE, print adult message
   } else {
     console.log("🚸 You are a minor!");  // 🚸 If FALSE, print minor message
   }

 📚 **Explanation** 📚
   - 🧠 **Condition**: The test that evaluates to either `true` or `false` 🧐.
   - 🟢 **if Block**: Code to run when the condition is `true` ✅.
   - 🔴 **else Block**: Code to run when the condition is `false` ❌.

 ✨ Keep your code clean and flexible with the if...else statement! ✨

 ****************************************************/


/****************************************************
 * 🎯 if...else Statement Examples 🎯              *
 ****************************************************

 🌟 **1. Check if a Number is Positive or Negative** 🌟

 🔍 **Purpose**:
 - Determines if a given number is positive or negative.
 - If the number is greater than or equal to 0, it's positive; otherwise, it's negative.

 ✍️ **Code**:
   let number = -5;
   if (number >= 0) {
     console.log("The number is positive.");
   } else {
     console.log("The number is negative.");
   }

 📝 **Example**:
   - **Input**: `number = -5`
   - **Output**: "The number is negative."

 *********************************************

 🌟 **2. Even or Odd Number Check** 🌟

 🔍 **Purpose**:
 - Checks if a number is even or odd.
 - If the number is divisible by 2 (`num % 2 === 0`), it's even; otherwise, it's odd.

 ✍️ **Code**:
   let num = 10;
   if (num % 2 === 0) {
     console.log("The number is even.");
   } else {
     console.log("The number is odd.");
   }

 📝 **Example**:
   - **Input**: `num = 10`
   - **Output**: "The number is even."

 *********************************************

 🌟 **3. Voting Eligibility** 🌟

 🔍 **Purpose**:
 - Checks if a person is eligible to vote based on their age.
 - If the person’s age is 18 or more, they can vote.

 ✍️ **Code**:
   let age = 17;
   if (age >= 18) {
     console.log("You are eligible to vote.");
   } else {
     console.log("You are not eligible to vote.");
   }

 📝 **Example**:
   - **Input**: `age = 17`
   - **Output**: "You are not eligible to vote."

 *********************************************

 🌟 **4. Find the Larger Number Between Two** 🌟

 🔍 **Purpose**:
 - Compares two numbers and outputs the larger one.

 ✍️ **Code**:
   let num1 = 15;
   let num2 = 20;
   if (num1 > num2) {
     console.log(num1 + " is the larger number.");
   } else {
     console.log(num2 + " is the larger number.");
   }

 📝 **Example**:
   - **Input**: `num1 = 15`, `num2 = 20`
   - **Output**: "20 is the larger number."

 *********************************************

 🌟 **5. Check if You Can Drive** 🌟

 🔍 **Purpose**:
 - Determines if a person is old enough to drive.
 - If the person’s age is 18 or more, they can drive.

 ✍️ **Code**:
   let age = 16;
   if (age >= 18) {
     console.log("You can drive.");
   } else {
     console.log("You cannot drive.");
   }

 📝 **Example**:
   - **Input**: `age = 16`
   - **Output**: "You cannot drive."

 *********************************************

 🌟 **6. Weather Temperature Check** 🌟

 🔍 **Purpose**:
 - Checks if the temperature is hot or cool.
 - If the temperature is greater than 25°C, it's considered hot.

 ✍️ **Code**:
   let temperature = 30;
   if (temperature > 25) {
     console.log("It's hot outside.");
   } else {
     console.log("The weather is nice and cool.");
   }

 📝 **Example**:
   - **Input**: `temperature = 30`
   - **Output**: "It's hot outside."

 *********************************************

 🌟 **7. Check if a String is Empty** 🌟

 🔍 **Purpose**:
 - Determines whether a string is empty or not.

 ✍️ **Code**:
   let str = "";
   if (str === "") {
     console.log("The string is empty.");
   } else {
     console.log("The string is not empty.");
   }

 📝 **Example**:
   - **Input**: `str = ""`
   - **Output**: "The string is empty."

 *********************************************

 🌟 **Summary of if...else Usage** 🌟

 🔑 **Key Points**:
 - The `if...else` statement allows decision-making in code.
 - It evaluates a condition (true or false) and runs a specific block of code based on that condition.

 **Syntax**:
   if (condition) {
     // Code to execute if condition is true ✅
   } else {
     // Code to execute if condition is false ❌
   }

 🚀 **Condition**: The expression that evaluates to `true` or `false`.
 🌈 **if block**: Code executed if the condition is `true`.
 🛑 **else block**: Code executed if the condition is `false`.

 ****************************************************/

//  Keep particing


