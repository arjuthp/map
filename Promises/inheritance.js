class User {
    constructor(username){
        this.username = username
    }
    logNe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
chai.logNe();
const masalaChai = new User("masalaChi");
masalaChai.logNe();

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);