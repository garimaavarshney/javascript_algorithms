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
