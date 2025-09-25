// Print the elements of an array using for loop

let arr = ["raj",10,true,null,"ramesh",false];

for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

// raj
// 10
// true
// null
// ramesh
// false

console.log(arr.reverse());


// Q1--create an array of numbers and add few numbers into it

let nums=[1,2,3,4,5,6,7,8]
nums.push(10);
nums.push(101);
nums.push(100);

console.log(nums);

// Q2-- keep adding numbers to the array until get a 0
let a;
do{
    a=Math.floor(Math.random()*10);
    nums.push(a);
    console.log(nums);
}while(a!==0);


// Q3-- filter for numbers divisible by 10 from a given array

filt=[10,25,30,60,65,80]

let newFil = filt.filter((items)=>{
    return items%10==0;
})
console.log(newFil);


// Q4-- create an array of sqaure of given numbers;

let sqaured = filt.map((items)=>{
    return items*items;
})

console.log(sqaured);


// Q5-- use reduce to calculate factorial of a given number from an array of first n natural numbers ;

let naturalNum = [1,2,3,4,5,6,7,8,9];

let fact = naturalNum.reduce((item1,item2)=>{
    return item1*item2;
})
console.log(fact);
