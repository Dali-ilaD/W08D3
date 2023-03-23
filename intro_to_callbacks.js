// class Clock {
//     constructor() {

//       // 1. Create a Date object.
//       let date = new Date()

//       console.log(date)
//       // 2. Store the hours, minutes, and seconds.
//       this.hr = date.getHours();
//       this.min = date.getMinutes();
//       this.sec = date.getSeconds();
       
//       // 3. Call printTime.
//        let formatted =  this.printTime(this.hr,this.min,this.sec);
//       // 4. Schedule the tick at 1 second intervals.
//     //   setInterval((arg) => {_tick(arg)},1000)
//         setInterval(this._tick.bind(this),1000)
//     }
  
//     printTime(hr,min,sec) {
//       // Format the time in HH:MM:SS
//          let formatTime = `${hr}:${min}:${sec}`
//       // Use console.log to print it.
//       console.log(formatTime)
//     }
  
//     _tick() {
//       // 1. Increment the time by one second.
//         this.sec++
//         if(this.sec === 60){
//             this.sec = 0
//             this.min+=1
//         }

//         if(this.min === 60){
//             this.min = 0
//             this.hr+= 1
//         }
//         if(this.hr === 25){
//             this.hr = 1
//             this.min = 0
//             this.sec = 0
//         }
//       // 2. Call printTime.
//       this.printTime(this.hr,this.min,this.sec)
//     }
//   }

//   const clock = new Clock();



const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallBack) {
    if (numsLeft > 0) {
        reader.question('Give us a number', response => {
                // convert response to int using parseInt, save to variable
                let responseNum = parseInt(response);
                // update sum with response 
                sum += responseNum
                //  make recursive call to addNumbers, decrement sum
                addNumbers(sum,numsLeft - 1, completionCallBack)
                // pass in completion callback
                // else statement, if numsLeft not greater than 0
        
            })
        } else if (numsLeft === 0) {
                completionCallBack(sum)
        }
}
            
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

    

Function.prototype.myBind = function(context) {
            return() =>{
                    return this.apply(context)
                }
            }
            
class Lamp {
    constructor() {
    this.name = "a lamp";
    }
    }
        
const turnOn = function() {
    console.log("Turning on " + this.name);
    };

    const lamp = new Lamp();

//   turnOn(); // should not work the way we want it to

    const boundTurnOn = turnOn.bind(lamp);
    const myBoundTurnOn = turnOn.myBind(lamp);

    // boundTurnOn(); // should say "Turning on a lamp"
    // myBoundTurnOn(); // should say "Turning on a lamp"
                        
                                        
                                        


// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  reader.question(`Is ${el1} greater than ${el2}?`, response=> {
    if(response === 'yes'){
        callback(true)
    } else if (response === 'no'){
        callback(false)
    }
  }
  )
  // callback if true; else false.
}
// askIfGreaterThan(3,4, boolean => console.log(`is it sorted?: ${boolean}`))

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
        if(i === arr.length - 1){
            outerBubbleSortLoop(madeAnySwaps)
        } else{
            // askIfGreaterThan(arr[i], arr[i+1],(isGreaterThan(askIfGreaterThan(arr[i], arr[i+1]))))
            askIfGreaterThan(arr[i],arr[i+1], function(greaterThan) {
                if(greaterThan){
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                    madeAnySwaps = true
                } 
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
            })
        }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

let a = [3, 2, 1]

innerBubbleSortLoop(a, 0, false, outer =>console.log(outer))
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

