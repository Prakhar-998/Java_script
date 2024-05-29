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