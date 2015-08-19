var generator = require('./generator.js');
var printer = require('./printer.js');
var validator = require('./validator.js');

var sudokuArray = generator();
printer(sudokuArray);
// validator(sudokuArray) ? console.log("Correct puzzle") : console.log("Incorrect puzzle");
