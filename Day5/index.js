// // let arr = [1, 2, 3, 4, 5];
// let MAX = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > MAX) {
//         MAX = arr[i];
//     }
// }
// console.log(MAX);


function highestNum(arr){
    let MAX = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > MAX) {
            MAX = arr[i];
        }
    }
    return MAX;
}

let arr = [1,2,3,4,5,6]

let ans = highestNum(arr)
console.log(ans);

let sentence = "hello this is hello world"

// ["hello","this","is","hello","world"]

let str;

function largestWord (sentence){
    let words = sentence.split(" ");
    let max = words[0].length;
    let maxword = words[0];

    for(let word of words){
        
        let len = word.length;

        if(len>max){
            max=len;
            maxword = word;
        }
        
    }

    return maxword;
}

let ans1 = largestWord(sentence)
console.log(ans1)


// Q1 


