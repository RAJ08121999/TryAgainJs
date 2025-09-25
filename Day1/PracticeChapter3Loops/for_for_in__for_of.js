for(let i = 0; i<50; i++){
    console.log("learning loops",i);
}

// Program to add first n natural numbers;

let num = 20;
let sum = 0;
for(i=1;i<=num;i++)
{
    sum += i;
}
console.log(sum);


// program to calculate factorial of 6;

let num1 = 6;
let fact = 1;

for(let i = 1 ; i<=num1 ; i++){
    fact*= i;
}
console.log(fact);

// <-----------for in loop --------------->

let marks = {
    hindi:98,
    eng:76,
    c:90,
    java:98,
    js:90
}

for(let a in marks){
    console.log(a);
    console.log("marks in "+a +"is"+marks[a]);
}


// <--------------for of loop -------------------->

for(let a of "rajesh"){
    console.log(a);
}


// comparison in for-in and for-of in arrays

let arr = ["apple","banana","cherry","papaya","mango"];

for(let i in arr){
    console.log("for in ....",i);
}

for(let j of arr){
    console.log("for of...",j);
}


/*

for in .... 0
for in .... 1
for in .... 2
for in .... 3
for in .... 4
for of... apple
for of... banana
for of... cherry
for of... papaya
for of... mango

*/


// for in loop in objects

const obj = {
    name:"raj",
    age:25,
    role:"developer",
}

for(let keyss in obj){
    console.log(keyss);
}

/*

name
age
role

*/

