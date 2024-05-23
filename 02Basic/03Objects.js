

// constructor method // singleton
// Object.create

//Object Literals

const mySym = Symbol("key1")//for symbol as key

const jsUser = {//name is key , "Prakhar" is value 
    name: "Prakhar",
    age: 21,
    location: "AYC",
    isLoggedIn: false,
    "full name": "asdafafvda",
    [mySym]: "myKey1" //use as [mySym] and accses with bracket otherwise the type will be string not symbol
}
//bts all keys are stored as strings here **keep in mind**
//***********************************//Imp
console.log(jsUser.name)//works
//console.log(jsUser[name]) //wont work
console.log(jsUser["name"])//works
//console.log(jsUser."full name") //wont work

// console.log(jsUser.mySym)
// console.log(typeof jsUser.mySym)// if defined simply as mySym and accesed with .mySym it will retun key not symbol
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])///??? abhi bhi string q aa rha hai bhai???lol//refer line 39

//************************** */

jsUser.age=20//changeing value of keys of an object
console.log(jsUser["age"])

//Object.freeze(jsUser)//Freezing the valuesof an objecct
jsUser.age=19
console.log(jsUser["age"])

console.log(jsUser)//Over here see that key1 is listed as symbol//****Imp******

jsUser.greeting = function(){
    console.log("hello")
}

console.log(jsUser.greeting())//unfreeze first to run this
console.log(jsUser.greeting)///returns only reference not the output of fx

jsUser.greeting2 = function(){
    console.log(`hello, ${this.name}`)
}

console.log(jsUser.greeting2())

