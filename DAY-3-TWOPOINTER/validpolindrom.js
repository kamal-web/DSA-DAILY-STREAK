// A palindrome reads the same forward and backward, ignoring spaces, punctuation and capitalization.

// Input: "A man, a plan, a canal: Panama"
// Output: true

function isValidPolindromByBruteForce(str){
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = [...cleaned].reverse().join('');

    return cleaned === reversed;
}
let s = "A man, a plan, a canal: Panama";
console.log('Is a validPolindrom', isValidPolindromByBruteForce(s));
s= "race a car"
console.log('Is a validPolindrom', isValidPolindromByBruteForce(s));
s = "race car"
console.log('Is a validPolindrom', isValidPolindromByBruteForce(s));
s = " "
console.log('Is a validPolindrom', isValidPolindromByBruteForce(s));

//TWo POINTER
function isValidPolindromByTwoPointer(str){
    let left=0;
    let right=str.length-1;
    
    while(left<right){
        if(left<right && !/[a-z0-9]/i.test(str[left])){
            left++;
            continue;
        }
        if(left<right && !/[a-z0-9]/i.test(s[right])){
            right--;
            continue;
        }
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log('checking Polindrome with TWO POINTER');
s= "A man, a plan, a canal: Panama";
console.log('Is a validPolindrom', isValidPolindromByTwoPointer(s));
s= "race a car"
console.log('Is a validPolindrom', isValidPolindromByTwoPointer(s));
s = "race car"
console.log('Is a validPolindrom', isValidPolindromByTwoPointer(s));
s = " "
console.log('Is a validPolindrom', isValidPolindromByTwoPointer(s));