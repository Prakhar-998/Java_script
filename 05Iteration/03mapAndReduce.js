//.map()
const myNums = [1,2,3,4,5,6,7,8,9]

const newNums= myNums.map((nums)=>(nums + 10))
console.log(newNums)

//Chaining
const newerNums= myNums.map((num)=>(num+11)).map((num)=>(num*2))
console.log(newerNums)

const latestNums= myNums.map((num)=>(num+11)).map((num)=>(num*2)).filter((num)=>(num>30))
console.log(latestNums)


//********************************* //
//Reduce
const myTotal= myNums.reduce(function(accumulator,current_value){
    return accumulator+current_value
},0)//0 defines innitial value for acc
console.log(myTotal)

//just to check each step
const myTotal1= myNums.reduce(function(accumulator,current_value){
    console.log(accumulator,current_value)
    return accumulator+current_value
},5)//5 defines innitial value for acc
console.log(myTotal1)

const newTotal=myNums.reduce((acc,curr_v)=>(acc+curr_v),0)//will work even if ,0 is not given
console.log(newTotal)

const newerTotal=myNums.reduce((acc,curr_v)=>{
    console.log(acc,curr_v)
    return acc+curr_v
},1)//will work even if ,0 is not given
console.log(newerTotal)