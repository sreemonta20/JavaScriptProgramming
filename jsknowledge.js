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
// const resultFunction = function(){
//     return 'eat your vegetables!';
// }
// function createQuote(quote, callback){ 
//     var myQuote =  quote();
//     callback(myQuote); // 2
//   }
  
//   function logQuote(quote){
//     console.log(quote + ' from callback');
//   }
  
//   createQuote(resultFunction, logQuote); // 1

//-------Result function or API function to receive data from server
const resultFunction = () =>{
    return 'eat your vegetables!';
}


//-------callback function which would be passed as argument in the main function. After getting the data from result, callback function will be called from the main function.
const logQuote = (quote) =>{
    console.log(quote + ' from callback')
}


const MainFunc = (quote, callback) =>{
    var resultData = quote();
    callback(resultData);
}

MainFunc(resultFunction, logQuote);


// Example 3 (callback in eventlistener)
{/* <button class="btn">Click Me</button>
<script>
debugger;
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let name = 'John doe';
  document.getElementById("nametxt").innerHTML = name;
})
</script> */}


// Example 4 (Callback Hell)
setTimeout(() => {
    console.log("Joel");
    setTimeout(() => {
        console.log("Victoria");
        setTimeout(() => {
            console.log("John");
            setTimeout(() => {
                console.log("Doe");
                setTimeout(() => {
                    console.log("Sarah");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);


// Example 5 (Promise from Callback hell conversion -Practical)


function addName (time, name){
    var sum = 0;
    return new Promise ((resolve, reject) => {
      if(name){
        setTimeout(()=>{
          console.log('name: '+name + ' and time: '+ time)
          resolve();
        },time)
      }else{
        reject('No such name');
      }
    })
  }

  
  addName(2000, 'Joel')
    .then(()=>{
        //console.log("4 seconds");
        addName(2000, 'Victoria')
    })
    .then(()=>{
        //console.log("6 seconds");
        addName(2000, 'John')
    })
    .then(()=>{
       // console.log("8 seconds");
        addName(2000, 'Doe')
    })
    .then(()=>{
        //console.log("10 seconds");
        addName(2000, 'Sarah')
    })
    .catch((err)=>console.log(err))