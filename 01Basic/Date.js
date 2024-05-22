//   let myDate=new Date();

// // console.log(myDate);//in milisecs from 1970

// // console.log((myDate.toString()));

// // console.log(myDate.toLocaleString())
//  console.log(myDate.getHours())
// // console.log(typeof myDate)

 let newDate=new Date(2024,0,11)
// let newDate1=new Date("2024-01-11")
// let newDate2=new Date("11-12-2002")
// console.log(newDate.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//in millisecs from 1970
console.log(newDate.getTime())//this gives a comparison reference so subtract my timeStamp and these to get time diff from initial point

//++++++++++++++++++++++++++//
let newDate2 = new Date()
console.log(newDate2.getDay())

newDate2.toLocaleString('default',{
    weekday: "long"
})
