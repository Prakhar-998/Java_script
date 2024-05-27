//Immediately invoked fx execution
//to handle/eliminate global scope polltion
//if u dont want your function to get into collition with any globbaly declared variable/object while execution, just execute it immediaately before it intereacts with outer enviornment

//()() //first () for declaration, second for execution

//mostly used for sensitive codes like db connection

(function abcd(){
    console.log("hello")
})();//; needs to be added to end this fx or next might not work **rem**

// (function abcd2(){
//     console.log("hello")
// })()this wont run as the previous code was not explicitly ended. use ; to end the previous fx

( () => {
    console.log("DB Connected")
})();

( (name) => {
    console.log(`${name} is the name`)
})("Prakhar");




