//will only be writing new/different things from cpp

if (true){
    console.log("Hello")
}

// === strict equal also checks the data type
if (2 === "2"){
    console.log("nope")
}

if (true) console.log("dont"),console.log("write like this");//works, but dont do this

/* && || and or */

// simple switch case

//+++++++++++++++++++++++++++++++++++//
//truthy and falsy values

//Falsy vals
false,0,-0,0n,BigInt,undefined,NaN,null,""

//Truthy vals
// "0",'False' , " " , {},[], funstion(){}

//null coalescing operator (??)
//helps handling null value if returned, if null existes in the pair of values returned , choose non null value, otherwise if both the values are meaningfull, choose the first value
let val1;
val1 = 5 ?? 10
console.log(val1)//5
val2 = null ?? 10
console.log(val2)//10
val3 = undefined ?? 10 ?? 20
console.log(val3)//10

//Terniary operator(?)
// condition ? true : false
const Temp =33
Temp>=30 ? console.log("temprature is high") : console.log("not high")







