const API_URL = "https://api.github.com/users/arjuthp"

async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }
    

    // fetch().then(res => res.json()).then(res => console.log())
}

//fetch() => Response.json() (This is also a promise)=> jsonValue returns
handlePromise();



// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Promise Resolved Value");
//     }, 5000);// 10 sec
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Promise Resolved Value");
//     }, 10000);// 10 sec
// });

// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Namaste Javascript")
// }
// getData();

// async function handlePromise(){
//     const val = await p1;
//     console.log("Namaste JavaScript");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste JavaScript 2");
//     console.log(val2);
// }
// handlePromise();

//JS is a synchronous single threaded language
//whenever JS will see await it suspends for that period of time
//JS doesnt let callstack to be blocked
