/**
 * 🟢 **JavaScript: Inner and Outer Functions** 🟢
 * 
 * 🌟 **What Are Inner and Outer Functions?** 🌟
 * 
 * In JavaScript, you can have **functions inside other functions**!  
 * Think of it like **a function within a function**. 🛠️💥  
 * The **outer function** contains the **inner function**. Let's explore this magic! ✨
 * 
 * 🏗️ **Outer Function** 🏗️  
 * The **outer function** is the big boss 🏆 that holds the little helper function inside.  
 * It can call the inner function and use its own data. 🗝️
 * 
 * 🔒 **Inner Function** 🔒  
 * The **inner function** is hidden inside the outer function 🕵️‍♂️.  
 * It can use the outer function’s data, but the outer function can't access the inner function’s data. 🛑
 * 
 * ──── 🌈 **Why Use Inner Functions?** 🌈
 * 
 * 1️⃣ **Encapsulation** – Hide unnecessary details inside. 🏰  
 * 2️⃣ **Better Code Organization** – Keep your code neat and clean! 📂  
 * 3️⃣ **Access to Outer Function's Data** – Inner functions can use data from the outer function. 🔑
 * 
 * ──── 💻 **Example 1: Outer and Inner Function in Action** 💻
 */

function outerFunction() {
    let outerVar = "I’m the Outer Variable! 🌍"; // Outer function's data

    // Inner function
    function innerFunction() {
        let innerVar = "I’m the Inner Variable! 🔒"; // Inner function's data
        console.log(outerVar);  // Inner function can use outer function’s data.
        console.log(innerVar);  // Inner function’s own data.
    }

    innerFunction();  // Call the inner function inside the outer function
}
outerFunction();
/**
 * 💬 Output:
 * I’m the Outer Variable! 🌍
 * I’m the Inner Variable! 🔒
 * 
 * ──── 💻 **Example 2: Accessing Outer Function Data** 💻
 * 
 * Remember: **Inner functions** can access the outer function's data, but the reverse isn't true. 🔒
 */

function outerFunction2() {
    let outerVar = "Only Outer Function can see me! 💭";  // Outer function’s data

    function innerFunction() {
        console.log(outerVar);  // Inner function can access the outer function's data!
    }

    innerFunction();  // Output: Only Outer Function can see me! 💭
    // console.log(innerVar);  // ERROR! Outer function can't access inner function’s data.
}
outerFunction2();  // Output: Only Outer Function can see me! 💭

/**
 * 🌟 **Key Takeaways** 🌟
 * 
 * 1️⃣ **Outer functions** hold the **inner functions**. 🌍  
 * 2️⃣ Inner functions can access the outer function's data, but the outer function can't access the inner function's data. 🔐  
 * 3️⃣ Use **inner functions** to keep your code clean and **organized**! 🧹
 * 
 * **Functions** = **Better Structure & Neat Code** ⚡. Try nesting functions for more organized code! 🧑‍💻✨
 */
