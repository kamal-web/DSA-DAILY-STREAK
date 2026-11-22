// Longest substring without repeating characters
// Scenario

// You are building a session analytics service. You receive a user's activity sequence and need to identify the longest continuous segment that contains no duplicate characters.

// Problem:

// Given a string s, return the length of the longest substring without repeating characters.

// A substring must be contiguous.
// Examples
// Input	Expected output
// "abcabcbb"	3
// "bbbbb"	1
// "pwwkew"	3
// "abcdef"	6
// "abba"	2
// "aab"	2
// "dvdf"	3

// Constraints
// - \(0 \leq s.length \leq 100000\)
// - Case-sensitive.
// - Spaces are valid characters.
// - Do not sort the string.
// - Target time complexity: O(n).

function largestSubString(s){
    let left=0;
    let maxlength = 0;
    let charSet = new Set();
    for(let right=0;right<s.length;right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);

        maxlength = Math.max(maxlength, right-left+1);
    }
    return maxlength;
}
let input = "abcabcbb";
console.log('Longest subString', largestSubString(input));
input = "bbbbb";//	1
console.log('Longest subString', largestSubString(input));

input = "pwwkew";//	3
console.log('Longest subString', largestSubString(input));

input = "abcdef";//	6
console.log('Longest subString', largestSubString(input));

input = "abba";//	2
console.log('Longest subString', largestSubString(input));

input = "aab";//	2
console.log('Longest subString', largestSubString(input));

input = "dvdf";//	3
console.log('Longest subString', largestSubString(input));
