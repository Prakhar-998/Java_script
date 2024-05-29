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

//Example with object array
let array1=[{
    title: "book One",
    genre: "comedy",
    edition: 1996
},
{
    title: "book 2",
    genre: "comedy",
    edition: 2002
}]

let ans = array1.filter((i)=>(i.edition>2000))
console.log(ans)
//this is the shortest way to write , below are simpler to code
//ol=nly diff is syntax
let ans3 = array1.filter((i)=>{return i.edition>2000})
console.log(ans3)

let ans1 = array1.filter((i)=>{
    if(i.edition>2000){
        return i
    }
    return
})
console.log(ans1)

let ans2 = array1.filter(
    function(i){
    if(i.edition>2000){
        return i
    }
    return
})
console.log(ans2)
