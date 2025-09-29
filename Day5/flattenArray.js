
// Q7-Write a function to flatten a nested array into a single array.

let flatten = [1, [2, [3, 4]], 5];

let newArr = [];

function flattenedArray(arr){
    for(let element of arr){
        if(Array.isArray(element)){
            flattenedArray(element);
        }
        else{
            newArr.push(element);
            console.log(newArr);
        }
    }
}

flattenedArray(flatten);

