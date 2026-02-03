console.log("Q1: Create promise that resolves with 'Hello' after 1s");
const q1 = new Promise((resolve)=>{
    setTimeout(()=>{
       
        resolve("Hello");
    }, 5000);
}).then (msg => console.log(msg));

