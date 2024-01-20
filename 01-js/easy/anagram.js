/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //BRUTE FORCE:

  // // Convert to lowercase
  //  const lowerStr1 = str1.toLowerCase();
  //  const lowerStr2 = str2.toLowerCase();

  //  // Sort the characters
  //  const sortedStr1 = lowerStr1.split('').sort().join('');
  //  const sortedStr2 = lowerStr2.split('').sort().join(''); 
  //  //If you were to use split() without an argument or join() without an argument, 
  //  //the default behavior would be to split or join the string using a comma as the separator, 
  //  //resulting in unexpected behavior when working with individual characters. By using split('') and join(''), 
  //  //the code explicitly communicates the intention to operate on individual characters.
  //  // Check if the sorted strings are the same
  //  return sortedStr1 === sortedStr2;


  //OPTIMAL SOLUTION:
  
  //base case
  if(str1.length != str2.length){
    return false;
  }

  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
 
  const counts =[];//array

  for(let c of str1){
    let i =c.charCodeAt(0) - 'a'.charCodeAt(0);
    counts[i] = (counts[i] || 0) + 1;
  }

  for(let c of str2){
    let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
    if(!counts[i]){
      return false;
    }
    counts[i]--;
  }
  return true;

}

module.exports = isAnagram;
