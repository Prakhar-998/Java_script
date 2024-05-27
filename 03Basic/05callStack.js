/*JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language. This means it can execute one command at a time (single-threaded) but can handle asynchronous tasks (like reading files or making network requests) concurrently.

How JavaScript Executes Code
Execution Context: When a JavaScript program runs, it creates an execution context. An execution context is an environment where the code is evaluated and executed. Each execution context has two stages:

Creation Stage: The memory is allocated for variables and functions.
Execution Stage: The code is executed line by line.

Global Execution Context: This is the default context where code is executed when the program starts. It creates a global object (window in browsers) and this points to the global object.

Function Execution Context: Every time a function is called, a new execution context is created for that function.

The call stack is a data structure that keeps track of the execution contexts in the program. It operates in a LIFO (Last In, First Out) manner.

When a function is called, its execution context is pushed onto the stack.
When the function execution is completed, the execution context is popped off the stack.*/

function greet() {
    console.log("Hello");
    farewell();
    console.log("How are you?");
  }
  
  function farewell() {
    console.log("Goodbye");
  }
  
  console.log("Start");
  greet();
  console.log("End");

  /*Execution Flow
The global execution context is created and pushed onto the stack.
The console.log("Start") statement is executed.
The greet() function is called:
A new execution context for greet is created and pushed onto the stack.
Inside greet, console.log("Hello") is executed.
The farewell() function is called:
A new execution context for farewell is created and pushed onto the stack.
Inside farewell, console.log("Goodbye") is executed.
The farewell execution context is popped off the stack.
Back in greet, console.log("How are you?") is executed.
The greet execution context is popped off the stack.
Finally, console.log("End") is executed.*/
