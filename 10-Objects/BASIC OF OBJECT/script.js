// OBJECTS used for STORE THE RELATED DATA.

//                                   ==>  Make objects like this 

//                                             first of create a varible 
//after make carlie bracketes 

//                 {

//                name: "D.N.S",
//         name :        name is called a key 
//         "D.N.S"        your data type called a value

//                  }


//                            make a multiple objects for you understand easily

var userData = {
    name: "D.N.Sathvara",
    email: "sathvaradhruvin04@gmail.com",
    age: 18,
}

// you print the object 
console.log(userData);
// console.log("name:", userData.name); //       <===========> you can print the particully key print like this


//                            ==> make a ARRAY IN A object <==
var capability = {
    skill: ["HTML", "CSS", "JS", "jQuery"]
}
// console.log(capability.skill);                     ========>  print a Array  <===========


//                             ==> make object in a object <==
var information = {
    info: {
        salary: 25000,
        Education: "BCA"
    }
}

//                             ========>  print a Object in a Object  <===========

//                       ==>   console.log(information.info);
//                       ==>   console.log(information.info.salary);
//                       ==>   console.log(information.info.Education);


//                         ==> make a function in a object <==

var hello = {
    printName: function (name) {
        console.log("Hi I am D.N.Sathvara");
    }
}
//                             ========>  print a function in a Object  <===========

//    this is a print a full function  [x]           ===>   console.log(hello.printName);
//    this is a write a method         [=]           ===>   console.log(hello.printName());

//                       ==> make a outer function and called in a object

function print(name) {
    console.log("Hello");
}

var hello = {
    hi: print
}

// console.log(hello.hi());
