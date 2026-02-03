// Q13: Use Promise.allSettled
console.log("\nQ13: Wait for all promises (even if some fail)");
const success = Promise.resolve("Success");
const failure = Promise.reject("Failed");
const pending = new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
// Use Promise.allSettled:

Promise.allSettled([success, failure, pending])
    .then(results => console.log("Got all results, success or failure!", results)); 
   
    
