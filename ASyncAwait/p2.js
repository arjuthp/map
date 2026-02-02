
// Q10: Create a countdown function
console.log("\nQ10: Create countdown(n) that counts from n to 0");
// function countdown(n) {
//     // Your code here - print n, n-1, ..., 0 with 1 second delay
// }
// Test: countdown(5);

function countdown(n){
    console.log(n);
    if(n>0){
        setTimeout(() => countdown(n-1), 1000);
    }
}
countdown(5);

async function countdown(n) {
    for(let i = n; i >= 0; i--){
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

countdown(5);