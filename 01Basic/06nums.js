const score=400
console.log(score)
console.log(typeof score)

const balance=new Number(100)
console.log(balance)
//defines a an object output is [number:100]

console.log(balance.toString().length)
console.log(typeof balance)

//.toFixed(2) => %.2f

const anotherNumber=23.8456

console.log(anotherNumber.toFixed(2))//shows only those many numbers after decimals
console.log(anotherNumber.toPrecision(2))//round figures

//.tolocaleString

//++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(4,3,6,8,12,9))
console.log(Math.random())//gives [0,1)// Expected output: a number from 0 to <1

//to get for example a number between 1 and 10
console.log(Math.floor(Math.random()*10)+1)

// to get between 10 and 20
console.log(Math.floor(Math.random()*10)+1+10)

