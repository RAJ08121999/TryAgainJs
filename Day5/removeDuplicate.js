// Q6- Remove Duplicates from an Array

function removeDuplicate(arr){
    let newArr=[];
    for(let element of arr){
        if(!(newArr.includes(element))){
            newArr.push(element);
        }
    }
    return newArr;
}

let array = [1,2,1,1,3,4,5,4,5];

let ansArray = removeDuplicate(array);
console.log(ansArray);

