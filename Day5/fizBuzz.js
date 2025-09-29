// Q5 - Print numbers from 1 to 100.

// - For multiples of 3, print "Fizz".
// - For multiples of 5, print "Buzz".
// - For multiples of both, print "FizzBuzz".


for(let i = 1 ; i<=100 ; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz",i);
    }
    else if(i%3===0){
        console.log("Fizzzzz",i);
    }
    else if(i%5===0){
        console.log("Buzzzzz",i);
    }
}

