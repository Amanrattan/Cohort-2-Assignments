/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // COde 1
    // let lower_str = str.toLowerCase();
    // let vowels = ['a', 'e', 'i', 'o', 'u'];
    // let count = 0;

    // let vowels_obj = {
    //   'a': 0,
    //   'e': 1,
    //   'i': 2,
    //   'o': 3,
    //   'u': 4
    // };
    
    // for (let i = 0; i < lower_str.length; i++) {
     
    //   if (lower_str[i] in vowels_obj && vowels_obj[lower_str[i]] in vowels) {
    //     count++;
    //   }
      
    // }
    // return count;



    //code 2
    str = str.toLowerCase();
    

    // Initialize a counter for vowels
    let vowelCount = 0;

    // Iterate through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    // Return the final count of vowels
    return vowelCount;
}

module.exports = countVowels;