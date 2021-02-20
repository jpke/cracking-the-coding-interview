// URLify - replace all spaces in a string with '%20', and remove any trailing spaces at end of string

// urlify from a string (returns a new string)
const urlify = (str) => {
  return str.trim().replace(/ /g, "%20");
};
console.log(urlify("Mr John Smith   "));

// urlify from a character array, so operation can be performed in place
// assume the array has sufficient space for the insertions
// work backwords through the array, starting at the length needed for the insertions (set null character at end of this length)
// copy characters over to new index, replacing ' ' with '%20'

const replaceSpaces = (charArray, trueLength) => {
  // get number of spaces in charArray, up to trueLength. then double this count to allow for extra characters '%20'
  let numberOfSpaces = 0;
  for (let i = 0; i < trueLength; i++) {
    if (charArray[i] === " ") numberOfSpaces++;
  }

  let newIndex = trueLength - 1 + numberOfSpaces * 2;

  // adding a null character if there are excess spaces at point in charArray where they would start
  if (newIndex + 1 < charArray.length) charArray[newIndex + 1] = "\0";

  for (let oldIndex = trueLength - 1; oldIndex >= 0; oldIndex--) {
    if (charArray[oldIndex] == " ") {
      charArray[newIndex] = "0";
      charArray[newIndex - 1] = "2";
      charArray[newIndex - 2] = "%";
      newIndex -= 3;
    } else {
      charArray[newIndex] = charArray[oldIndex];
      newIndex--;
    }
  }
};

const exampleCharArray = "Mr John Smith        ".split("");
replaceSpaces(exampleCharArray, 13);
console.log(exampleCharArray);
console.log(exampleCharArray.join(""));
