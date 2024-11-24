//               Template strings method called short name is *****BACK TICK METHOD******

//            you can write a js in any string using a backtick

// Backticks (`` ` ``) in JavaScript are used to write strings and add variables inside `${}`.
// Backticks (`` ` ``) in JavaScript are used to make strings and easily add variables or write on multiple lines.


var a = "hello";

//           ==>*****This is very old method you can this easily using backtick *****<==

// document.write(a + "D.N.Sathvara");

//                         ===>This is very simple method <===
// document.write(`${a} D.N.Sathvara`);




var fname = "Sathvara";
var lname = "Dhruvin";

function fullname() {
    return ` ${a} ${fname} ${lname} `
}

document.write(fullname());

