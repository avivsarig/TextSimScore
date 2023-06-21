const { NUM_RELEVANT_ELEMENTS, MIN_THRESHOLD, MIN_IN_CLUSTER } = require('./config.js');

function calcMatrix(matrix) {
    /**
     * Sorts each row of the input matrix in descending order and then computes a "probability vector" based on certain conditions and operations on each row.
     * Specifically, it calculates the max value between the mean and the median of the first NUM_RELEVANT_ELEMENTS elements in each row, provided these elements meet a certain condition defined by MIN_THRESHOLD and MIN_IN_CLUSTER.
     *
     * @param {Array} matrix - A 2D matrix (an array of arrays). Each inner array is a row in the matrix.
     *
     * @returns {Array} - Returns a "probability vector". Each element in this vector corresponds to a row in the input matrix 
     * and represents a value calculated based on the conditions and operations as described above.
    */

    const matrixSize = matrix.length;
    for (let i = 0; i < matrixSize; i++) {
        matrix[i].sort((a, b) => b - a);
    }

    const probVector = new Array(matrixSize).fill(NaN);
    for (let i = 0; i < matrixSize; i++) {
        if (matrix[i][0] < MIN_THRESHOLD) {
            probVector[i] = 0;
            continue;
        }

        const relevantElements = matrix[i].slice(0, NUM_RELEVANT_ELEMENTS);

        if (relevantElements[MIN_IN_CLUSTER - 1] === 0) {
            probVector[i] = 0;
            continue;
        }

        const mean = relevantElements.reduce((acc, curr) => acc + curr, 0) / NUM_RELEVANT_ELEMENTS;
        const median = relevantElements[2];

        probVector[i] = +Math.max(mean, median).toFixed(4);
    }

    return probVector;
}

module.exports = { calcMatrix };