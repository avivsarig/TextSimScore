const { fileToData } = require('./getData.js');
const { rankText } = require('./rank.js');
const { calcMatrix } = require('./calc.js');

const path = process.argv[2];
if (!path) {
    throw 'Please provide path to data file like this:\n `npm run start <path to data file>`';
}
const data = fileToData(path);
if (!data) {
    throw 'Please provide a path to a valid JSON file';
}

const resembleMatrix = rankText(data);
const weightedRes = calcMatrix(resembleMatrix);
console.log(weightedRes);