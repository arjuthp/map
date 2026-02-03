// Q5: Return value from async function
console.log("\nQ5: What does this return and how to get the value?");
async function getValue() {
    return 42;
}
// What is the type of getValue()?
// How do you get the value 42?


const test = async () => {
const value = await getValue();
console.log("GetValue:", value);
console.log("   Value:", getValue()); 
}

test();