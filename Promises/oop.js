// const user = {
//     username: "arju",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function multipleBy5(num){
    return num*5
}

multipleBy5.power =2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea =  createUser("tea", 250)

chai.printMe()

/**BEHIND THE SCENES OF new keyword
 * A new objecr is created
 * A prototype is linked
 * the constructor is called
 * the new object is returned
 * 
 */