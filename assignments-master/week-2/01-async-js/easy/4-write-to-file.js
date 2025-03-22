// ## Write to a file

const fs = require("fs");

fs.writeFile("a.txt", "Hello World", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully");
    }
}
)

let ans = 0;
for(let i = 0; i<100; i++){
    ans = ans +i;
}
console.log(ans);


// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.