/*
🌟 Welcome to My JavaScript Playground! 🌟

In this file, we'll explore fun and simple programs using JavaScript.
Let’s get started! 🚀
*/

/* 
🧮 Simple Calculator 🧮
This calculator takes two numbers and an operator (+, -, *, /) and calculates the result.
*/

const value1 = Number(prompt("Enter First number 🔢:"));
const value2 = Number(prompt("Enter Second number 🔢:"));
const operator = prompt("Enter +, -, *, or / ➕➖✖️➗:");

if (operator === "+") {
    document.write(`Result: ${value1 + value2} ✅`);
} else if (operator === "-") {
    document.write(`Result: ${value1 - value2} ✅`);
} else if (operator === "*") {
    document.write(`Result: ${value1 * value2} ✅`);
} else if (operator === "/") {
    if (value2 !== 0) {
        document.write(`Result: ${value1 / value2} ✅`);
    } else {
        document.write("Error: Division by zero is not allowed 🚫.");
    }
} else {
    document.write("Invalid Operator ❌. Please use +, -, *, or /.");
}

/*
🗳️ Voting System 🗳️
This program checks if you are old enough to vote (18+). Let's find out! 🎉
*/

const age = parseInt(prompt("Enter your age 🧓👶:"));

if (age >= 18) {
    document.write("You are eligible to vote! 🗳️✅");
} else {
    document.write("You are not eligible to vote. 😔");
}

/*
🎓 Grading System 🎓
Enter your marks, and this program will give you a grade! 📈
*/

const marks = prompt("Enter your marks 📝:");

if (marks >= 90) {
    document.write("Grade: A 🌟");
} else if (marks >= 80) {
    document.write("Grade: B 👍");
} else if (marks >= 70) {
    document.write("Grade: C 🙂");
} else if (marks >= 60) {
    document.write("Grade: D 😕");
} else {
    document.write("Grade: F 😞");
}

/*
🚦 Traffic Light System 🚦
Tell me the color of the traffic light, and I'll guide you! 🛑🟡🟢
*/

const color = prompt("Enter the traffic light color (red, yellow, green):");

if (color === "red") {
    document.write("🛑 Stop!");
} else if (color === "yellow") {
    document.write("⚠️ Get ready.");
} else if (color === "green") {
    document.write("✅ Go!");
} else {
    document.write("Invalid color entered ❌.");
}

/*
🔢 Number Type Checker 🔢
This program checks if a number is positive, negative, or zero.
*/

const number = parseInt(prompt("Enter a number 🔢:"));

if (number > 0) {
    document.write("The number is positive ➕.");
} else if (number < 0) {
    document.write("The number is negative ➖.");
} else {
    document.write("The number is zero 0️⃣.");
}

/*
📅 Day of the Week 📅
Enter a number (1-7), and I'll tell you the day of the week! 🗓️
*/

const day = parseInt(prompt("Enter a number (1-7) for the day of the week 🗓️:"));

if (day === 1) {
    console.log("Monday 🌞");
} else if (day === 2) {
    console.log("Tuesday 💼");
} else if (day === 3) {
    console.log("Wednesday 🐪");
} else if (day === 4) {
    console.log("Thursday 📚");
} else if (day === 5) {
    console.log("Friday 🎉");
} else if (day === 6) {
    console.log("Saturday 🏖️");
} else if (day === 7) {
    console.log("Sunday 😌");
} else {
    console.log("Invalid number ❌. Please enter a number between 1 and 7.");
}

/*
🎉 Thanks for exploring these programs! 🎉
I hope you had fun coding with JavaScript. 💻✨
*/
