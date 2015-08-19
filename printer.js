function printSudoku(sudokuArray){
	var template = "";
	template += "+-----------------------+\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "-------------------------\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "-------------------------\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "| 0 0 0 | 0 0 0 | 0 0 0 |\n";
	template += "+-----------------------+\n";
	var stringArray = new Array(template.length);
	for (var i = 0; i < template.length; i++){
		stringArray[i] = template[i];
	}

	var counter = 0;
	for (var i = 2; i < 13; i ++){
		if (i != 5 && i != 9){
			stringArray[(i-1)*26 + 2] = sudokuArray[counter * 9]?sudokuArray[counter * 9].toString():" ";
			stringArray[(i-1)*26 + 4] = sudokuArray[counter * 9 + 1]?sudokuArray[counter * 9 + 1].toString():" ";
			stringArray[(i-1)*26 + 6] = sudokuArray[counter * 9 + 2]?sudokuArray[counter * 9 + 2].toString():" ";
			stringArray[(i-1)*26 + 10] = sudokuArray[counter * 9 + 3]?sudokuArray[counter * 9 + 3].toString():" ";
			stringArray[(i-1)*26 + 12] = sudokuArray[counter * 9 + 4]?sudokuArray[counter * 9 + 4].toString():" ";
			stringArray[(i-1)*26 + 14] = sudokuArray[counter * 9 + 5]?sudokuArray[counter * 9 + 5].toString():" ";
			stringArray[(i-1)*26 + 18] = sudokuArray[counter * 9 + 6]?sudokuArray[counter * 9 + 6].toString():" ";
			stringArray[(i-1)*26 + 20] = sudokuArray[counter * 9 + 7]?sudokuArray[counter * 9 + 7].toString():" ";
			stringArray[(i-1)*26 + 22] = sudokuArray[counter * 9 + 8]?sudokuArray[counter * 9 + 8].toString():" ";
			counter++;
		}
	}

	console.log(stringArray.join(''));
}

module.exports = printSudoku;