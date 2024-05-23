const mv=["thor","ironman","spidey"]
const dc=["supes","bat","flash"]

// mv.push(dc)
// console.log(mv)
// gives [ 'thor', 'ironman', 'spidey', [ 'supes', 'bat', 'flash' ] ]
// push function adds the whole array as an individual element to the end of mv

//console.log(mv.push(dc))
// gives 4
//*****because push also gives the length of the array as well.****

// console.log(mv[3][1])// return bat

// const all=mv.concat(dc)
// console.log(all)//[ 'thor', 'ironman', 'spidey', 'supes', 'bat', 'flash' ]///*****concat */

// const all1= [...mv,...dc]
// console.log(all1)//[ 'thor', 'ironman', 'spidey', 'supes', 'bat', 'flash' ] ****Spread*** method ,can be used to add multiple not just 2 easily

// const ex =[1,2,3,[4,5,6],[7,[8,9]]]
// const ex_spread=ex.flat(Infinity)
// console.log(ex_spread)//Spreads the array

//*************************************************************//
//Converting any object into array

//From and isArray
console.log(Array.isArray("Prakhar"))
console.log(Array.from("Prakhar"))
console.log((Array.from({name: "Prakhar"})))//interesting cause it doesnt know what to make into array ,ex keys?

//Of
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))