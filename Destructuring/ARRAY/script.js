//BASICS

//BEFORE THIS IS LENGHTY METHOD

// let a = ["Dhruvin", "Ahmedabad", 18];

// let name = a[0];
// let city = a[1];
// let age = a[2];



//AFTER DESTRUCTURING ARRAY

// ============== > 1:Simple Method =====================

// let a = ["Dhruvin", "Ahmedabad", 18];
// let [name, city, age] = a;
// console.log(name);

// ============== > 2:Playing with Destructuring ==============

// let a = [, , 18];

// let [name, city, age] = a;

// console.log(name);                                              =>   // undefind
// console.log(city);                                              =>   // undefind

//                                SET A DEFULT VALUE

// let [name, age = 18, city] = a;


//                       ==================== 3: ... (WITH THREE DOT) ====================
let a = ["D.N.", "Ahmedabad", 18];
let [name, ...rest] = a;

//            AFTER THE name ALL ITEMS CONVERT IN ARRAY AND SHOW IN console         

console.log(name, rest);
