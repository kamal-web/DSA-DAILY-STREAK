//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

//BruteForce
function isValidAnagramBruteForce(fInput,sInput){
    if(fInput.length !== sInput.length){
        return false;
    }
    let UpdatedfInput = fInput.split('').sort().join('');
    let UpdatedsInput = sInput.split('').sort().join('');

    return UpdatedfInput === UpdatedsInput
}
let s = "anagram";
let t = "nagaram";
console.log(isValidAnagramBruteForce(s, t));
