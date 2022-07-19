// Find second largest element in array in javascript.
// If there is no second largest element return -1.

// Input : [5,6,2,1,3,6]
// Output: 5

// Input : [5, 5]
// Output: -1

// ------------------------------------------------------------------ //

function findSecondLargest(array) {
    const distinct = [...new Set(array)]; // Make a new array, with duplicates removed
    const distinctSorted = distinct.sort((a, b) => a - b); // Sort it.
    const distinctSortedLength = distinctSorted.length;
    return distinctSortedLength > 1 ? distinctSorted[distinctSortedLength - 2] : -1;
}
console.log(findSecondLargest([4, 5, 1, 3, 1, 1, 4, 6]));

function findSecondLargestWithoutSorting(array) {
    const distinctArray = [...new Set(array)]; // Make a new array, with duplicates removed
    const largestNum = Math.max(...distinctArray); // Get the largest number
    const filteredArray = distinctArray.filter((num) => num < largestNum); // filter out max number from the array
    return filteredArray.length > 1 ? Math.max(...filteredArray) : -1; // Return the new largest number
}
console.log(findSecondLargestWithoutSorting([4, 5, 1, 3, 1, 1, 4, 6]));
