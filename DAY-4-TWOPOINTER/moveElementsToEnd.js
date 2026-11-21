// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

function moveAllZerosToTheEnd(nums){
    let slow=0;
    let temp;
    for(let fast=0;fast<nums.length;fast++){
        if(nums[fast] !== 0){
            temp=nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            slow++;
        }
    }
    return nums;
}

let input = [0,1,0,3,12]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input = [0, 1, 0, 9, 0]	//expected[1, 9, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input = [0, 0, 1, 0, 9, 0, 5]	//expected [1, 9, 5, 0, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[1, 0, 2, 0, 3, 0, 4]	//[1, 2, 3, 4, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[0, 0, 0, 1, 2, 3]	//[1, 2, 3, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[1, 2, 3, 0, 0, 0]	//[1, 2, 3, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[0, 0, 0, 0]	//[0, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[1, 2, 3, 4]	//[1, 2, 3, 4]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[0]	//[0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[5, 0, 0, 2, 0, 8, 0, 3]	//[5, 2, 8, 3, 0, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))
input =[0, -1, 0, -5, 2, 0]	//[-1, -5, 2, 0, 0, 0]
console.log('formattedArray', moveAllZerosToTheEnd(input))