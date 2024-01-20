/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
    }

module.exports = sleep;


//for personal testing on rept it 


// function sleep(milliseconds) {
//     let p = new Promise(function (resolve){
//     setTimeout(()=>{        
//         console.log("From inside setTimeout.");
//         resolve();        
//     }, milliseconds);
    
//     });
//     return p;
// }

// module.exports = sleep;


// // CODE BEFORE THE SLEEP FUNCTION

// sleep(3000).then(()=>{
//     console.log("This is the resolve function being called after the time waited during setTimeout.");
//     // REST OF THE CODE AFTER THE TIME WAITED...
// });




