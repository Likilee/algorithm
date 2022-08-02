function solution(rows, columns, queries) {
	const matrix = createMatrix(rows, columns);
	const answer = [];
	queries.forEach((query) => {
		answer.push(rotateAndGetMin(matrix, query));
	});
	return answer;
}

function createMatrix(rows, columns) {
	return Array.from({ length: rows }, (_, rowIndex) =>
		Array.from(
			{ length: columns },
			(_, columnIdx) => rowIndex * columns + columnIdx + 1
		)
	);
}
function rotateAndGetMin(matrix, query) {
	let min = 10000;
	const startR = query[0] - 1;
	const startC = query[1] - 1;
	const endR = query[2] - 1;
	const endC = query[3] - 1;
	const rotateArray = extractRotateArray(matrix, startR, startC, endR, endC);
	insertArrayWithRotate(matrix, startR, startC, endR, endC, rotateArray);

	return Math.min(...rotateArray);
}

function extractRotateArray(matrix, startR, startC, endR, endC) {
	const rotateArray = [];
	for (let c = startC; c < endC; ++c) {
		rotateArray.push(matrix[startR][c]);
	}
	for (let r = startR; r < endR; ++r) {
		rotateArray.push(matrix[r][endC]);
	}
	for (let c = endC; c > startC; --c) {
		rotateArray.push(matrix[endR][c]);
	}
	for (let r = endR; r > startR; --r) {
		rotateArray.push(matrix[r][startC]);
	}
	const last = rotateArray.pop();
	return [last, ...rotateArray];
}

function insertArrayWithRotate(matrix, startR, startC, endR, endC, array) {
	let i = 0;
	for (let c = startC; c < endC; ++c) {
		matrix[startR][c] = array[i++];
	}
	for (let r = startR; r < endR; ++r) {
		matrix[r][endC] = array[i++];
	}
	for (let c = endC; c > startC; --c) {
		matrix[endR][c] = array[i++];
	}
	for (let r = endR; r > startR; --r) {
		matrix[r][startC] = array[i++];
	}
}

const case1 = {
	rows: 6,
	columns: 6,
	queries: [
		[2, 2, 5, 4],
		[3, 3, 6, 6],
		[5, 1, 6, 3],
	],
};

console.log(solution(case1.rows, case1.columns, case1.queries));
