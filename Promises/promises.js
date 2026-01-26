const promiseOne = new Promise(function(resolve, reject){
    //do an async tak
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

//consumig promise 
//.then and relolve are connected 
//resolve is a method
promiseOne.then(function(){
    console.log("Promise consumed");
})

///////////========================/////////////////////////////
//2d way w/o stoing in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})

// ///////////========================/////////////////////////////

const promiseThree =  new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "arzoo", email: "arzoo@thp.com"})// mostly objest form but we can also pass in the form of array

        
    }, 1000);
})
//this above line passes some data to .then 
promiseThree.then(function(user){
    console.log(user);
})


///////////========================/////////////////////////////
// error based checking

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "arzooo", password:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
}).then((user) =>{
    console.log(user);
    return user.username;// noew we will do the chaining
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})// we can stop gere or use finally
.finally(()=> console.log("The promise is either resolved or rejected"))

///////////========================/////////////////////////////

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Javascript", password:"1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
}, 1000);
})
//promise relove using asyncawait as well
//async is used in cases when dbs are not connected and we dont want to move ahead
//promise is an object 
//async await cant handle error directly so we can use try catch block here 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


///////////////////===============/////////////////\
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // aawait to give tim et to complete and jsont o convert string to objects
//         console.log(data); 
//     } catch (error) {
//         console.log("E:", error);
//     }    
// }
// getAllUsers()
 ///OR

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })//to handel eror form catch use theneble
 .then((data) =>{
    console.log(data);
 })
 .catch((error) => console.log(error))
