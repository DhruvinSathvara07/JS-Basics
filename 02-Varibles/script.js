//                              ===> Three TYpes of Varibles In JS <====

//                              1) Var- Var is keyword in JS
//                              2) Let- Let is Keyword in JS
//                              3) Const- The word 'const' is derived from the word 'constant.


//                 ***********    ===> Basic knowldge and Defenation of Varibles <===       ***********

// Varibles like a box

// example:==> Why use the box in real life :=> box used store anything

// Like a box Varibles store in JS anything like word,number etc.

// Varibles like a container
// Varibles used for store diffrent types data like word,number etc.


//                     🌟 🌟 🌟   ===> How to Create Variables <===   🌟 🌟 🌟

// First, decide which variable type to use: var, let, or const.
// Write the variable type (e.g., let), give a space, and then name your variable.
// Use = to assign a value, such as a number or a word (words are stored in quotes "").
// End the statement with a semicolon (;).


// 📝 Example of a variable
var name = "D.N.Sathvara";
var number = 18;
var num = 3.14;
var point = 0.314;

// how see varible value
document.write(name);         // write a varible name in (BRACKETS)
console.log(number);          // you want to print console

//                          🪐    ===>REASSIGN and REDECLARATION <===    🪐

// 📝  REASSIGN

name = "Dhruvin"; // THIS IS REASSIGN
// ==> after you print a value your value print IS "DHRUVIN"

// 📝  REDECLARATION

var name = "Krishna";
// ==> after you print a value your value print IS "Krishna"


//       👀  The REASSIGN and REDECLARATION work is <SAME> change the value but syntax is <DIFFRENT>

//  ********************** DIFFRENT BETWEEN var,let and const **********************

// 1)

var a = "Sathvara";
// ✅
a = "Dhruvin";
// ✅
var a = "hi";

// ***=> IN JS, var allows to both  REASSIGN and REDECLARATION

// 2)

let b = "Dhruvin";
// ✅
b = "Sathvara";
// ❌=> This is give error
//  let b = "hi";

// ***=> IN JS, let allows to REASSIGN and not allows to REDECLARATION

// 3)

const c = "Dhruvin";
// ❌
// c = "Sathvara"
//❌
// const c = "hi";

// ***=> IN JS, const can't allows to REASSIGN and REDECLARATION  *****most of developers used a const varible****



//                             🧠  ==> For Knowledge <==
//                                             RULES OF VARIBKLES NAMES

//    ✅ let name = "John";
//    ✅ let _age = 25;
//    ✅ let $price = 100;
//    ✅ let myName = "Alice";
//    ✅ let myname = "Bob";
//    ✅ let score_1 = 10;
//    ✅ let $total = 50;
//    ✅ let userName = "Alice";
//    ✅ let user_name = "Alice";
//    ✅ let userAge = 30;

// ==> Cannot start with a number,Do not use JavaScript Reserved Keywords,
// ==> Cannot use hyphens,Spaces not allowed,Not descriptive

//    ❌ let x = 30;
//    ❌ let user name = "Alice";
//    ❌ let my-name = "Anna";
//    ❌ let let = 5;
//    ❌ const function = "error";  










