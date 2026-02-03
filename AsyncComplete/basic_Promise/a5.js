
// Q5: Use Promise.resolve and Promise.reject
console.log("\nQ5: Create checkAge(age) using Promise.resolve/reject");
// function checkAge(age) {
//     // Resolve if age >= 18, reject otherwise
// }
// checkAge(20).then(msg => console.log(msg));
// checkAge(15).catch(err => console.log(err));

const checkAge = async(age)=>{
    return new Promise ((resolve, reject) =>{
    if(age >= 18){
        resolve(age);
    }else{
        reject(new Error("Too young"));

    }
    });}

checkAge(20).then(msg => console.log(msg));
checkAge(15).catch(err => console.log(err.message));
































 