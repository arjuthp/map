// Q10: Recover from error
console.log("\nQ10: Recover from error and continue chain");
Promise.reject("Error!")
.catch(error => {
    console.log("Catch error:", error);
    return "Recovered!";
}).then(data => {
    console.log("Continuing with:", data);
    return data.toUpperCase();
}).then(data => {
    console.log("Finally:", data);
})
//     // Catch and recover
//     // Continue chain
