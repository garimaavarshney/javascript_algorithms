// Replaces the last occurrence of a pattern in a string.

// ------------------------------------------------------------------ //

// 1) Use the RegeExp constructor to create a new regular expression using the RegExp.prototype.source of the pattern and adding the 'g' flag to it.Use String.prototype.match() and Array.prototype.slice() to get the last match, if any.
// 2) Use String.prototype.lastIndexOf() to find the last occurrence of the match in the string.
// 3) If a match is found, use String.prototype.slice() and a template literal to replace the matching substring with the given replacement.

const replaceLast = (str, pattern, replacement) => {
    const match =
        typeof pattern === 'string' ?
            pattern :
            (str.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0];
    if (!match) return str;
    const last = str.lastIndexOf(match);
    return last !== -1 ?
        `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}` :
        str;
};

console.log(replaceLast('abcabdeabbaf', 'ab', 'gg'));
