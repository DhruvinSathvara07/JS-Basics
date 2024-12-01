/**
 * 🟢 **JavaScript Object Destructuring** 🟢
 *
 * Destructuring lets you quickly get values from objects without the hassle! 🎯
 * It's a **shortcut** that makes your code cleaner and easier to write. ✨
 *
 * Let's break it down! 😎
 *
 * ──── 🌟 **Basic Destructuring** 🌟 ────
 *
 * Directly extract values from an object:
 *
 * ```javascript
 * let person = { name: "D.N", age: 18, city: "Ahmedabad" };
 * let { name, age, city } = person;
 * console.log(name, age, city); // Output: D.N 18 Ahmedabad
 * ```
 *
 * ──── 🌟 **Short Names** 🌟 ────
 *
 * You can **rename** variables while destructuring:
 *
 * ```javascript
 * let { name: n, age: b, city: c } = person;
 * console.log(n); // D.N
 * console.log(b); // 18
 * console.log(c); // Ahmedabad
 * ```
 *
 * ──── 🌟 **Spread Syntax** 🌟 ────
 *
 * Copy all properties from one object to another using spread (`...`):
 *
 * ```javascript
 * let objData = { name: "D.N", age: 18, email: "example@gmail.com" };
 * console.log({ ...objData }); // Output: { name: "D.N", age: 18, email: "example@gmail.com" }
 * ```
 *
 * 📝 **Modify an Object** 📝
 *
 * Add or update properties in an object using spread:
 *
 * ```javascript
 * console.log({ ...objData, name: "D.N.Sathvara" });
 * console.log({ name: "D.N.Sathvara", ...objData }); // Original value of 'name' is not overridden!
 * ```
 *
 * ──── 📢 **Key Takeaways** 📢 ────
 *
 * 1️⃣ **Destructuring** simplifies code! ✨
 * 2️⃣ **Rename** variables and set **default values** easily. 🔄
 * 3️⃣ Use **spread syntax** to copy and modify objects fast. ⚡
 *
 * **Destructuring = Quick Code = Happy Coding!** 🎉
 */

// More Partcing
