// ------------------------------------------------------------------ //

// 1) Use a for loop to iterate over elements in the array.
// 2) Use Array.prototype.slice() and Array.prototype.reduce() to find the index of the minimum element in the subarray to the right of the current index.
// Perform a swap, if necessary.

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        const min = arr
            .slice(i + 1)
            .reduce((acc, val, j) => (val < arr[acc] ? j + i + 1 : acc), i);
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
};

console.log(selectionSort([1, 6, 1, 5, 3, 2, -1, 4]));
