/**
 * 🟣 **Switch Statement in JavaScript** 🟣
 * 
 * ──── 🌟 **What is `switch`?** 🌟 ────
 * 
 * A `switch` statement is like a **magic decision-maker** 🪄.  
 * It checks a value 🔍 and runs **specific code** based on a match. 🎯  
 * 
 * ──── 🖋️ **Syntax (Plain & Elegant)** 🖋️ ────
 * 
 * ```
 * switch (expression) {
 *   case value1: 
//  *     // Code for value1 💡
 *     break; // Stops here 🚦
 *   case value2: 
//  *     // Code for value2
 *     break;
 *   default:
//  *     // Code if nothing matches 🤷‍♀️
 * }
 * ```
 * 
 * ──── 🗓️ **Example: What Day Is It?** 🗓️ ────
 */

const day = 3; // Try changing this to 1, 2, 4, etc. 🤓

switch (day) {
    case 1:
        document.write("🌞 Monday: Let's hustle!");
        break;
    case 2:
        document.write("💪 Tuesday: Keep pushing!");
        break;
    case 3:
        document.write("✨ Wednesday: Halfway there!");
        break;
    case 4:
        document.write("🚀 Thursday: Almost there!");
        break;
    case 5:
        document.write("🎉 Friday: Weekend vibes!");
        break;
    case 6:
        document.write("🛋️ Saturday: Time to relax!");
        break;
    case 7:
        document.write("🍳 Sunday: Recharge for the week ahead!");
        break;
    default:
        document.write("❓ Who knows? Maybe it's not a valid day! 😅");
}

/**
 * ──── 📢 **Key Takeaways** 📢 ────
 *
 * 1️⃣ Use `switch` when you have multiple **choices** 🛤️.
 * 2️⃣ Always use `break` to stop **fall-through**. 🚫
 * 3️⃣ Include `default` for unexpected values! 🌈
 *
 * Short, clean, and super useful! ✨
 * Try it out and become a `switch` master! 👨‍💻👩‍💻
 */

// *** Using a Switch case to write programs like if-else

