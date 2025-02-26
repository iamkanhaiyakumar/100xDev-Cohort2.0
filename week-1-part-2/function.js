function findSum(n) {
    let ans = 0;
    for(let i =0; i<n; i++){
        ans+= i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
    // return findSum(100);
}

setTimeout(findSumTill100, 100)
console.log("Hello Word")



const fs = require("fs"); //fileSystem(readfile)

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log("Hi there");


let a =0;
//it takes very longer time then file read
for(let i = 0; i<1000000000; i++){
    a++;
}

console.log("Hii KAnhaiya")