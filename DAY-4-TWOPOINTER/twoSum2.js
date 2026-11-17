// You are given a 1-indexed array of integers numbers that is already sorted in non-decreasing order.

// Find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers index1 and index2 as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

function twoSumBruteForce(a, t){
    for(let i=0;i<=a.length-1;i++){
        for(let j=i+1;j<=a.length-1;j++){
            if(a[i]+a[j] === t){
                return [i+1,j+1];
            }
        }
    }
    return 'not found';
}
let numbers = [2,7,11,15], target = 9;
console.log('indexes of two sum', twoSumBruteForce(numbers, target));
numbers = [2,3,4], target = 6;
console.log('indexes of two sum', twoSumBruteForce(numbers, target));
numbers = [-1,0], target = -1;
console.log('indexes of two sum', twoSumBruteForce(numbers, target));
//complexity
// Time:- O(n^2),
//space:- O(1),


//Two Pointer
console.log('----TWO POINTER----');
function twoSumWithTwoPointer(arr, target){
    let left=0;
    let right=arr.length-1;
    //Since array is sorted
    while(left < right){
        let sum = arr[left]+arr[right]
        if(sum === target){
            return [left+1, right+1];
        }
        if( sum < target){
            left++;
        }
        if(sum > target){
            right--;
        }
    }
    return 'not found';
}
numbers = [2,7,11,15], target = 9;
console.log('indexes of two sum', twoSumWithTwoPointer(numbers, target));
numbers = [2,3,4], target = 6;
console.log('indexes of two sum', twoSumWithTwoPointer(numbers, target));
numbers = [-1,0], target = -1;
console.log('indexes of two sum', twoSumWithTwoPointer(numbers, target));
//complexity
// Time:- O(n),
//space:- O(1),
