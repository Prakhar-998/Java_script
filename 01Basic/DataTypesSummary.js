//Primitive (call by value)

/* 7 types:
String,
Number,
Boolean,
null,
undefined
Symbol
BigInt
*/

//Reference(non primitive)

/*Array
Object
Function
*/

//Dynamically typed language, ex u dont have to define type whlie taking variable with value 100

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)

const heroes=["a","b","c"]

let myObj={
    name: "Prakhar",
    age: 21,
}

const myFunction=function(){
    console.log('Hello')
}

//?console.log(myFunction)

//check data types of function,null,undefined,array,object etc

console.log(typeof myFunction)

//++++++++++++++++++++ # ++++++++ # ++++++++++++++++//

//heap memory:gives a reference of og value:: used in non primitive types
//Stack memory:gives a copy of og value:: used in primitive
