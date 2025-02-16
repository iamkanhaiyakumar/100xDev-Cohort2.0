// // console.log('Hello, World!'); 
// // console.log(a);

// // let a = 1;
// // var a = 2;
// // const a = 1 ;

// // a = 2;
// // console.log(a);

// // let firstName = 'Kanhaiya';
// // let age = 18;
// // let isMarried = true;

// // console.log("This persons name is " + firstName +" and thair age is "+age);

// // console.log(firstName)


// // if(isMarried === true){
// //     // console.log("This persons name is " + firstName +" and thair age is "+ age + " and he is married");
// // }
// // else{
// //     console.log("This persons name is " + firstName +" and thair age is "+ age + " and he is not married");
// // }

// // 1. Write the program to greet a person given their first and last name 
// let firstName = 'Kanhaiya';
// let lastName = 'Kumar';

// console.log("Hello, "+ firstName + " " + lastName);


// // 2. Write a program that greets a person based on their gender. (If else) 

// // let Mohan= "Men";
// // isMohangender = false;

// // if(isMohangender === true){
// //     console.log("Hello, Mr. Mohan");
// // }
// // else{
// //     console.log("Hello, Miss Mohani");
// // }

// // // 3. Write a program that counts from 0 - 1000 and prints (for loop)

// // for(let i = 0; i<=10; i++){
// //     console.log(i);
// // }

// // Let’s write some code - 
// // 1. Write a program prints all the even numbers in an array 

// // 2. Write a program to print the biggest number in an arrya 

// // 3. Write a program that prints all the male people’s first name given a complex object 

// // 4. Write a program that reverses all the elements of an array



// // Let’s write some code -  
// // 1. Write a function that finds the sum of two numbers /

// function sum(a,b){
//     const sumValue = a+b;
//     return sumValue;

//     // return a+b;
// }

// const value = sum(10,20);
// console.log(value);

// // 2. Write another function that displays this result in a pretty format 

// function displayResult(a,b){
//     return "The sum of "+a+" and "+b+" is "+(a+b);
// }

// const result = displayResult(11,20);

// console.log(result);

// // 3. Write another function that takes this sum and prints it in passive tense

//Bounty Question ---------->>>>>>>>>

// let sum = 0;

// for (let i = 0; i < 1000000000000; i++) {
//     sum = sum + i;
// }


//  function sum(num1, num2){
 function sum(num1, num2, fnToCall)
 // send function as a parameter/argument
 {
    let result = num1 + num2;
    // return result;
    fnToCall(result);
 }

 function displayResult(data){
    console.log("Result of the sum is :" + data);
 }

 function displayResultPassive(data){
    console.log("Sum result is : " + data);
 }

    // const result = sum(10,20);
    // displayResult(result);
    // displayResultPassive(result);
  
    const ans = sum(10,20,displayResult);
    
    function calculateArithmetic (a, b, arthmeticFinalFuntionc){
        const ans = arthmeticFinalFuntionc(a,b);
        return ans;
    }

    function sum (a, b){
        return a + b;
    }

    const value = calculateArithmetic(1,2,sum);
    console.log(value);