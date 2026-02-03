// Q9: Async forEach (common mistake!)
console.log("\nQ9: Fix this - forEach doesn't wait for async");
const ids = [1, 2, 3];
// async function processIds() {
//     ids.forEach(async (id) => {
//         await processId(id);
//     });
//     console.log("Done!"); // Prints BEFORE processing!
// }
// Fix it:

const processId = (id) => new Promise(res => 
    setTimeout(() => {
        console.log(`Processed ${id}`);
        res(id);
    }, 1000)
);


async function processIds() {
    for (const id of ids) {
        await processId(id);
    }
    console.log("Done!");
}
processIds();