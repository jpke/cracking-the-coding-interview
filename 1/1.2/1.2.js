// determine if a string is a permutation of another
// early exit if the strings are not the same length
// create an array of 0's with length 128 (assuming 128 ASCII character set)
// iterate through first string, incrementing the array item corresponding to each character's ASCII integer each time the character is found
// iterate through second string, decrementing the array item corresponding to each character's ASCII integer each time the character is found
// early exist if an array item becomes negative during iteration through the second string

const permuation = (strA, strB) => {
  if (strA.length !== strB.length) return false;

  const letters = new Array(128).fill(0);
  for (let i = 0; i < strA.length; i++) {
    const charCodeA = strA.charAt(i).charCodeAt(0);
    letters[charCodeA]++;
  }

  for (let i = 0; i < strB.length; i++) {
    const charCodeB = strB.charAt(i).charCodeAt(0);
    letters[charCodeB]--;
    if (letters[charCodeB] < 0) {
      return false;
    }
  }

  return true;
};

console.log(permuation("stringA", "Agnirts")); // true
console.log(permuation("stringA", "StringA")); // false
console.log(permuation("stringA", "stringAA"));// false
console.log(permuation("stringA", "stringB")); // false
