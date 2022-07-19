// Counts the occurrences of a substring in a given string.

// ------------------------------------------------------------------ //

// 1) Use Array.prototype.indexOf() to look for searchValue in str.
// 2) Increment a counter if the value is found and update the index, i.
// 3) Use a while loop that will return as soon as the value returned from Array.prototype.indexOf() is -1.

const countSubstrings = (str, searchValue) => {
    let count = 0;
    let i = 0;
    while (true) {
        const index = str.indexOf(searchValue, i);
        if (index !== -1) [count, i] = [count + 1, index + 1];
        else return count;
    }
};

console.log(countSubstrings('tiktok tok tok tik tok tik', 'tik'));