let score="33abc";
console.log(typeof score)

let value="adfadfa"
console.log(typeof value);

let value1="adfadfa"
console.log(typeof "adfadf");

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)
//even tho 33abc is not a number it will get converted into number, but on printing the number wont show
//in case of null it gets converted into 0. (bad)
// bool gets converted to 1 and 0


//"33" =>33
//"33abc" => NaN
// true/false => 0 1
//null =>0

let loggedIn= 1;

let boolLoggedIn=Boolean(loggedIn);
console.log(boolLoggedIn)

//1=> true
//""=> false
//"Prakhar"=>true