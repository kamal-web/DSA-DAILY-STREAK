// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

function findUniqueCharByBruteforce(str){
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count === 1){
            return i;
        }
    }
    return -1;
}
let s = "leetcode";
console.log('First unique char in string', findUniqueCharByBruteforce(s));
s = "loveleetcode";
console.log('First unique char in string', findUniqueCharByBruteforce(s));
s = "aabb";
console.log('First unique char in string', findUniqueCharByBruteforce(s));

//Hashmap
function findUniqueCharByPatter(str){
    const freqMap = new Map();
    for(const char of str){
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for(let i=0;i<str.length;i++){
        if(freqMap.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
    
}

s = "leetcode";
console.log('First unique char in string', findUniqueCharByPatter(s));
s = "loveleetcode";
console.log('First unique char in string', findUniqueCharByPatter(s));
s = "aabb";
console.log('First unique char in string', findUniqueCharByPatter(s));
