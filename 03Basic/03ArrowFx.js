const user = {
    name: "Prakhar",
    fee: 999,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`)
        //console.log(this)//prints the current contesxt which is this user object
    }
}
//user.welcomeMessage()
// user.name="Jaiswal"
// user.welcomeMessage()
console.log(this)//prints {} as currently we are working in node enviorment and it is empty rn
// if u do this in inspect console u will get **windows** object in browser.


// function abc(){
//     let name = "prakhar"
//     console.log(this)// will print a lot of details about fx
//     console.log(this.name)//undefined
// }
// abc()

//same stuff just deiff declaration of fx
// const abc = function(){
//     let name ="Prakhar"
//     console.log(this.name)
// }
// abc()

//arrow function just gives a way to write functions faster
const abc = () => {
    let name = "Prakhar"
    console.log(this)
    console.log(this.name)
}
//in Arrow Functions, the "this" keyword represents the object that owns the function, no matter who calls the function.
//in a regular function, the "this" keyword represents different objects depending on how the function was called.


const addTwo = (num1,num2) => (num1+num2)//gives parameters in first paranthesis and return in second parenthesis
// no need to write return keyword

//returning object
const addTwo1 = (num1,num2) => ({name: "Prakhar"})

console.log(addTwo(3,4))
console.log(addTwo1(3,4))
