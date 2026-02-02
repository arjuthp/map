// Simple Demo: Promise is a Class

// 1. YES! Promise is a class (constructor function)
console.log("typeof Promise:", typeof Promise); // "function"

// 2. You use 'new' keyword to create instances (like classes)
const promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
});

console.log("promise1 instanceof Promise:", promise1 instanceof Promise); // true

// 3. Promise has STATIC METHODS (class methods)
console.log("\nStatic Methods:");
console.log("- Promise.all()");
console.log("- Promise.race()");
console.log("- Promise.resolve()");
console.log("- Promise.reject()");

// Example of static method
const quickPromise = Promise.resolve("Quick result");
quickPromise.then(result => console.log(result));

// 4. Promise has INSTANCE METHODS (prototype methods)
console.log("\nInstance Methods:");
console.log("- .then()");
console.log("- .catch()");
console.log("- .finally()");

// 5. You can even EXTEND the Promise class
class MyPromise extends Promise {
    constructor(executor) {
        super(executor);
        console.log("Custom Promise created!");
    }
}

const customPromise = new MyPromise((resolve) => {
    resolve("Custom!");
});

console.log("\ncustomPromise instanceof Promise:", customPromise instanceof Promise);
console.log("customPromise instanceof MyPromise:", customPromise instanceof MyPromise);

// ANSWER: YES, Promise IS a class!
console.log("\n✅ YES! Promise is a built-in JavaScript class");
console.log("   Just like Array, Date, Object, etc.");