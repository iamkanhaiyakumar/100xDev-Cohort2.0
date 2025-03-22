//What is ASYNC FUNCTION?
//Async function is a function that returns a promise. It is a combination of promises and generators. It is a function that operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.
//What is synchronous functions?
//Synchronous functions are blocking functions. They block further execution until the task is completed. It means that the code will wait for the function to complete before moving on to the next line of code.
//What is asynchronous functions?
//Asynchronous functions are non-blocking functions. They don’t block further execution of the code. It means that the code will continue to run while the function is being executed in the background.



let a = 1;
console.log(a);


const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("data read from the file is");
    console.log(data);
})

let ans = 0;
for(let i = 0; i<100; i++){
    ans = ans +i;
}

console.log(ans);
