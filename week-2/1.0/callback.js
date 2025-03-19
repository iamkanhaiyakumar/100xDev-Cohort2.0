//What is CALLBACK FUNCTION?
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumOfSomething(a, b, fn){
    let sq =fn(a);
    let cb =fn(b);
    return sq+ cb;

}

let ans = sumOfSomething(5,3,square);
console.log(ans); 
