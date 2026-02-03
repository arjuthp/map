// Q16: Convert callback to promise
console.log("Q16: Convert this callback function to promise");

// function newReadFile(filename) {
//     // Your code here - return promise
// }

function oldReadFile(filename, callback) {
    setTimeout(() => {
        callback(null, `Content of ${filename}`);
    }, 1000);
}

function readFilePromise(filename){
    return new Promise((resolve, reject) => {
        oldReadFile(filename, (error , content) =>{
            if(error){
                reject(error);
            }else{
                resolve(content);
            }
        });
    });
}
readFilePromise('test.txt')
.then(content => console.log(content))
.catch(error => console.log("Error:", error));