// A palindrome reads the same forward and backward, ignoring spaces, punctuation and capitalization.

// Input: "A man, a plan, a canal: Panama"
// Output: true

function isValidPolindromByBruteForce(str){
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}
let s = "A man, a plan, a canal: Panama";
console.log('Is a validPolindrom', isValidPolindromByBruteForce(s))

//TWo POINTER
function isValidPolindromByTwoPointer(str){
    let left=0;
    let right=str.length-1;

    // if(left < right && !/[^a-z0-9]/i)
}
console.log('Is a validPolindrom', isValidPolindromByBrisValidPolindromByTwoPointeruteForce(s))