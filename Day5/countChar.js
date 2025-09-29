
// Q4 - Write a function that counts how many times a character appears in a string.

function Occurence(str,character){
    let count = 0;
    for(let char of str){
        if(char===character){
            count++;
        }
    }
    return count;
}

let word = "programming";
let char = "m";
let ans = Occurence(word,char);
console.log(`character ${char} is present in word-> ${word} , ${ans} times`);

