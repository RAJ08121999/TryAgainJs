//Q-1 create a variable of type string and try to add a number into it.

let names = "raj";
console.log(typeof names);//string

let num = 10;
console.log(names+num);//raj10 

// <---------------------***************---------------------->


// Q-2 use typeof operator to find the datatype of the string in last question

console.log(typeof(names+num));//string


// <-------------------***********---------------------------->



// Q-3 create a const object in js . can you change it to hold a number later?

const student = {
    name:"raj",
    section:'A',
    isStudent:true,
};

// student = 5;      --------> No a const varible can't be updated or redeclared

console.log(student);

// <-----------------------***************--------------------------->



// Q-4 Try to add a new key to the const object of last problem.are you able to do it?

student.roll=5;
console.log(student);//{ name: 'raj', section: 'A', isStudent: true, roll: 5 }
student['friend']="rahul";
student["name"]="rajan";

console.log(student);

// {
//     name: 'rajan',
//     section: 'A',
//     isStudent: true,
//     roll: 5,
//     friend: 'rahul'
// }

// ********8updating --->adding/removing of keys and values is possible ***********

// <--------------**********------------------>

// Q-5 write a js program to create a word-meaning dictionary of 5 words

const dictionary = {
    sheb:"Apple",
    kela:"banana",
    amrud:"guava",
    anar:"pomegranate",
    angur:"grape",
};

console.log(dictionary.sheb);//apple
console.log(dictionary["amrud"]);//guava

// *****we can access objects by .(dot) operator or square brackets[] also



