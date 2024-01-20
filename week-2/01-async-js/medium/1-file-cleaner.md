## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs");

function myRead(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, "utf-8", function(err, data) {
      resolve(data);
    })
  })
}

function myWrite(file, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(file, data, function(err) {
      
        console.log("Saving the new file..");
        resolve();
      
    })
  })
}

function removeSpaces(str) {
  if (str) {
    let arr = str.split(" ");
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
        continue;
      } else {
        ans = ans + arr[i];
        ans = ans + " ";
      }
    }
    return ans;
  } else {
    return "";
  }
}

fileName = "fa.txt";
myRead(fileName).then(function(data) {
  removedSpaces_data = removeSpaces(data);
  console.log(removedSpaces_data);
  return myWrite(fileName, removedSpaces_data);
}).then(function() {
  console.log("\nFile has been saved!")
});


//output
//yo aman yo yo
<!-- Saving the new file..

File has been saved! -->