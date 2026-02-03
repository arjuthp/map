// Q18: Create a timeout wrapper
console.log("\nQ18: Create timeout(promise, ms) that rejects if too slow");
// function timeout(promise, ms) {
//     // Your code here
// }
// Test:


function timeout (promise, ms){
    const timeoutPromise = new Promise((_, reject) =>{
        setTimeout(() =>{
            reject(new Error('Timeout'));
        }, ms);
    });
    return Promise.race([promise, timeoutPromise])
}

const slow = new Promise(resolve => setTimeout(() => resolve("Done"), 3000));
timeout(slow, 2000)
.catch(err => console.log(err.message));