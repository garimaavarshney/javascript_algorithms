// Given a set of n elements, find number of ways of partitioning it.

// Input:  n = 2
// Output: Number of ways = 2
// Explanation: Let the set be {1, 2}
//             { {1}, {2} } 
//             { {1, 2} }

// Input:  n = 3
// Output: Number of ways = 5
// Explanation: Let the set be {1, 2, 3}
//              { {1}, {2}, {3} }
//              { {1}, {2, 3} }
//              { {2}, {1, 3} }
//              { {3}, {1, 2} }
//              { {1, 2, 3} }

function bellNumber(n) {
    let partitions = new Array(n + 1);

    for (let i = 0; i < n + 1; i++) {
        partitions[i] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
            if (j > i) partitions[i][j] = 0;
            else if (i == j) partitions[i][j] = 1;
            else if (i == 0 || j == 0) partitions[i][j] = 0;
            else partitions[i][j] = j * partitions[i - 1][j] + partitions[i - 1][j - 1];
        }
    }

    return partitions;

}

function returnPartitions(partitions, n) {
    let result = 0;
    for (let i = 0; i < n + 1; i++) {
        result += partitions[n][i];
    }
    console.log(result);
}

returnPartitions(bellNumber(5), 5);
