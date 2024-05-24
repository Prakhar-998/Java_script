//global scope //scope{}
let a = 20//both a and b have global scope
const b = 30

if(true){
    let a = 50//here this a and c have block scope
    let c = 60//
    console.log(`inner: ${a} , ${c}`)
}
//console.log(a,b,c) wont work as c is not defined in global space so it cant be accessed globally 
//c only had scope inside if block
console.log(a,b)// value of a printed will be 20 not 50

/* +++++++++++++++++++++++++++++++++++++++++ */
//hoisting oeverview

function addOne(num){
    return num+1
}
console.log(addOne(3))

console.log(addOne1(3))//here fx call can be made before fx declaration
function addOne1(num){
    return num+1
}

const addTwo = function(num){//fx can be held within a variable in js lol
    return num+2
}
console.log(addTwo(5))

// console.log(addTwo2(5)) // here fx call can not be made before declaration****IMP 
// const addTwo2 = function(num){
//     return num+2
// }




