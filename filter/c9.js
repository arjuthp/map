
console.log(`Question 9: Get Prime Numbers`)
// Context: You need to filter a list of numbers to show only prime numbers (numbers divisible only by 1 and themselves).
// Input:


// javascript

// Your Task: Use filter to get only prime numbers.
// Expected Output:


// javascript
// [2, 3, 5, 7, 11]

const numberlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const primeNumbers = numberlist.filter(num => {
    if(num <= 1) return false;
    for(let i = 2; i* i <= num; i++ )if(num % i ===0) return false;
    return true;
});
console.log(primeNumbers);