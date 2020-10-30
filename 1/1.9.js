// String Rotation
// check if a string is a substring of another
// double the string and see if it contains the substring

const isRotation = (stringA, stringB) => {
  if (stringA.length > 0 && stringA.length === stringB.length) {
    return stringA.concat(stringA).indexOf(stringB) > -1;
  }
  return false;
};

console.log(isRotation("hello", "lohel")); // true
console.log(isRotation("hello", "llohe")); // true
console.log(isRotation("hello", "loohel")); // false
console.log(isRotation("hello", "helo")); // false
