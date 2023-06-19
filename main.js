const { fileToData } = require('./getData.js');
const { rankText } = require('./rank.js');
const { calcMatrix } = require('./calc.js');

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            const formattedValue = matrix[i][j] === 0 ? 0 : matrix[i][j].toFixed(3);
            row += `${formattedValue}\t`;
        }
        console.log(row);
    }
}

function rankSet() {
    const path = process.argv[2];
    if (!path) {
        throw 'Please provide path to data file like this:\n `npm run start <path to data file>`';
    }
    const data = fileToData(path);
    if (!data) {
        throw 'Please provide a path to a valid JSON file';
    }

    const rankMatrix = rankText(data);
    const weightedRes = calcMatrix(rankMatrix);

    return weightedRes;
}

weightedRes = rankSet();
console.log(weightedRes);