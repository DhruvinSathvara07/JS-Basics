/**
 * 🟢 **JavaScript: Arrow Functions** 🟢
 *
 * Arrow functions make your code **shorter** and **cleaner**! 🎯
 * They are a new, simpler way to write functions in JavaScript. ✨
 * 
 * 🖋️ **Syntax of Arrow Function** 🖋️
 * 
 * ```javascript
 * const greet = (name) => { return `Hello, ${name}! 👋`; }
 * greet("Alice");  // Output: Hello, Alice! 👋
 * ```
 *
 * ──── 🌟 **Why use Arrow Functions?** 🌟
 * 
 * 1️⃣ **Shorter syntax** – No need for `function` keyword! ✂️
 * 2️⃣ **No `this` keyword confusion** – Arrow functions don't bind `this`. 🔄
 * 3️⃣ **Cleaner code** – Ideal for simple functions! 🧑‍💻
 *
 * ──── 💡 **How to Create an Arrow Function?** 💡 ────
 * 
 * **Step 1**: Write `const` or `let` to define the function. 📝  
 * **Step 2**: Add your function's parameters in parentheses `()`. 💡  
 * **Step 3**: Use the arrow `=>` to separate parameters from the function body. ➡️  
 * **Step 4**: Write the function logic, inside `{}` for multi-line or directly for single line. 🎯
 *
 * ──── 🖋️ **Example 1: Simple Function** 🖋️
 */

const greet = (name) => {
    return `Hello, ${name}! 👋`;
}
document.write(greet("Alice") + "<br>");  // Output: Hello, Alice! 👋

/**
 * ──── 🖋️ **Example 2: Short Arrow Function** 🖋️
 * 
 * If you only have one line of code, you can skip the `return` and curly braces `{}`.
 */

const add = (a, b) => a + b;
document.write(add(5, 3) + "<br>");  // Output: 8

/**
 * ──── 📢 **Key Takeaways** 📢
 * 
 * 1️⃣ Arrow functions are **shorter** and **cleaner**! 🎯
 * 2️⃣ They don't bind the `this` keyword, making them easier to use! 🔄
 * 3️⃣ Perfect for simple, one-line functions! ⚡
 *
 * 
 * ────  **Happy coding!** 🎉  ──── */