//  Determine if a string has all unique characters
//  Determine if a string has all unique characters
// uses bit vector to reduce space complexity
// calculate shift value, difference between binary of character and binary of character 'a'
// check if character was seen previously by &'d the checker with the binary of 1 leftward shifted by the shift value
// store binary of character in checker var by shifting 1 leftward by the shift value
// this stores a 1 at a location unique to the character, corresponding to the number of places the difference caused a 1 to be shifted left

const isUniqueChars = (str) => {
  let checker = 0;
  const binaryA = "a".charCodeAt(0).toString(2);

  for (let i = 0; i < str.length; i++) {
    const binaryOfCharacterI = str.charAt(i).charCodeAt(0).toString(2);
    const shiftValue = str.charAt(i).charCodeAt(0).toString(2) - binaryA;

    const oneLeftWardShifted = 1 << shiftValue;
    if ((checker & oneLeftWardShifted) > 0) {
      return false;
    }
    checker |= oneLeftWardShifted; // bitwise inclusive OR and assignment operator
  }
  return true;
};

console.log(isUniqueChars("abcdef"));
// true
console.log(isUniqueChars("abcdefb"));
// false
