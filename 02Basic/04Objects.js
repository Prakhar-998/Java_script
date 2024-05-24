//moving to objects singleton

//const user =new Object()//this is a singlton object

const user = {}//this is literall something
user.id = "123"
user.name = "Sammy"
user.loggedIn = "true"
//console.log(user)

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Prakhar",
            lastName: "jaiswal"
        }

    }
}
console.log(regularUser.fullName.userFullName.firstName)

const ob1={1: "a", 2 : "b"}
const ob2={3: "c",4: "d"}

const obj3_1= {ob1,ob2}// not exactly ideal way to assign all together{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
console.log(obj3_1)

const obj3_2 = Object.assign({},ob1,ob2)//better than last one //*******.assign */copies Copy the values from one or more source objects to a target object. Returns the target object
//const returnTarget = Object.assign(Target,source)
//enumerable: can be looped
console.log(obj3_2)

const obj3_3 = {...ob1,...ob2}//spread method, best
console.log(obj3_3)

const users = [// array with objects inside
    {
        id: 1,
        email: "sdfasdf@gmail.com"
    },
    {
        id: 2,
        email: "fghdfgh@gmail.com"
    }
]
console.log(users[1].email)

console.log(user)
console.log(Object.keys(user))//array of keys
console.log(Object.values(user))//array of vals
console.log(Object.entries(user))//array of arrays

console.log(user.hasOwnProperty('isLogged'))//checks if object has this property


//*************************************** */
//Destructuring objects

const course = {
    name: "js",
    price: 999,
    instructor: "hitesh"
}

//destructure so dont have to keeep repeating .course.instructor etc , this is just syntax thing to make things cleaner
const{instructor}= course
console.log(instructor)

//can be even renamed to shorten
const {instructor: ins} = course
console.log(ins)

//******************************** //
//JSON

// {
//     "name": "prakhar",
//     "courseName": "js",
//     "price": "Free"
// }

// [//can be in the form of array of objects like this too
//     {},
//     {},
//     {}
// ]