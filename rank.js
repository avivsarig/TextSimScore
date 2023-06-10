const { levenshteinDistance } = require('./compare.js')

function rankText(data) {
    n = data.length;
    const matrix = Array(n).fill().map(() => Array(n).fill());
    for (let [i, element] of data.entries()) {
        for (let j = i + 1; j < data.length; j++) {
            const rank = levenshteinDistance(element, data[j]);
            matrix[i][j] = rank;
            matrix[j][i] = rank;
            if (rank === 1) console.log(i, j)
        }
    }

    return matrix;
}

module.exports = { rankText };
