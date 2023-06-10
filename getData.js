const fs = require('fs');

function getFromFile(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const jsonData = JSON.parse(data);
        if (!jsonData.data || !Array.isArray(jsonData.data)) {
            console.error('Invalid JSON structure. Expected an object with a "data" array.');
            return false;
        }
        return jsonData.data;
    } catch (err) {
        console.error('Error: ', err);
        return false;
    }
}

function rawToData(rawArray) {
    return rawArray.map(str => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase());
}

function fileToData(path) {
    const fileData = getFromFile(path);
    if (!fileData) return false;
    data = rawToData(fileData);
    return data;
}

module.exports = { fileToData };
