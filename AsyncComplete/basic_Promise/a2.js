// Q2: Create a promise that rejects with error "Failed" after 1 second
console.log("\nQ2: Create promise that rejects after 1s");

const q2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Failed");
    },1000);
}).catch(error => console.log("Error:",error ));

// const q2 = async() =>{
//     try {
//         await new Promise((reolve, reject) =>{
//             setTimeout(() => {
//                 reject("Failed");
//             }, 1000)
//         })
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }
// q2();