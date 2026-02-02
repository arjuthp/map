// Exercise 1: Create a promise that resolves after 2 seconds with your name
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Arju Thapa");
    }, 5000);
}).then(name => {
    console.log("My name is", name);
});

// Exercise 2: Create a promise that randomly succeeds or fails


//instances
