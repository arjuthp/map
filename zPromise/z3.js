
// ### Real World: Pizza Delivery

// ```
// You: "I want a pizza"
// Shop: "Give me your phone number"
// You: "555-1234" ← This is the CALLBACK
// Shop: "We'll call you when ready"
// You: *hang up and do other things*
// [30 minutes later]
// Shop: *calls 555-1234* "Pizza ready!"
// ```

function orderPizza(callback){
    console.log("Taking order...");
    setTimeout(()=>{
        console.log("Pizza Ready!");
    }, 2000);
}

orderPizza((pizza) => {
    console.log("received:", pizza);
});

console.log("Watching TV");