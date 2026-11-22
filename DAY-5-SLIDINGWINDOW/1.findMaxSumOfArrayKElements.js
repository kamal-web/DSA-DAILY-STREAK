// Maximum sum of subarray of size K
// Given an array of positive integers and an integer k, find the maximum sum of any contiguous subarray of size k.
// Input:
// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;

// Expected output:
// 9

function findMaxSumBruteForce(arr, k){
    let maxSum = -Infinity;
    for(let i=0;i<=arr.length-k;i++){
        let currentSum = 0;
        for(let j=i;j<i+k;j++){
            currentSum += arr[j];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log('Max Sum of k windows in arr', findMaxSumBruteForce(arr, k))

// Time: O(n × k)
// Space: O(1)

function maxSumSlidingWindow(arr, k){
    if(k<=0 || k> arr.length){
        return null;
    }
    let windowSum = 0;
    let maxSum = -Infinity;
    for(let i=0;i<k;i++){
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for(let right=k;right<arr.length;right++){
        windowSum += arr[right];
        windowSum -= arr[right-k];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;

}

const input = [2, 1, 5, 1, 3, 2];
const wSize = 3;
console.log('Max Sum of k windows in arr', maxSumSlidingWindow(input, wSize));

// Complexity:
// - Time: O(n)
// - Space: O(1)

function findMinSumSlidingWindow(arr, k){
    if(k<=0 || k>arr.length){
        return null;
    }
    let windowSum = 0;
    let minSum = -Infinity;
    for(let i=0;i<k;i++){
        windowSum += arr[i];
    }
    minSum = windowSum;

    for(let right=k;right<arr.length;right++){
        windowSum += arr[right];
        windowSum -= arr[right-k]
        minSum = Math.min(minSum, windowSum);
    }
    return minSum;
}

console.log('Max Sum of k windows in arr', findMinSumSlidingWindow(input, wSize));
