function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join("")
  return (reverseWord == word)
}

/* 
  take the string 
  reverse the string 
  if the string is equal to the reverse string then return true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
