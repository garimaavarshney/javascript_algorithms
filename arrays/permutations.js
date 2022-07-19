// Generates all permutations of an array's elements (contains duplicates).

// ------------------------------------------------------------------ //

// Solution:
// 1) For each element in the given array, create all the partial permutations for the rest of its elements.
// 2) Use Array.prototype.map() to combine the element with each partial permutation, then Array.prototype.reduce() to combine all permutations in one array.

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};

console.log(permutations([3, 6, 2]));
