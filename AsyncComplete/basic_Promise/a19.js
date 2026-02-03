
// Q19: Batch API calls
console.log("\nQ19: Process array of IDs in batches of 3");

// Process in batches of 3:

function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
    });
}

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];



Promise.resolve([])
    .then(results => {
        console.log("Processing Batch 1: [1, 2, 3]");
        return Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
            .then(batch1 => {
                console.log("Batch 1 complete:", batch1);
                return results.concat(batch1);
            });
    })
    .then(results => {
        console.log("\nProcessing Batch 2: [4, 5, 6]");
        return Promise.all([fetchUser(4), fetchUser(5), fetchUser(6)])
            .then(batch2 => {
                console.log("Batch 2 complete:", batch2);
                return results.concat(batch2);
            });
    })
    .then(results => {
        console.log("\nProcessing Batch 3: [7, 8, 9]");
        return Promise.all([fetchUser(7), fetchUser(8), fetchUser(9)])
            .then(batch3 => {
                console.log("Batch 3 complete:", batch3);
                return results.concat(batch3);
            });
    });