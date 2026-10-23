// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

let nums = [1,2,3,1];
function containsDuplicatesBruteforce(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(`${nums} contains duplicates?-->`, containsDuplicatesBruteforce(nums));
nums = [1,2,3,4];
console.log(`${nums} contains duplicates?-->`, containsDuplicatesBruteforce(nums));
nums = [1,1,1,3,3,4,3,2,4,2]
console.log(`${nums} contains duplicates?-->`,containsDuplicatesBruteforce(nums));

//complexity
// Time:- O(n^2);
// space:- O(1);

console.log('\ncontainsDuplicatesPattern two sum + set\n')
//two sum + set;
function containsDuplicatesPattern(arr){
    let setMap = new Set();
    for(let i=0;i<arr.length;i++){
        if(setMap.has(arr[i])){
            return true;
        } else{
            setMap.add(arr[i]);
        }
    }
    return false;
}
nums = [1,2,3,1];
console.log(`${nums} contains duplicates?-->`, containsDuplicatesPattern(nums));
nums = [1,2,3,4];
console.log(`${nums} contains duplicates?-->`, containsDuplicatesPattern(nums));
nums = [1,1,1,3,3,4,3,2,4,2]
console.log(`${nums} contains duplicates?-->`,containsDuplicatesPattern(nums));

//complexity
// Time:- O(n);
// space:- O(n);