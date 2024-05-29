//for of //gives values in return
//use in arrays
let greeting = "Hello"
for(let greet of greeting){
    console.log(greet)
}

//Maps
const map = new Map()
map.set('In','India')
map.set('us', 'united states')
map.set('In', 'India')

//console.log(map)

// for(const i of map){
//     console.log(i);
// }

for(const [key,val] of map){
    console.log(key)
}
for(const [key,val] of map){
    console.log(key,": ",val)
}

//for in //gives keys in return//use in objects
const myObject = {
    game : 'NFS',
    game1 : "Forza"
}
// for (const key of myObject){// doesnt work with objects
//     console.log(key)
// }
for(const key in myObject){//works with in tho
    console.log(key)
}
for(const key in myObject){
    console.log(myObject[key])//works like this for object yaaay
}

const programming =["js","rb","cpp"]
for(const program in programming){
    console.log(program)
}// 0 1 2 
for(const program of programming){
    console.log(program)
}// js rb cpp


//****************************************//
//for each
programming.forEach(function (i){
    console.log(i)
})
programming.forEach((i) => {//using arroow fx
    console.log(i)
})
function printme(item){
    console.log(item)
}
programming.forEach(printme)//calling reference of a fx

programming.forEach((i,j,k)=>{//i have taken i,j,k for key index and entire array
    console.log(i,j,k)
})

//usually returns from adatabase is in the form of array of objects

const arrayobj=[
    {
        name : "obj1",
        use : "nill"
    },
    {
    name : "obj2",
    use : "nill"

    },
    {
    name : "obj3",
    use : "nill"
    },
    {
    name : "obj4",
    use : "nill"
}]

arrayobj.forEach((i)=>{
    console.log(i)
})
arrayobj.forEach((i)=>{
    console.log(i.name,": ",i.use)
})

//**********************************// 
//For each doesnt return any values
const values = programming.forEach((item) => {
    console.log(item)
    return item
})
console.log(values)//undefined as no values can be returned from foreach

//Filter
const myNums = [1,2,3,4,5,6,7,8,9]
let newNums=myNums.filter((num)=> {
    return num>4
})//this returns values// if u use {} then return keyword is mandatory
//let newNums=myNums.filter((num)=> num>4) // otherwise this will work as wel
console.log(newNums)

// if i had to use foreach to get the same result in return without filter
let newnums1=[]
myNums.forEach((i)=>{
    if(i>4){
        newnums1.push(i)
    }
})
console.log(newnums1)
