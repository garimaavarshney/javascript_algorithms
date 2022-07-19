// ------------------------------------------------------------------ //

// 1) If the length of the array is less than 2, return the cloned array.
// 2) Use Math.floor() to calculate the index of the pivot element.
// 3) Use Array.prototype.reduce() and Array.prototype.push() to split the array into two subarrays.
// The first one contains elements smaller than or equal to pivot and the second on elements greather than it.
// Destructure the result into two arrays.
// 4) Recursively call quickSort() on the created subarrays.

const quickSort = arr => {
    if (arr.length < 2) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const [smaller, greater] = arr.reduce(
        (acc, val, i) => {
            if (val < pivot || (val === pivot && i != pivotIndex)) {
                acc[0].push(val);
            } else if (val > pivot) {
                acc[1].push(val);
            }
            return acc;
        },
        [
            [],
            []
        ]
    );
    return [...quickSort(smaller), pivot, ...quickSort(greater)];
};

console.log(quickSort([1, 6, 1, 5, 3, 2, -1, 4]));
