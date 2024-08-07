// Let 1 represent ‘A’, 2 represents ‘B’, etc. Given a digit sequence, count the number of possible
// decodings of the given digit sequence. 

// Input: digits[] = "121"
// Output: 3
// The possible decodings are "ABA", "AU", "LA"

// Input: digits[] = "1234"
// Output: 3
// The possible decodings are "ABCD", "LCD", "AWD"

// ------------------------------------------------------------------ //

function countWaysMethodOne() {
    function countDecoding(input, n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        if (input[0] == '0') {
            return 0;
        }

        let count = 0; // We initialize the total count of decodings as 0

        // If the last digit is non-zero, recur for the remaining (n-1) digits and add the result to
        // the total count. 
        if (input[n - 1] > '0') {
            count = countDecoding(input, n - 1);
        }

        // If the last two digits form a valid character (or smaller than 27), recur for remaining
        // (n-2) digits and add the result to the total count.
        if (input[n - 2] == '1' ||
            (input[n - 2] == '2' &&
                input[n - 1] < '7')) {
            count += countDecoding(input, n - 2);
        }
        return count;
    }

    digits = ['1', '2', '3', '4'];
    console.log("Count is ", countDecoding(digits, digits.length));
}
countWaysMethodOne(); // Time Complexity is exponential

// We can optimize the above solution to work in O(n) time using Dynamic Programming. 
function countWaysMethodTwo() {
    function countDecoding(digits, n) {

        // A table to store results of subproblems
        let count = new Array(n + 1);
        count[0] = 1;
        count[1] = 1;

        if (digits[0] == '0') {
            return 0;
        }

        for (let i = 2; i <= n; i++) {
            count[i] = 0;

            // If the last digit is not 0,  then last digit must add to the number of words
            if (digits[i - 1] > '0') {
                count[i] = count[i - 1];
            }

            // If second last digit is smaller than 2 and last digit is smaller than 7, then last two
            // digits form a valid character
            if (digits[i - 2] == '1' ||
                (digits[i - 2] == '2' &&
                    digits[i - 1] < '7'))
                count[i] += count[i - 2];
        }
        return count[n];
    }

    digits = ['1', '2', '3', '4'];
    console.log("Count is ", countDecoding(digits, digits.length));
}
countWaysMethodTwo(); // Time Complexity is O(n) and it requires O(n) auxiliary space.