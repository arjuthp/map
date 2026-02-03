
// ### Asynchronous = Restaurant with Buzzer

// ```
// You → Counter
//        ↓
//     Order burger
//        ↓
//     Get buzzer 🔔
//        ↓
//     Sit down (do other things) ← NON-BLOCKING!
//        ↓
//     Check phone
//        ↓
//     Talk to friend
//        ↓
//     *BUZZ* Burger ready!
//        ↓
//     Pick up burger
// ```
function makeBurger(){
    console.log("Making burger...");
    setTimeout(() =>{
        console.log("Burger Ready!");
    }, 2000);
}

console.log("1. Order burger");
makeBurger(() => {
    console.log("4. Got burger");
});
console.log("2.Sit down");
console.log("3.Check phone");

// Output: 1, 2, 3, 4 (can do other things!)

