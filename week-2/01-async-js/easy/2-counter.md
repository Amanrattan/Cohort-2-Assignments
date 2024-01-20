## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function udpateCounter(counter){
    console.log(counter);

  if(counter < 10){
   setTimeout(() => udpateCounter(counter + 1), 1000);
  }else{
    console.log("Counter stopped at 10.");
  }
}

// Start the counter
udpateCounter(0);




































































(Hint: setTimeout)