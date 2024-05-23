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
console.log(obj3_2)

const obj3_3 = {...ob1,...ob2}//spread method, best
console.log(obj3_3)
