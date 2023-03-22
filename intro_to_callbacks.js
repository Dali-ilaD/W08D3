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

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// reader.question('Give us a number', response => {

// })