function hello(){//function declaration
    console.log("hello jee");//function definition
}
hello();//function call



// function with parameters

function add(a,b){
    return a+b;
}
//a and b is parameter it acts as local variables inside the function 
let x=5;
let y=10;

let sum = add(x,y);//function call

console.log(sum);//15


//<----------arrow function----------->

const summation = (p,q) => {
    return p+q;
}

console.log(summation(6,9));


const namaskar = () =>console.log("hello jee kaise ho?");


namaskar();

// we can remove the { } if the code is one liner