const name="Prakhar"
const repoCount=50

console.log(name+repoCount)//old way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)//better way(String interpolation)

const gameName=new String("Prakhar")//another way to declare string
//on using this method it creates an object with a lot of methods. 
//try on console and then call gameName
/*const name="Prakhar"
undefined
const name1=new String("Prakhar")
undefined
name1
String {'Prakhar'}0: "P"1: "r"2: "a"3: "k"4: "h"5: "a"6: "r"length: 7[[Prototype]]: String[[PrimitiveValue]]: "Prakhar"
name
'Prakhar'*/ 

console.log(gameName[0])
console.log(gameName.__proto__)//gives {} object(a mapping not an array)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))//gives a not A as when toUpperCase is used ,it is applied to a copy of Prakhar (Stack concept) and og is let as it is.

console.log(gameName.substring(0,4)) //cant give negative val
/*//another way
//const anotherString=gameName.substring(0,4)
//console.log(anotherString) */

console.log(gameName.slice(-5,4))//negative values possible

//.trim()
//.repkace(a,b)
//.includes()
//.split(saperator,limiter)



