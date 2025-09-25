// Q1--use logical operators to find whether the age of a person lies between 10 and 20?

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter your age:",(age)=>{
    if(age>10 && age<20)
        {
            console.log("yes it lies between 10 and 20");
        }
        else{
            console.log("no it does not lies between 10 and 20");
        }
    rl.close();
});

// <--------------**************--------------------------->

// Q2- demonstrate an example of switch case

let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

/*The reason both programs run “simultaneously” is that :
First, the readline part runs and waits for user input.

Immediately after, the switch part runs without waiting for the user to finish the first part.

In other words, Node.js does not automatically pause the second block until the rl.question callback is finished.

If you want the switch block to run after you get the age input, you need to put it inside the rl.question callback.*/

// <------------------**********-------------------------->

// Q3.check whether the number is divisible by both 2 and 3

let number = 12;

if(number%2==0 && number%3==0){
    console.log("yes its divisible");
}
else{
    console.log("its not divisible");
}


// <-------------************----------------------->

// Q4.write a js program to find either a number is divisible by 2 or 3


let num = 8;

if(num%2==0 || num%3==0){
    console.log("yes its divisible");
}
else{
    console.log("its not divisible");
}


// <--------------*******************--------------------->

// Q5. check the eligibility to drive the required age is 18

let umar = 15;

if(umar>=18)
{
    console.log("You are eligible to drive");
}
else{
    console.log("you are not eligible to drive");
}

// <--------------*******************--------------------->

// Q6. check the eligibility to drive the required age is 18 use ternary operator

let a = umar>18 ? "you can drive" : "you can not drive" ;

console.log(a);
