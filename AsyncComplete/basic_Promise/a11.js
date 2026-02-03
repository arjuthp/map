
// Q11: Use Promise.all
console.log("Q11: Wait for 3 promises to complete");
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

// Use Promise.all:

Promise.all([p1, p2, p3])
    .then(results => {
        console.log("All results:", results);  // [1, 2, 3]
        const sum = results.reduce((a, b) => a + b, 0);
        console.log("Sum:", sum);  // 6
    });
