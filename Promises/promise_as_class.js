// Is Promise a Class? YES!

console.log("=== Promise as a Class ===\n");

// 1. Promise is a built-in JavaScript class
console.log("typeof Promise:", typeof Promise); // "function" (classes are functions in JS)
console.log("Promise.name:", Promise.name); // "Promise"
console.log("Is Promise a constructor?", Promise.prototype.constructor === Promise); // true

// 2. You create Promise instances using 'new' keyword (like classes)
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello");
});

console.log("\nmyPromise instanceof Promise:", myPromise instanceof Promise); // true
console.log("myPromise.constructor.name:", myPromise.constructor.name); // "Promise"

// 3. Promise has static methods (class methods)
console.log("\n--- Promise Static Methods ---");
console.log("Promise.all:", typeof Promise.all); // function
console.log("Promise.race:", typeof Promise.race); // function
console.log("Promise.resolve:", typeof Promise.resolve); // function
console.log("Promise.reject:", typeof Promise.reject); // function
console.log("Promise.allSettled:", typeof Promise.allSettled); // function

// 4. Promise has instance methods (prototype methods)
console.log("\n--- Promise Instance Methods ---");
console.log("myPromise.then:", typeof myPromise.then); // function
console.log("myPromise.catch:", typeof myPromise.catch); // function
console.log("myPromise.finally:", typeof myPromise.finally); // function

// 5. You can even extend Promise class (though rarely needed)
class MyCustomPromise extends Promise {
    constructor(executor) {
        super(executor);
        this.createdAt = new Date();
    }
    
    getAge() {
        return Date.now() - this.createdAt.getTime();
    }
}

const customPromise = new MyCustomPromise((resolve) => {
    setTimeout(() => resolve("Custom!"), 100);
});

console.log("\n--- Custom Promise Class ---");
console.log("customPromise instanceof Promise:", customPromise instanceof Promise); // true
console.log("customPromise instanceof MyCustomPromise:", customPromise instanceof MyCustomPromise); // true

customPromise.then(result => {
    console.log("Custom promise result:", result);
    console.log("Age of promise:", customPromise.getAge(), "ms");
});

// 6. Promise class structure (conceptual)
console.log("\n--- Promise Class Structure (Conceptual) ---");
console.log(`
class Promise {
    constructor(executor) {
        // executor is (resolve, reject) => {}
        // Internal state: pending, fulfilled, rejected
        // Internal value: result or error
    }
    
    // Instance methods
    then(onFulfilled, onRejected) { }
    catch(onRejected) { }
    finally(onFinally) { }
    
    // Static methods
    static all(promises) { }
    static race(promises) { }
    static resolve(value) { }
    static reject(reason) { }
    static allSettled(promises) { }
}
`);

// 7. Using Promise static methods
console.log("\n--- Using Promise Static Methods ---");

// Promise.resolve() - creates an already resolved promise
const resolvedPromise = Promise.resolve("Already resolved!");
resolvedPromise.then(value => console.log("Promise.resolve():", value));

// Promise.reject() - creates an already rejected promise
const rejectedPromise = Promise.reject("Already rejected!");
rejectedPromise.catch(error => console.log("Promise.reject():", error));

// Promise.all() - waits for all promises
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => console.log("Promise.all():", results));

// 8. Comparison with other classes
console.log("\n--- Comparison with Other Built-in Classes ---");
console.log("Array is a class:", typeof Array); // function
console.log("Object is a class:", typeof Object); // function
console.log("Date is a class:", typeof Date); // function
console.log("Promise is a class:", typeof Promise); // function

const arr = new Array(1, 2, 3);
const obj = new Object();
const date = new Date();
const promise = new Promise(resolve => resolve());

console.log("\narr instanceof Array:", arr instanceof Array);
console.log("obj instanceof Object:", obj instanceof Object);
console.log("date instanceof Date:", date instanceof Date);
console.log("promise instanceof Promise:", promise instanceof Promise);

// 9. Key Takeaway
console.log("\n=== KEY TAKEAWAY ===");
console.log(`
✅ YES, Promise is a CLASS in JavaScript!

- It's a built-in class (constructor function)
- You create instances using 'new Promise()'
- It has static methods: Promise.all(), Promise.race(), etc.
- It has instance methods: .then(), .catch(), .finally()
- You can extend it to create custom promise classes
- It's part of ES6 (ECMAScript 2015)

Just like Array, Date, and Object are classes,
Promise is also a class!
`);