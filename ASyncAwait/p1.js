// Q9: Create a delay function
console.log("Q9: Create delay(ms) that waits for ms milliseconds");
// function delay(ms) {
//     // Your code here
// }
// Test: delay(2000).then(() => console.log("2 seconds passed"));

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
delay(2000).then(() => console.log("2 seconds passed"));