// Palindrome Permutation
// Determine if a string has a permutation that is a palindrome
// Ignore casing and non-letter characters

// For each character in string, convert to integer and toggle bit in a bit vector
// Afterwards, check that at most only one bit in bit vector is set to 1

const toggle = (bitVector, index) => {
  // ignore non-letter characters
  if (index < 97 || index > 122) return bitVector;
  // mask to 1 bit corresponding to index
  const mask = 1 << index;
  // XOR bitVector with mask
  return bitVector ^ mask;
};

const isPermutationofPalindrome = (str) => {
  // create bit vector
  let bitVector = 0;
  for (c in str) {
    // get unicode value for lowercased character
    const x = str.toLowerCase().charCodeAt(c);
    // use unicode value to toggle bit in bit vector
    bitVector = toggle(bitVector, x);
  }

  // check at most one bit set
  // bitwise AND
  return (bitVector & (bitVector - 1)) == 0;
};

console.log(isPermutationofPalindrome("baa")); //true
console.log(isPermutationofPalindrome("baaaA")); //true
console.log(isPermutationofPalindrome("baaa")); //false
console.log(isPermutationofPalindrome("b aa_ [a")); //false
console.log(isPermutationofPalindrome("baa a_ [a")); //true
