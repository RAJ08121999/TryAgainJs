// Q3- Check for palindrome

function Reverse(str){
    let rev = "";
    for(let char = str.length-1 ; char>=0 ; char-- ){
        rev += str[char];
    }
    return rev;
}

function palindrome(str){
    
    let res = Reverse(str);

    if(str === res){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}

palindrome("madam");