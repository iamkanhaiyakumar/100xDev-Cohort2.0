//What is promise?
//A promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

//What is the syntax of promise?
//The syntax of promise is as follows:
//new Promise( /* executor */ function(resolve, reject) { ... } );
//The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object).
//The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred.





function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
  }
  
  myOwnSetTimeout(function() {
    console.log("log the first thing");
    myOwnSetTimeout(function() {
      console.log("log the second thing");
    }, 2000)
  }, 1000)



  function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
      // after 1 second, call resolve
      setTimeout(resolve, 1000);
    });
    return p;
  }
  
  myOwnSetTimeout(1000)
    .then(function () {
      console.log("log the first thing");
    });


    // const d = new Date();
    // d.getMonth();
    // console.log(d);