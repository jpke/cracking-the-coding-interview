// One Away
// Determine if a string is <= one edit away from matching another string
// Edits can be insert, remove or replace

const oneEditInsert = (longerString, shorterString) => {
  let indexLonger = 0;
  let indexShorter = 0;
  while (
    indexLonger < longerString.length &&
    indexShorter < shorterString.length
  ) {
    if (
      longerString.charAt(indexLonger) != shorterString.charAt(indexShorter)
    ) {
      if (indexLonger !== indexShorter) return false; //ensures <= one insertion required
      indexShorter++;
    } else {
      indexLonger++;
      indexShorter++;
    }
  }
  return true;
};

const oneEditAway = (firstString, secondString) => {
  if (firstString.length === secondString.length) {
    // check if strings require <= one replace
    let foundDifference = false;
    for (let i = 0; i < firstString.length; i++) {
      if (firstString.charAt(i) != secondString.charAt(i)) {
        if (foundDifference) return false;
        foundDifference = true;
      }
    }
    return true;
  } else if (firstString.length + 1 === secondString.length) {
    return oneEditInsert(firstString, secondString);
  } else if (firstString.length - 1 === secondString.length) {
    return oneEditInsert(secondString, firstString);
  }
  return false;
};

console.log(oneEditAway("string", "strinB")); //true
console.log(oneEditAway("string", "striBB")); //false
console.log(oneEditAway("string", "strBng")); //true
console.log(oneEditAway("stringA", "string")); //true
console.log(oneEditAway("stringA", "stringB")); //true
console.log(oneEditAway("stringA", "stringBB")); //false
console.log(oneEditAway("stringA", "stringBBB")); //false
