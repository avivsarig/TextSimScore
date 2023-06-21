const { fileToData } = require('./getData.js');
const { rankText } = require('./rank.js');
const { calcMatrix } = require('./calc.js');

function rankSet() {
    /**
     * Takes a path to a JSON file as input (passed as a command-line argument), reads the file, ranks the text data, and then calculates a "probability vector". 
     * The function first checks if the path is provided and if the file at the path is a valid JSON file. If not, it throws an error. 
     * The function then ranks the text data from the file using `rankText` function, and then uses `calcMatrix` function to compute the "probability vector". 
     *
     * @throws {string} If no path is provided as a command-line argument or the provided file is not a valid JSON file, 
     * the function throws an error message.
     *
     * @returns {Array} - Returns a "probability vector" calculated based on the conditions and operations in `calcMatrix` function.
     */

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