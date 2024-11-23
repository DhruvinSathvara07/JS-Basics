// Destructuring in objects

let a = {
    name: "D.n",
    age: 18,
    city: "Ahmedabad"
}

let { name, age, city } = a;

console.log(name, age, city);

//                                 WITH SHORT NAME

//                                       YOU CAN DO THIS


// let { name: n, age: b, city: c } = a;

// console.log(n);
// console.log(b);
// console.log(c);


//                                    SPREAD SYNTAX

let objData = {
    name: "D.N",
    age: 18,
    Email: "dhruvinsathvara05@gmail.com"
}


//THIS IS PRINT all object DATA WITHOUT USING loops
// console.log(...objData);

//YOU CHANGE A objData
// MAke a {} in ()

console.log({ ...objData, name: "D.N.Sathvara" });

//                        BUT YOU WRITE THE CHANGES FIRST THE VALUES CAN't be Overvalued

// THIS PRINT OLD VALUE name:"D.N"
console.log({ name: "D.N.Sathvara", ...objData });
