// Q1 write a program to print the marks of a student in an object using for loop;

const marks = {
    harish:90,
    raj:98,
    ragini:99,
    ranjha:87
};

for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log("marks of "+ Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]]);
}

/*
marks of harish are 90
marks of raj are 98
marks of ragini are 99
marks of ranjha are 87
*/
console.log(Object.keys(marks));//[ 'harish', 'raj', 'ragini', 'ranjha' ]

console.log(Object.keys(marks).length);//4

// Object.keys(marks)----> it stores the keys of the object into an array -----> [ 'harish', 'raj', 'ragini', 'ranjha' ] then by .length we get its length as now its an array


// <-----------------****************------------------>

// Q2 do the same problem with for in loop

for(let i in marks){
    console.log("marks of "+i+" are " + marks[i]);
    // console.log(marks[i]);//it returns the values of the keys 
}

/*
marks of harish are 90
marks of raj are 98
marks of ragini are 99
marks of ranjha are 87
*/



// <---------------------*******************------------------->

// Q3. write a program to print "try again " until the user enters the correct number;


let correctNum = 6;
let i=0;
while(i!=correctNum){
    console.log("trying...",i);
    i++;
}

console.log("got the number",i);

/*

trying... 0
trying... 1
trying... 2
trying... 3
trying... 4
trying... 5
got the number 6

*/


// <---------------------*******************------------------->

// Q4 write a function to find the mean of five numbers

let a = 5,b=7,c=9,d=6,e=10;

function solveMean(p,q,r,s,t){
    return (p+q+r+s+t)/5;
}

const ans= solveMean(a,b,c,d,e)

console.log(ans);//7.4


// <-----------**************--------------------->
// doing the same using arrow function

const mean = (a,b,c,d,e)=> (a+b+c+d+e)/5;

const result = mean(a,b,c,d,e);
console.log(result);//7.4

