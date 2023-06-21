const { MAX_LENGTH_RATIO } = require('./config.js');
const levenshtein = require('js-levenshtein');

function rankText(data) {
    /**
     * Calculates the similarity rank between each pair of text entries in the provided array. The rank is calculated based on the Levenshtein distance, considering only the pairs whose lengths are not too disparate (as determined by the MAX_LENGTH_RATIO constant from the config file).
     * The similarity rank is a value between 0 and 1, with 1 being identical strings,and 0 being entirely dissimilar.
     *
     * @param {Array} data - An array of text entries to rank.
     *
     * @returns {Array} - Returns a 2D matrix where each cell [i][j] represents the similarity rank between data[i] and data[j].
     */
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
