// You are given an integer array nums and an integer target.
// Return the indices of two distinct elements whose sum equals the target.
// nums = [2, 7, 11, 15];
// target = 9;

// // Output
// [0, 1]

let nums = [2, 7, 11, 15];
let target = 9;

//Bruteforce
function findTwoSumPairBruteForce(arr, target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [i, j];
            }
        }
    }
    return 'No Pair Found';
}

console.log(findTwoSumPairBruteForce(nums, target));

//complexity
// Time:- O(n^2);
// space:- O(1);

//Two sum + Hashing
function findTwoSumPairPattern(arr, target){
    const complementMap = new Map();
    let complement
    for(let i=0;i<arr.length;i++){
        complement = target - arr[i];
        if(complementMap.has(complement)){
            return [complementMap.get(complement), i];
        }else{
            complementMap.set(arr[i], i);
        }
    }
    return 'No Pair Found';
    
}

console.log(findTwoSumPairPattern(nums, target));

//complexity
// Time:- O(n);
// space:- O(n);
