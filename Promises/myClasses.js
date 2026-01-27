//ES6
//constructor is initialized when a new keword is initializes or  a Object is initialized in class
class User {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//Behind the Scene

function User(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());