var sudokuArray = fillSudoku(new Array(81));
while (sudokuArray == -1){
	sudokuArray = fillSudoku(new Array(81));
}
printSudoku(sudokuArray);

function fillSudoku(sudokuArray) {
	sudokuArray[0] = getRandomInt(1,9);
	for (var i = 1; i < sudokuArray.length; i++){
		var nextNumber = getSudokuInt(getRow(i, sudokuArray), getSquare(i, sudokuArray), getColumn(i, sudokuArray));
		if (nextNumber !== -1) {
			sudokuArray[i] = nextNumber;
		}
		else {
			return -1;
		}
	}

	return sudokuArray;
}

function getSudokuInt(rowArray, squareArray, columnArray) {
	var candidate = getRandomInt(1,9);
	var usedCandidates = [candidate];
	var restart = false;
	while (checkCandidate(rowArray, squareArray, columnArray, candidate) && !restart){
		candidate = getRandomInt(1,9);

		if (usedCandidates.indexOf(candidate) == -1) {
			usedCandidates.push(candidate);
		}
		if(usedCandidates.length == 9) {
			restart = true;
			return -1;
		}
	}
	return candidate;
}


function checkCandidate(rowArray, squareArray, columnArray, candidate){
	if (rowArray.indexOf(candidate) !== -1) {
		return true;
	}
	else if (squareArray.indexOf(candidate) !== -1) {
		return true;
	}
	else if (columnArray.indexOf(candidate) !== -1) {
		return true;
	}
	else {
		return false;
	}
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRow(currentPosition, sudokuArray) {
	var row;
	if (currentPosition < 9){
		row = sudokuArray.slice(0,9);
	}
	else if (currentPosition > 8 && currentPosition < 18){
		row = sudokuArray.slice(9,18);
	}
	else if (currentPosition > 17 && currentPosition < 27){
		row = sudokuArray.slice(18,27);
	}
	else if (currentPosition > 26 && currentPosition < 36){
		row = sudokuArray.slice(27,36);
	}
	else if (currentPosition > 35 && currentPosition < 45){
		row = sudokuArray.slice(36,45);
	}
	else if (currentPosition > 44 && currentPosition < 54){
		row = sudokuArray.slice(45,54);
	}
	else if (currentPosition > 53 && currentPosition < 63){
		row = sudokuArray.slice(54,63);
	}
	else if (currentPosition > 62 && currentPosition < 72){
		row = sudokuArray.slice(63,72);
	}
	else if (currentPosition > 71 && currentPosition < 81){
		row = sudokuArray.slice(72,81);
	}
	return row;
}

function getColumn (currentPosition, sudokuArray) {
	var column;
	var firstColumn = [0,9,18,27,36,45,54,63,72];
	var secondColumn = [1,10,19,28,37,46,55,64,73];
	var thirdColumn = [2,11,20,29,38,47,56,65,74];
	var fourthColumn = [3,12,21,30,39,48,57,66,75];
	var fifthColumn = [4,13,22,31,40,49,58,67,76];
	var sixthColumn = [5,14,23,32,41,50,59,68,77];
	var seventhColumn = [6,15,24,33,42,51,60,69,78];
	var eighthColumn = [7,16,25,34,43,52,61,70,79];
	var ninthColumn = [8,17,26,35,44,53,62,71,80];
	if(firstColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return firstColumn.indexOf(index) !== -1;
		});
	}
	else if(secondColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return secondColumn.indexOf(index) !== -1;
		});
	}
	else if(thirdColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return thirdColumn.indexOf(index) !== -1;
		});
	}
	else if(fourthColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return fourthColumn.indexOf(index) !== -1;
		});
	}
	else if(fifthColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return fifthColumn.indexOf(index) !== -1;
		});
	}
	else if(sixthColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return sixthColumn.indexOf(index) !== -1;
		});
	}
	else if(seventhColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return seventhColumn.indexOf(index) !== -1;
		});
	}
	else if(eighthColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return eighthColumn.indexOf(index) !== -1;
		});
	}
	else if(ninthColumn.indexOf(currentPosition) !== -1){
		column = sudokuArray.filter(function(position, index){
			return ninthColumn.indexOf(index) !== -1;
		});
	}
	return column;
}

function getSquare (currentPosition, sudokuArray) {
	var square;
	var firstSquare = [0,1,2,9,10,11,18,19,20];
	var secondSquare = [3,4,5,12,13,14,21,22,23];
	var thirdSquare = [6,7,8,15,16,17,24,25,26];
	var fourthSquare = [27,28,29,36,37,38,45,46,47];
	var fifthSquare = [30,31,32,39,40,41,48,49,50];
	var sixthSquare = [33,34,35,42,43,44,51,52,53];
	var seventhSquare = [54,55,56,63,64,65,72,73,74];
	var eighthSquare = [57,58,59,66,67,68,75,76,77];
	var ninthSquare = [60,61,62,69,70,71,78,79,80];
	if(firstSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return firstSquare.indexOf(index) !== -1;
		});
	}
	else if(secondSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return secondSquare.indexOf(index) !== -1;
		});
	}
	else if(thirdSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return thirdSquare.indexOf(index) !== -1;
		});
	}
	else if(fourthSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return fourthSquare.indexOf(index) !== -1;
		});
	}
	else if(fifthSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return fifthSquare.indexOf(index) !== -1;
		});
	}
	else if(sixthSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return sixthSquare.indexOf(index) !== -1;
		});
	}
	else if(seventhSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return seventhSquare.indexOf(index) !== -1;
		});
	}
	else if(eighthSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return eighthSquare.indexOf(index) !== -1;
		});
	}
	else if(ninthSquare.indexOf(currentPosition) !== -1){
		square = sudokuArray.filter(function(position, index){
			return ninthSquare.indexOf(index) !== -1;
		});
	}
	return square;
}

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
