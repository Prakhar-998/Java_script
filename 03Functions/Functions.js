function add(number1,number2){//parameters are number1 and 2
    console.log(number1+number2)
}
add(3,4)//3 and 4 are arguments

//returning value
function add1(number1,number2){
    return number1+number2
}
console.log(add1(5,6))

//if arguments are not given
console.log(add1())//NAN

//adding default values for parameters in case arguments are not given
function add3(number1=5,number2=7){
    return number1+number2
    console.log("asdfasdfgsf")//anything writen after return is not interpreted in a function
}
console.log(add3())//gives 12
console.log(add(1,2))//3 if given argument, then it will take preccedencce
//alternatively just an if block to check if !username will work


function loggedIn(userName){
    return `${userName} just logged in`
}
console.log(loggedIn("Prakhar"))
console.log(loggedIn())// if argument not given the undefined 

//*************************************//

function cartPrice(...num1){//rest operator ,pack items together
    return num1
}
console.log(cartPrice(2,4,6))//prints [2,4,6]

function cartPrice1(val1,val2,...num1){//rest operator ,pack items together
    return num1
}
console.log(cartPrice1(2,4,6,8,10))//2 and 4 become val1 ,val2


const user= {
    name: "cap",
    price: 80
}
function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and price is ${anyObject.price}`)
}
handleObject(user)
//another way
handleObject({
    name: "hat",
    price: 800
})

const getArray=[2,4,6,8,5]
function returnAVal(getArray){
    return `Second Value is ${getArray[1]}`
}
console.log(returnAVal(getArray))
//similarly another way
console.log(returnAVal([3,4,5,6,7]))
