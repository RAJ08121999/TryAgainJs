// Use a forloop to print a string

let name = "skmsir"

for(let i = 0 ; i<(name.length) ; i++ ){
    console.log(name[i]);
}

// s
// k
// m
// s
// i
// r


// original string never changes because strings are immutable(unchangeable)

let naam = "Raj"
console.log(naam.slice(0,2));

// Q1- what will be the length of har\" if we use str.length

let str = "Har\""
console.log(str.length);//----->4 because \" escape sequence character are considered as single character

// Q2- explore includes , startswith and endswith

let sentence = "The quick brown fox jumps over the lazy dog";
let word = 'jumps';

console.log(`The word ${word} ${sentence.includes(word)?"is" :"is not" } present in the sentence`); //The word jumps ispresent in the sentence

console.log(sentence.startsWith("The"));//true
console.log(sentence.endsWith("The"));//false


// Q3- find the amout from the given str - Please give me Rs. 1000

let str1 = "Please give me Rs 1000";
let amount = Number.parseInt(str1.slice("Please give me Rs ".length));

console.log(amount);//1000

// Q-4 try to change the 4th character of a string, are you able to do it?

// No, strings are immutable so we can't change its contents
