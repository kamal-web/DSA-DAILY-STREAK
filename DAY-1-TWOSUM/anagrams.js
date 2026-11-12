//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

//BruteForce
console.log('\nisValidAnagramBruteForce');
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
s = "rat";
t = "car";
console.log(isValidAnagramBruteForce(s, t));

//2nd way Anagrams Bruteforce
console.log('\nisValidAnagramByBruteforce2');
function isValidAnagramBruteForce(fInput, sInput){
    if(fInput.length !== sInput.length){
        return false;
    }
    const sortedFInput = [...fInput].sort();
    const sortedSInput = [...sInput].sort();

    return sortedFInput.every((char, i) => char === sortedSInput[i]);
}

s = "anagram";
t = "nagaram";
console.log(isValidAnagramByMap(s,t));
s = "rat";
t = "car";
console.log(isValidAnagramByMap(s,t));


//Map
console.log('\nisValidAnagramByMap');
function isValidAnagramByMap(fInput, sInput){
    if(fInput.length !== sInput.length){
        return false;
    }

    let frequencyMap = new Map();
    for(const chr of fInput){
        frequencyMap.set(chr, (frequencyMap.get(chr)|| 0) +1)
    }

    for(const chr of sInput){
        if(frequencyMap.get(chr) === 1){
            frequencyMap.delete(chr);
        } else{
            frequencyMap.set(chr, (frequencyMap.get(chr)) - 1);
        }
        
    }

    return frequencyMap.size === 0;

}
s = "anagram";
t = "nagaram";
console.log(isValidAnagramByMap(s,t));
s = "rat";
t = "car";
console.log(isValidAnagramByMap(s,t));


//fixed size frequency array - (best for lowercase English letters))
console.log('\nisValidAnagramByFixedArray');
function isValidAnagramByFixedArray(fInput, sInput){
    if(fInput.length !== sInput.length){
        return false;
    }

    let freqArr = new Array(26).fill(0);

    for(let i=0;i<fInput.length;i++){
        freqArr[fInput.charCodeAt(i) - 97]++;
        freqArr[sInput.charCodeAt(i) - 97]--;
    }

    return freqArr.every( count => count === 0);

}

s = "anagram";
t = "nagaram";
console.log(isValidAnagramByFixedArray(s,t));
s = "rat";
t = "car";
console.log(isValidAnagramByFixedArray(s,t));

