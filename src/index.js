var uniqueRandomArray = require('unique-random-array');
var starsWarNames = require('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};