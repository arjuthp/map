// Promise Static Methods

// 1. Promise.resolve() - Creates a resolved promise
const resolvedPromise = Promise.resolve("Already resolved");
resolvedPromise.then(result => console.log("Resolved:", result));

// 2. Promise.reject() - Creates a rejected promise
const rejectedPromise = Promise.reject(new Error("Already rejected"));
rejectedPromise.catch(error => console.log("Rejected:", error.message));

// 3. Promise.all() - Waits for all promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
    .then(values => console.log("All resolved:", values))
    .catch(error => console.log("One failed:", error));

// 4. Promise.race() - Returns first promise to settle
const promise4 = new Promise(resolve => setTimeout(() => resolve('first'), 500));
const promise5 = new Promise(resolve => setTimeout(() => resolve('second'), 1000));

Promise.race([promise4, promise5])
    .then(value => console.log("Race winner:", value));

// 5. Promise.allSettled() - Waits for all promises to settle (resolve or reject)
const promise6 = Promise.resolve(33);
const promise7 = new Promise(resolve => setTimeout(() => resolve(66), 100));
const promise8 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('failed')), 50));

Promise.allSettled([promise6, promise7, promise8])
    .then(results => console.log("All settled:", results));

// 6. Promise.any() - Returns first promise to resolve
const promise9 = Promise.reject(new Error('failed 1'));
const promise10 = Promise.reject(new Error('failed 2'));
const promise11 = Promise.resolve('success');

Promise.any([promise9, promise10, promise11])
    .then(value => console.log("Any resolved:", value))
    .catch(error => console.log("All failed:", error));
