const { NUM_RELEVANT_ELEMENTS, MIN_THRESHOLD, MIN_IN_CLUSTER } = require('./config.js');

function calcMatrix(matrix) {
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