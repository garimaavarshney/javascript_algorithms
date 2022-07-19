// ------------------------------------------------------------------ //

// 1) If the length of the array is less than 2, return the array.
// 2) Use Math.floor() to calculate the middle point of the array.
// 3) Use Array.prototype.slice() to slice the array in two and recursively call mergeSort() on the created subarrays.
// 4) Finally, use Array.from() and Array.prototype.shift() to combine the two sorted subarrays into one.

const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, arr.length));
    return Array.from({
        length: left.length + right.length
    }, () => {
        if (!left.length) return right.shift();
        else if (!right.length) return left.shift();
        else return left[0] > right[0] ? right.shift() : left.shift();
    });
};

console.log(mergeSort([21, 3, 14, 7, -3]));
