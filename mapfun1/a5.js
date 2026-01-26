console.log(`Question 5: Convert Celsius to Fahrenheit`)
// Context: You have temperatures in Celsius and need to convert them to Fahrenheit. Formula: (C × 9/5) + 32
// Input:
// javascript
// [0, 10, 20, 30, 100]
// Your Task: Use map to convert each temperature to Fahrenheit.
// Expected Output:
// javascript
// [32, 50, 68, 86, 212]


const temperature = [0, 10, 20, 30,100]

const Fahrenheit = temperature.map((temp)=> (temp * 9/5) + 32);
console.log(Fahrenheit);