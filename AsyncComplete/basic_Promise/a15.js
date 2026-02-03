// Q15: Parallel vs Sequential
console.log("\nQ15: Run 3 API calls in parallel (not sequential)");
function apiCall(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data ${id}`), 1000);
    });
}
// Run apiCall(1), apiCall(2), apiCall(3) in parallel:

Promise.all([apiCall(1), apiCall(2), apiCall(3)])
.then(result =>{
    console.log("All results:", result);
});