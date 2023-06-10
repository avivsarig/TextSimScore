function calcMatrix(maxtrix) {
    const weightedRes = [];
    for (let i = 0; i < maxtrix.length; i++) {
        weightedRes[i] = calcVector(maxtrix[i]), 0.5;
    }
    return weightedRes;
}

function calcVector(vector) {
    vector = vector.filter(v => v !== undefined);
    let res = calculateRMS(vector);
    return res;
}

function calculateRMS(array) {
    let sumOfSquares = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfSquares += Math.pow(array[i], 2);
    }

    const meanSquare = sumOfSquares / array.length;
    const rootMeanSquare = Math.sqrt(meanSquare);

    return rootMeanSquare;
}

module.exports = { calcMatrix };