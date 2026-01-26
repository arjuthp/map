console.log (`Question 2: Convert Names to Uppercase`)
// Context: You have a list of names in lowercase and need to display them in uppercase.
// Input:
// javascript
// ["alice", "bob", "charlie"]
// Your Task: Use map to convert all names to uppercase.
// Expected Output:
// javascript
// ["ALICE", "BOB", "CHARLIE"]

const namelist = ["alice", "bob", "charlie"]

const upercasedNameList = namelist.map((name) => name.toUpperCase())
console.log(upercasedNameList);