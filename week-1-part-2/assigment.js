           //Assignments

// For today - 
// 1. Create a counter in Javascript (counts down from 30 to 0)
// let counter = 30;
// const intervalId = setInterval(() => {
//     console.log(counter);
//     counter--;
//     if (counter < 0) {
//         clearInterval(intervalId);
//     }
// }, 500);

function countdown(n) {
    if (n < 0) {
        console.log("Time's up!");
        return;
    }
    console.log(n);
    setTimeout(() => countdown(n - 1), 500);
}
countdown(30);



// 2. Calcula te the time it takes between a setTimeout call and the inner function actually running

const start = Date.now();
setTimeout(() => {
    const end = Date.now();
    console.log(`Time elapsed: ${end - start} ms`);
}, 1000);


// const start = performance.now(); // Record the start time
// setTimeout(() => {
//     const end = performance.now(); // Record the execution time
//     console.log(`Expected delay: 100ms`);
//     console.log(`Actual delay: ${(end - start).toFixed(2)}ms`);
// }, 1000);

// 3. Create a terminal clock (HH:MM:SS)

function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayTime, 1000);

// function displayClock() {
//     const now = new Date();
//     const timeString = now.toLocaleTimeString(); // Format HH:MM:SS
    
//     process.stdout.clearLine(0); // Clear the current line
//     process.stdout.cursorTo(0);  // Move cursor to the beginning
//     process.stdout.write(timeString); // Print updated time
// }

// setInterval(displayClock, 1000);
