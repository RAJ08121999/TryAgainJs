// Q1-Write a program to check whether a given number is even or odd.

let number = 9;
if(number%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}

// doing the same with ternary operator

(number%2==0)?"even":"odd";


// <-----------------------*************************------------------>

// Q2- Take a user’s age as input and print whether they are a child, teenager, adult, or senior.

let age = 29 ;
if(age<13){
    console.log("child");
}
else if(age<12 && age>20){
    console.log("teenager");
}
else if(age>20 && age<45){
    console.log("adult");
}
else{
    console.log("senior citizen");
}

// <-----------------------*************************------------------>

// Q-3 Print the multiplication table of a given number using a loop.

let num = 5;
for(let i = 1 ; i<=10 ; i++ ){
    console.log(`${num} X ${i} = ${num*i}`);
}

// <-----------------------*************************------------------>

// Q-4 Find the sum of the first 10 natural numbers using a loop.

let sum = 0 ; 
for(let i = 0 ; i <= 10 ; i++){
    sum+=i;
}
console.log("sum is =",sum);


// <-----------------------*************************------------------>

// Q-5 Write a function that takes a string and returns its length without using string.length.

let str = "GKCEM";

function findlength(str){
    let i = 0;
    while(str[i]!=null){
        i++;
    }
    return i;
}

let length = findlength(str);
console.log("the length of " + str + "is"+length);

// <-----------------------*************************------------------>

// Q-6 Create a program that prints all prime numbers between 1 and 50.

function checkPrime(){
    for(let i=2; i<=50 ; i++){
        let isPrime = true;
        for(let j=2; j<=(Math.sqrt(i));j++) {
            if(i%j===0)
                isPrime=false;
                break;
        }
        if(isPrime)
            console.log(i);
    }
}
checkPrime();