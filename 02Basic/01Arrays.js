const myArr = [0,1,2,3,4,5]
//can have diff elements
//resizable
//simple 0 based indices
//shalow Copies: same reference points as original , ie change in array will change original data


//Methods

// myArr.push(6)//adds to the end of array
// console.log(myArr)

// myArr.pop()//only removes th last element 
// console.log(myArr)

myArr.unshift(8)//adds a value to start (bad complexity)
console.log(myArr)

myArr.shift()//removes from start (bad)
console.log(myArr)

//.includes(5)
//.indexOf(5)

const newArr=myArr.join()
console.log(newArr)
console.log(typeof myArr)
console.log(typeof newArr)

//+++++++++++++++++++//

//Splice//slice
//*********************************************
//Splice cuts off the orginal array and removes the rangewhile slice only gets the range and og arrays remains the same************

console.log("A",myArr)

const myn1 = myArr.slice(0,3)
console.log(myn1)
console.log("B",myArr)

const myn2= myArr.splice(0,3)
console.log(myn2)
console.log("C",myArr)


