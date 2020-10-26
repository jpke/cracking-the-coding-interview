// String Compression
// Compress string by setting counts of repeated characters. Return original string if compressed string length is longer.
// eg. "aabccccaaa" => "a2b1c4a3"

const countCompression = (stringToCount) => {
  let compressedLength = 0;
  let countConsecutive = 0;

  for (let i = 0; i < stringToCount.length; i++) {
    countConsecutive++;
    if (
      i + 1 >= stringToCount.length ||
      stringToCount.charAt(i) !== stringToCount.charAt(i + 1)
    ) {
      compressedLength += 1 + countConsecutive.toString().length;
      countConsecutive = 0;
    }
  }
  return compressedLength;
};

const compress = (initialString) => {
  const finalLength = countCompression(initialString);
  if (finalLength >= initialString.length) return initialString;

  let compressedString = "";
  let countConsecutive = 0;
  for (let i = 0; i < initialString.length; i++) {
    countConsecutive++;
    if (
      i + 1 >= initialString.length ||
      initialString.charAt(i) !== initialString.charAt(i + 1)
    ) {
      compressedString += initialString.charAt(i);
      compressedString += countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressedString;
};

console.log(compress("aabccccaa")); // "a2b1c4a2"
console.log(compress("abababac")); // "abababac"
console.log(compress("aaaaabbbbbbbbbbbbbbccbda")); // "a5b14c2b1d1a1"
