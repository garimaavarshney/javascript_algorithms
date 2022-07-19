// Write a program to reverse digits of a number
// Input : num = 12345
// Output: 54321

// ------------------------------------------------------------------ //

function reverseDigits(num) {
    let number = 0;
    while (num > 0) {
        number = number * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return number;
}
console.log(reverseDigits(264883));

function reverseDigitsRecursion(num) {
    let number = 0;
    let base = 1;

    function reversDigits(num) {
        if (num > 0) {
            reversDigits(Math.floor(num / 10));
            number += (num % 10) * base;
            base *= 10;
        }
        return number;
    }

    return reversDigits(num);
}
console.log(reverseDigitsRecursion(264883));