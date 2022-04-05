//node jsknowledge.js
/// Function declaration
function greeter(person){
    return "Hello, " + person;
}
   
   var user = "Xavier";
   
   console.log(greeter(user));

// Fat Arrow Function
let getsum = a => a+a;
console.log(getsum(3));


// Callback Function (use of function expression)
// Example 1
const message = function() {  
    console.log("This message is shown after 3 seconds");
}

 
setTimeout(message, 3000);

// Example 2
const resultFunction = function(){
    return 'eat your vegetables!';
}
function createQuote(quote, callback){ 
    var myQuote =  quote();
    callback(myQuote); // 2
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote(resultFunction, logQuote); // 1
