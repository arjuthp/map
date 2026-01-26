// let myName = "hitesh      "

// console.log(myName.truelength));

let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all Objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says Hello!`);
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance

const User = {
    name:"chai",
    email: "chai@google.com"

}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'Js assignment',
    fulltime: true,
    __proto__: TeachingSupport //////////Older Syntax
 }
Teacher.__proto__= User


//modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "CHaiAurCode        "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.truelength()
"hitesh".truelength()
"arju".truelength()
"iceTea".truelength()