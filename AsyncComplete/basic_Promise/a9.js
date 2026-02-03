// Q9: Error in chain
console.log("\nQ9: Handle error in the middle of chain");

//     // Handle error here

Promise.resolve(5)
    .then(n => n * 2)
    .then(n => {
        if (n > 5) throw new Error("Too big!");
        return n;
    })
    .then(n => n + 10)
    .catch(error => console.log("Error:", error.message))