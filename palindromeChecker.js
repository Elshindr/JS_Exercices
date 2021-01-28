function palindrome(str) {
  // Find special symbols and replace it.
   let testRegex = /[\W_]/g;
   let tab = [];
   let src = str.replace(testRegex, '').toLowerCase();

   for (let i = 0; i < src.length; i++){
     tab.push(src.substring(i, i+1));
   }

  //Check for palindrome
  let palinTester = true;
  let reverse = tab.slice().reverse().join();

  if (reverse != tab.join()){
       palinTester = false;
  }

  return palinTester;
}

// Test examples
console.log(palindrome("1 eye for of 1 eye."));
