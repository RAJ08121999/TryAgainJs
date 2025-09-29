// // Q2- find the largest number in an array

function largest(arr){
    let MAX = arr[0];
    for(let element of arr){
        if(element>MAX){
            MAX=element;
        }
    }
    return MAX;
}

let array = [1,2,3,4,5,6,99];
let ans = largest(array);
console.log(ans);