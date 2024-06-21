// first question solve
function countCharacters(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage:
const result = countCharacters("hello world");
console.log(result);  // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// second question solve
function fibonacci(n) {
    if (n < 0) {
        return "Input should be a non-negative integer";
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let fib;

    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

// Example usage:
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2
console.log(fibonacci(4));  // 3
console.log(fibonacci(5));  // 5
console.log(fibonacci(10)); // 55

// third question solve
function sortNumbers(arr) {
    // Use the Array.prototype.slice method to create a copy of the input array
    let sortedArray = arr.slice();

    // Use the Array.prototype.sort method to sort the array in ascending order
    sortedArray.sort((a, b) => a - b);

    return sortedArray;
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers);  // [1, 2, 5, 5, 6, 9]
