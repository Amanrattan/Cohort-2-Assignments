## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second


let counter =0;

function updateCounter() =>{
    console.log(counter);
    counter++;
}

setInterval(updateCounter,1000);

//if a want to stop this on 7 then

let counter =0;

function updateCounter(){
    console.log(counter);
    counter++;

  if (counter > 7) {
      clearInterval(counterInterval);
      console.log("Counter stopped at 7.");
  }
}

const counterInterval = setInterval(updateCounter,1000);