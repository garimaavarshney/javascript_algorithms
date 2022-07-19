// Calculate the greatest common divisor between two or more numbers.
// Input: 12, 8, 32
// Output: 4

// ------------------------------------------------------------------ //

// 1) Base case is when y equals 0. In this case, return x.
// 2) Otherwise, return the GCD of y and the remainder of the division x / y.

const gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
};

console.log(gcd(12, 8, 32, 2));
