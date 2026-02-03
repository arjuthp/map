// ## 🍽️ Part 1: THE RESTAURANT ANALOGY

// ### Synchronous = Fast Food Counter

// ```
// You → Counter
//        ↓
//     [Wait in line]
//        ↓
//     Order burger
//        ↓
//     [Stand and wait] ← BLOCKING!
//        ↓
//     Get burger
//        ↓
//     Leave

// Everyone behind you must wait!
// ```

function makeBurger(){
    console.log("Making burger...");
    const start = Date.now();
    while (Date.now() - start < 2000){
        //cpu is busy !
    }
    console.log("Burger ready!");
}
console.log("1.Walk to the Counter");
makeBurger();
console.log("2. Got burger");
console.log("3.Leave");