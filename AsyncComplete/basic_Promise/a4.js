
// Q4: Handle both success and error
console.log("\nQ4: Create divide(a, b) that rejects if b is 0");
// function divide(a, b) {
//     // Your code here
// }
// divide(10, 2).then(result => console.log(result));
// divide(10, 0).catch(err => console.log(err.message));

function divide(a, b){
   return new Promise((resolve, reject)=>{ 
    if(b==0){
        reject(new Error("cannot divide by zero "));   
    }else{
        resolve(a/b);
    }
   }) ;
}

divide(10,2).then(result => console.log(result));
divide(10,0).catch(err => console.log(err.message))

