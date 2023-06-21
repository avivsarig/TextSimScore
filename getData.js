const fs = require('fs');


function getFromFile(path) {
    /**
    * Reads a file from a specified path and parses its content as JSON. The JSON content should contain a "data" field which should be an array.
    *
    * @param {String} path - The path of the file that needs to be read. The path can be either absolute or relative.
    *
    * @returns {Array|boolean} - Returns the "data" array from the parsed JSON. If any error occurs or the JSON structure is invalid, logs the error to the console and returns false.
    */

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
    /**
     * Processes an array of strings by removing any special characters, including punctuation and whitespace, and converting each string to lowercase.
     *
     * @param {Array} rawArray - The array of raw strings that need to be processed.
     *
     * @returns {Array} - Returns a new array of strings, where each string has been processed.
     */

    return rawArray.map(str => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase());
}

function fileToData(path) {
    /**
     * Reads a file from the specified path using the `getFromFile(path)` function and processes the data using the `rawToData(rawArray)` function.
     *
     * @param {String} path - The path of the file that needs to be read and processed. The path can be either absolute or relative.
     *
     * @returns {Array|boolean} - Returns a processed data array. If any error occurs or the JSON structure is invalid, returns false.
     */
    const fileData = getFromFile(path);
    if (!fileData) return false;
    data = rawToData(fileData);
    return data;
}

module.exports = { fileToData };
