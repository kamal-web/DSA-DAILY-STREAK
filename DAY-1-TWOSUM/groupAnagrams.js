// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// function groupAnagramsByBruteforce(inptArr){
//     let groupedAnagrams = {}
//     for(let i=0;i<inptArr.length;i++){
//         const sortedWord = [...inptArr[i]].sort().join('');
//         console.log('if1', inptArr[i]);
//         if(!groupedAnagrams[sortedWord]){
//             groupedAnagrams[sortedWord] = [inptArr[i]]
//         }else{
//             for(let j=i+1;j<inptArr.length;j++){
//             console.log('if2', inptArr[j]);

//             const sortedSecondWord = [...inptArr[j]].sort().join('');
//             console.log('sorted', sortedWord, sortedSecondWord, sortedWord === sortedSecondWord);
//             if(sortedWord === sortedSecondWord){
//                 if(groupedAnagrams[sortedWord]){
//                     console.log('in if3', sortedWord, groupedAnagrams);
//                     groupedAnagrams[sortedWord] = [...groupedAnagrams[sortedWord], inptArr[j]]
//                 } else{
//                     console.log('nested else', inptArr[j])
//                     groupedAnagrams[sortedWord] = [inptArr[j]];
//                 }
//             }else{
//                 groupedAnagrams[sortedWord] = [inptArr[i]];
//             }
//             }
//         }
        
//     }
//     return groupedAnagrams;
// }

function groupAnagramsByBruteforce(inptArr){
    let groups = [];
    
    for(let item of inptArr){
        const sortedWord = [...item].sort().join('');
        let foundGroup = false;
        for(let group of groups){
            let firstSortedItem = [...group[0]].sort().join('');
            if(sortedWord === firstSortedItem){
                group.push(item);
                foundGroup = true;
                break;
            } 
        }
        if(!foundGroup){
            groups.push([item]);
        }
    }
    return groups;
}
let strs = ["eat","tea","tan","ate","nat","bat"]

console.log('Gruped anagrams', groupAnagramsByBruteforce(strs));
strs = [""]
console.log('Gruped anagrams', groupAnagramsByBruteforce(strs));
strs = ["a"]
console.log('Gruped anagrams', groupAnagramsByBruteforce(strs));

function groupAnagramsByCanonicalKey(strs){
    const anagramMap = new Map();

    for(let word of strs){
        let canonicalKey = [...word].sort().join('');
        if(!anagramMap.has(canonicalKey)){
            anagramMap.set(canonicalKey, []);
        }
        anagramMap.get(canonicalKey).push(word);
    }
    return [...anagramMap.values()];
}
strs = ["eat","tea","tan","ate","nat","bat"]
console.log('Grouped Anagrams By Canonical Key', groupAnagramsByCanonicalKey(strs));
strs = ["a"]
console.log('Grouped Anagrams By Canonical Key', groupAnagramsByCanonicalKey(strs));
strs = [""]
console.log('Grouped Anagrams By Canonical Key', groupAnagramsByCanonicalKey(strs));


//HASHMAP + FREQUENCY
function groupAnagramsByFrequency(strs){
    const anagramMap = new Map();
    for(const word of strs){
        const freqMap = new Array(26).fill(0);
        for(const char of word){
            const index = char.charCodeAt(0) - 97;
            freqMap[index]++;
        }
        const canonicalKey = freqMap.join('#');
        if(!anagramMap.has(canonicalKey)){
            anagramMap.set(canonicalKey, [])
        }
        anagramMap.get(canonicalKey).push(word);
    }
    return [...anagramMap.values()];
}
strs = ["eat","tea","tan","ate","nat","bat"]
console.log('groupAnagramsByHashMapFrequency',groupAnagramsByFrequency(strs));
strs = ["a"]
console.log('groupAnagramsByHashMapFrequency',groupAnagramsByFrequency(strs));
strs = [""]
console.log('groupAnagramsByHashMapFrequency',groupAnagramsByFrequency(strs));
