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