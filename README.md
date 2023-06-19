# README.md

## Description

This Node.js application is designed to analyze an array of strings and return the probability that each string belongs to a cluster of highly similar texts. This application reads data from a JSON file, calculates a rank matrix based on the similarity of strings, and subsequently computes a probability vector indicating the chance of each string being part of a cluster.

## Modules

### main.js

This is the entry point of the application. It reads the input JSON data file, calculates the rank matrix using the `rankText` function from the `rank.js` module, and calculates the probability vector using the `calcMatrix` function from the `calc.js` module. It prints the final probability vector to the console.

### rank.js

This module is responsible for creating a rank matrix that indicates the similarity between each pair of strings in the input data. It uses the Levenshtein distance to calculate the similarity and ensures that the ratio of lengths between two strings does not exceed a predefined maximum length ratio.

### calc.js

This module calculates a probability vector from the rank matrix. The probability assigned to each string is the maximum between the mean and the median of the highest-ranking similarities for that string. If a string does not have a minimum number of similar strings, it is assigned a probability of 0.

## Usage

To use this application, follow the steps below:

1. Clone this repository or download the source code.
2. Install dependencies with `npm install`.
3. Run the application with `npm run start <path to your JSON data file>`. Please ensure that your JSON data file is a valid array of strings.

Please note that the constants `MAX_LENGTH_RATIO`, `NUM_RELEVANT_ELEMENTS`, `MIN_THRESHOLD`, and `MIN_IN_CLUSTER` in `config.js` can be adjusted according to your clustering requirements. These constants control the sensitivity of the clustering and ranking process.

## Dependencies

This application depends on the [js-levenshtein](https://www.npmjs.com/package/js-levenshtein) package for calculating the Levenshtein distance, which is a measure of the difference between two strings.
