/**
 * 🟢 **JavaScript Array Destructuring** 🟢
 * 
 * Destructuring is a **cool shortcut** to easily get values from arrays and objects.  
 * Instead of writing a lot of code to extract values, we can use destructuring! 💨
 * 
 * Let's make it simple and fun with some examples! 😎
 * 
 * ──── 🌟 **Before Destructuring** 🌟 ────
 * 
 * Here’s the old way of getting values from an array:
 * 
 * ```javascript
 * let a = ["Dhruvin", "Ahmedabad", 18];
 * 
 * let name = a[0];
 * let city = a[1];
 * let age = a[2];
 * console.log(name, city, age); // Output: Dhruvin Ahmedabad 18
 * ```
 * 
 * But wait! There's a much easier way... 😍
 * 
 * ──── 🌟 **1. Simple Destructuring** 🌟 ────
 * 
 * You can extract values from an array directly like this:
 * 
 * ```javascript
 */

let a = ["Dhruvin", "Ahmedabad", 18];
let [name, city, age] = a;
console.log(name); // Output: Dhruvin
console.log(city); // Output: Ahmedabad
console.log(age);  // Output: 18

/*
 ──── 🌟 **2. Destructuring with Default Values** 🌟 ────
 
 You can set a **default value** in case a variable is missing or undefined:
 
 ```javascript
 let a = [, , 18];  // Missing name and city
 let [name = "Unknown", city = "Unknown", age] = a;
 console.log(name); // Output: Unknown
 console.log(city); // Output: Unknown
 console.log(age);  // Output: 18
 ```
 
 ──── 🌟 **3. Spread Syntax (Using Three Dots)** 🌟 ────
 
 With the **spread syntax** (`...`), you can collect all remaining items into an array:
 
 ```javascript
 let a = ["D.N.", "Ahmedabad", 18];
 let [name, ...rest] = a; // Collecting remaining items into 'rest'
 console.log(name);  // Output: D.N.
 console.log(rest);  // Output: [ 'Ahmedabad', 18 ]
 ```
 
 ──── 📢 **Key Takeaways** 📢 ────
 
 1️⃣ **Destructuring** makes working with arrays and objects **super easy**! 💥  
 2️⃣ You can **extract** values directly and **assign default values**. 🎯  
 3️⃣ Use **spread syntax** (`...`) to collect the rest of the values into an array. 🔄
 
 **Destructuring = Simpler Code = Happy Coding!** 😁
 
*/
