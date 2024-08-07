// Given an array and a number k where k is smaller than the size of the array, we need to find the
// k’th smallest element in the given array. It is given that all array elements are distinct.

// Input: arr[] = {7, 10, 4, 3, 20, 15}, k = 3 
// Output: 7
// Input: arr[] = {7, 10, 4, 3, 20, 15}, k = 4 
// Output: 10 

// ------------------------------------------------------------------ //

// Solution 1:
// Sort the given array using an O(N log N) sorting algorithm like Merge, Heap Sort, etc, and
// return the element at index k-1 in the sorted array. Time Complexity for this is O(N log N)
function smallestSolutionOne(arr, k) {
    arr.sort((a, b) => a - b);

    return arr[k - 1];
}

// Solution 2:
// Calculate number of elements less than equal to mid
function count(nums, mid) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= mid) count++;
    }

    return count;
}

function smallestSolutionTwo(nums, k) {
    let low = Number.MAX_VALUE,
        high = Number.MIN_VALUE;

    for (let i = 0; i < nums.length; i++) {
        low = Math.min(low, nums[i]);
        high = Math.max(high, nums[i]);
    }

    // Our answer range lies between minimum and maximum element of the array on which Binary Search is Applied
    while (low < high) {
        let mid = Math.floor(low + ((high - low) / 2));

        /* If the count of number of elements in the array less than equal to mid is less than k then
        increase the number. Otherwise decrement the number and try to find a better answer. */
        if (count(nums, mid) < k) low = mid + 1;
        else high = mid;
    }

    return low;
}

console.log(smallestSolutionTwo([7, 10, 4, 3, 20, 15], 3));
