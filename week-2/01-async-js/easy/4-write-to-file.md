## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeToFile(file){
    fs.writeFile(file, "this is some new data added on to the file",
                 function(err){
                    if(err){
                        throw err;
                    }
                    console.log("File Write happend");
                    console.log("File has been saved!");
                    } 
                );
}


fileName = "file.txt";
writeToFile(fileName);
//This will just write the contents mentioned into the file.
//finish



//try fwe things
//There’s an interesting behavior that happens when we try to read from the file and write new things, and then try to read again →

const fs = require("fs");

function countWords(string) {
  let words = string.split(" ");
  return words.length;
}

function readFromFile(file) {
  fs.readFile(file, "utf-8", function (err, data) {
    console.log("File Read Happened", `${(readCounter += 1)}`);
    console.log(data);
    console.log("Number of words: ", countWords(data));
  });
}

function writeToFile(file) {
  fs.writeFile(
    file,
    "This is some new data added on to the previously present contents",
    function (err) {
      if (err) {
        throw err;
      }
      console.log("File Write happened");
      console.log("File has been saved!");
    }
  );
}

fileName = "file.txt";
readCounter = 0;

readFromFile(fileName);
writeToFile(fileName);
readFromFile(fileName);


--OUTPUT--
// File Write happened
// File has been saved!
// File Read Happened", 1
// This is some new data added on to the previously present contents
// Number of words:  12
// File Read Happened", 2
// This is some new data added on to the previously present contents
// Number of words:  12