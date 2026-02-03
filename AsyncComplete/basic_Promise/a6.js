// Q6: Chain three operations
console.log("Q6: Chain: start with 5 → multiply by 2 → add 10 → log result");

Promise.resolve(5)
    .then(num => {
        console.log("Start:", num);        // 5
        return num * 2;                    // Return 10
    })
    .then(num => {
        console.log("After *2:", num);     // 10
        return num + 10;                   // Return 20
    })
    .then(num => {
        console.log("After +10:", num);    // 20
    });

