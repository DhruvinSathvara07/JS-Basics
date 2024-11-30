/*
🌟 ~~~~~ Logical Operators in JavaScript ~~~~~ 🌟

Logical operators help you make decisions in your code by combining conditions (true/false).

These operators are:
1️⃣ **AND (&&)**
2️⃣ **OR (||)**
3️⃣ **NOT (!)**
*/

/*
🌟 1️⃣ AND Operator (&&) 🌟

👉 AND checks if **both conditions** are true.
👉 If both are true, the result is true. If even one is false, the result is false.
*/

// 📚 Example:

let age = 20;
let hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("✅ You can watch the movie.");
} else {
    console.log("🚫 You can't watch the movie.");
}

/*
📝 Output:
- If age = 20 and hasTicket = true: "✅ You can watch the movie."
- If age = 16 or hasTicket = false: "🚫 You can't watch the movie."
*/

/*
🌟 2️⃣ OR Operator (||) 🌟

👉 OR checks if **at least one condition** is true.
👉 If one or both are true, the result is true. If both are false, the result is false.

*/

// 📚 Example:
let hasCoupon = false;
let isVIP = true;

// let hasCoupon = false;
// let isVIP = false;

if (hasCoupon || isVIP) {
    console.log("🎉 You get a discount!");
} else {
    console.log("💵 No discount for you.");
}

/*
📝 Output:
- If hasCoupon = true or isVIP = true: "🎉 You get a discount!"
- If both are false: "💵 No discount for you."
*/

/*
🌟 3️⃣ NOT Operator (!) 🌟

👉 NOT flips the result.
👉 If the condition is true, it becomes false. If it’s false, it becomes true.
*/

// 📚 Example:

let isRaining = false;

if (!isRaining) {
    console.log("🌞 It's sunny outside.");
} else {
    console.log("🌧️ It's raining outside.");
}

/*
📝 Output:
- If isRaining = false: "🌞 It's sunny outside."
- If isRaining = true: "🌧️ It's raining outside."
*/

/*
🌟 Combining Operators 🌟

👉 You can mix AND (&&), OR (||), and NOT (!) together to make smart decisions.
*/
// 📚 Example:
let hasLicense = true;
let isSober = true;
let hasCar = false;

if (hasLicense && isSober && hasCar) {
    console.log("🚗 You can drive.");
} else {
    console.log("⛔ You cannot drive.");
}

/*
📝 Output:
- If all are true: "🚗 You can drive."
- If any one is false: "⛔ You cannot drive."
*/

/*

🎯 Practical Examples 🎯

1️⃣ **Login Check**:
   let username = "admin";
   let password = "1234";

   if (username === "admin" && password === "1234") {
     console.log("✅ Login successful.");
   } else {
     console.log("❌ Login failed.");
   }

2️⃣ **Shopping Discount**:
   let isMember = true;
   let cartTotal = 80;

   if (isMember || cartTotal > 100) {
     console.log("🎉 You get a discount!");
   } else {
     console.log("💵 No discount for you.");
   }

3️⃣ **Alarm System**:
   let doorOpen = false;
   let motionDetected = true;

   if (doorOpen || motionDetected) {
     console.log("🚨 Alarm activated!");
   } else {
     console.log("🛑 All secure.");
   }
*/

/*
🌟 Summary 🌟

👉 Logical operators make code smarter by combining conditions:
- `&&` (AND): True only if both conditions are true.
- `||` (OR): True if at least one condition is true.
- `!` (NOT): Flips the condition (true becomes false, false becomes true).

🧠 Use them in if...else statements to write better, clearer code.
*/
