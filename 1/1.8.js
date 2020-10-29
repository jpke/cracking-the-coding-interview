// Zero Matrix
// For an MxN matrix, if an element is 0, set it's entire row and columen to 0

const nullifyRowOrColumn = (matrixArray, rowOrColumnIndex, type) => {
  if (type === "row") {
    return matrixArray[0].forEach(
      (_, idx) => (matrixArray[rowOrColumnIndex][idx] = 0)
    );
  } else if (type === "column") {
    return matrixArray.forEach(
      (_, idx) => (matrixArray[idx][rowOrColumnIndex] = 0)
    );
  }
  throw new Error("Must set type to either row or column");
};

const setZeros = (matrixArray) => {
  let rowHasZero = false;
  let colHasZero = false;

  // check if first row has a zero
  for (let i = 0; i < matrixArray[0].length; i++) {
    if (matrixArray[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }
  // check if first column has a zero
  for (let i = 0; i < matrixArray.length; i++) {
    if (matrixArray[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  // check for zeros in the rest of the matrix
  for (let rowIndex = 0; rowIndex < matrixArray.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrixArray[0].length; colIndex++) {
      if (matrixArray[rowIndex][colIndex] === 0) {
        matrixArray[rowIndex][0] = 0;
        matrixArray[0][colIndex] = 0;
      }
    }
  }

  //nullify row based on values in first column
  for (let rowIndex = 1; rowIndex < matrixArray.length; rowIndex++) {
    if (matrixArray[rowIndex][0] === 0)
      nullifyRowOrColumn(matrixArray, rowIndex, "row");
  }
  //nullify column based on values in first row
  for (let colIndex = 1; colIndex < matrixArray[0].length; colIndex++) {
    if (matrixArray[0][colIndex] === 0)
      nullifyRowOrColumn(matrixArray, colIndex, "column");
  }

  // nullify first row if necessary
  if (rowHasZero) nullifyRowOrColumn(matrixArray, 0, "row");

  // nullify first column if necessary
  if (colHasZero) nullifyRowOrColumn(matrixArray, 0, "column");
};

// functions for testing
const getRandomInt = (max = 100, cutoff = 25) => {
  const randomInteger = Math.floor(Math.random() * Math.floor(max));
  return randomInteger >= cutoff ? randomInteger : 0;
};

const createMatrix = (rows, columns) => {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = getRandomInt();
    }
  }
  return matrix;
};

const printMatrix = (matrix) => {
  matrix.forEach((row) => console.log(row));
};

const matrix = createMatrix(4, 3);

printMatrix(matrix);

setZeros(matrix);
console.log("");
printMatrix(matrix);
