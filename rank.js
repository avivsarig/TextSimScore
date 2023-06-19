const { MAX_LENGTH_RATIO } = require('./config.js');
const levenshtein = require('js-levenshtein');

function rankText(data) {
    n = data.length;
    const matrix = Array(n).fill().map(() => Array(n).fill());

    for (let [i, element] of data.entries()) {
        matrix[i][i] = 0;

        for (let j = i + 1; j < data.length; j++) {
            const ratio = element.length / data[j].length;
            isIrrelevantRatio = Math.max(ratio, 1 / ratio) <= MAX_LENGTH_RATIO;

            if (!isIrrelevantRatio) {
                matrix[i][j] = 0;
                matrix[j][i] = 0;
            } else {
                const dist = levenshtein(element, data[j]);
                const rank = 1 - dist / Math.max(element.length, data[j].length);
                matrix[i][j] = rank;
                matrix[j][i] = rank;
            }
        }
    }

    return matrix;
}

module.exports = { rankText };
