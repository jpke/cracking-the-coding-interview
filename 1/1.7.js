// Rotate Matrix
// Rotate in place NxN matrix by 90'
// iterate through each layer (row and column square) of the matrix. ie top and bottom columns, first and last rows are the outer layer
// in each layer, start at bottom left corner, move to top left
// move prior value for top left to top right
// move prior value for top right to bottom right
// move prior value for bottom right to bottom left
// then start with one column to the right of the bottom left value, repeating process
// continue until reaching bottom right corner of bottom row
// then move to next outermost layer

const rotateMatrix = (matrixArray) => {
  const matrixLength = matrixArray.length;
  if (matrixLength === 0 || matrixLength !== matrix[0].length) return false;

  for (let layer = 0; layer < matrixLength / 2; layer++) {
    const first = layer;
    const last = matrixLength - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const topLeft = matrixArray[first][i];
      const bottomLeft = matrixArray[last - offset][first];
      const bottomRight = matrixArray[last][last - offset];
      const topRight = matrixArray[i][last];

      // console.log(topLeft, bottomLeft, bottomRight, topRight);

      matrixArray[first][i] = bottomLeft; // topLeft <- bottomLeft
      matrixArray[last - offset][first] = bottomRight; // bottomLeft <- bottomRight
      matrixArray[last][last - offset] = topRight; // bottomRight <- topRight
      matrixArray[i][last] = topLeft; // topRight <- topLeft
    }
  }
  return true;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const createMatrix = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = getRandomInt(n * 5);
    }
  }
  return matrix;
};

const printMatrix = (matrix) => {
  matrix.forEach((row) => console.log(row));
};

const matrix = createMatrix(4);
printMatrix(matrix);
rotateMatrix(matrix);
printMatrix(matrix);
