// Minimum swaps required to bring all elements less than or equal to k together.
// Input:  arr[] = {2, 1, 5, 6, 3}, k = 3
// Output: 1
// Input:  arr[] = {2, 7, 9, 5, 8, 7, 4}, k = 5
// Output: 2

// ------------------------------------------------------------------ //

// Explanation: To bring elements 2, 1, 3 together, swap element '5' with '3' such that final array will be arr[] = {2, 1, 3, 6, 5}

// Solution:
// 1) Find count of all elements which are less than or equals to ‘k’.
// 2) Using two pointer technique for window of length count, track number of elements in this range are greater than ‘k’.
// 3) Repeat step 2, for every window of length count and take minimum of step 2 count among them. This will be the answer.

function minSwaps(arr, k) {
    const len = arr.length;

    let count = 0;
    for (let i = 0; i < len; ++i) {
        if (arr[i] <= k) {
            ++count;
        }
    }

    let greater = 0;
    for (let i = 0; i < count; ++i) {
        if (arr[i] > k) {
            ++greater;
        }
    }

    let ans = greater;
    for (let i = 0, j = count; j < len; ++i, ++j) {
        if (arr[i] > k) {
            --greater;
        }
        if (arr[j] > k) {
            ++greater;
        }
        ans = Math.min(ans, greater);
    }
    return ans;
}

const arr = [2, 1, 5, 6, 3];
const k = 3;
const arr1 = [2, 7, 9, 5, 8, 7, 4];
const k2 = 5;
console.log(minSwaps(arr, k));
console.log(minSwaps(arr1, k2));
