
// Exercise 3: Chain multiple promises
console.log("\n--- Exercise 3: Promise Chaining ---");
// TODO: Create a chain where:
// 1. First promise returns a number
// 2. Second promise multiplies it by 2
// 3. Third promise adds 10 to it
// 4. Log the final result

const getNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 1000);
}).then(num => {
    console.log("Initial number:", num);
    return num * 2;
}).then(doubled => {
    console.log("Doubled:", doubled);
    return doubled + 10;
}).then(final => {
    console.log("Final result:", final);
});

