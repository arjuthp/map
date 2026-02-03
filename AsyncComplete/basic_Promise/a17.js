
// Q17: Create a retry function
console.log("\nQ17: Create retry(fn, maxAttempts) with promises");
// function retry(fn, maxAttempts) {
//     // Your code here
// }
// Test:
// function flaky() {
//     return Math.random() > 0.7 
//         ? Promise.resolve("Success!") 
//         : Promise.reject("Failed");
// }
// retry(flaky, 5).then(console.log).catch(console.log);

function retry(fn, maxAttempts) {
    return new Promise((resolve, reject) =>{

    fn()
       .then(result => {
                resolve(result);
            })
        .catch(error => {  
            if (maxAttempts <= 1) {
                reject(error);
             } else {
                 retry(fn, maxAttempts - 1)
                .then(resolve)
                .catch(reject);
         }
    });
                
});
}


function flaky(){
    return Math.random() > 0.7
    ?Promise.resolve("Success"): Promise.reject("Failed");
}

retry(flaky, 3)
    .then(result => console.log(result))
    .catch(error => console.log(error));
