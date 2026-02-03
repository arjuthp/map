
// Q20: Implement Promise.all manually
console.log("\nQ20: Implement your own Promise.all");
// function myPromiseAll(promises) {
//     // Your code here
// }
// Test:

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        
        promises.forEach((promise, i) => {
            promise
                .then(result => {
                    results[i] = result;
                    count++;
                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

myPromiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(console.log);

