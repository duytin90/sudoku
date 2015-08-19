var generator = require('./generator.js');
var printer = require('./printer.js');

var sudokuArray = generator();
printer(sudokuArray);