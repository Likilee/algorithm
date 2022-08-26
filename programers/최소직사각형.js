// 모든 종류의 명함을 담을 수 있는 명함통의 최소면적을 구하자.
// width 최대 * height 최대로 하면된다.
// 모든 명함을 오름차순으로 정렬한 뒤, 구하자.

function solution(sizes) {
	return sizes
		.map((size) => size.sort((a, b) => a - b))
		.reduce(
			(prev, current) => {
				return [Math.max(prev[0], current[0]), Math.max(prev[1], current[1])];
			},
			[0, 0]
		)
		.reduce((prev, current) => prev * current, 1);
}

// TEST
expectEqual(
	'4000 이 나와야해',
	4000,
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	])
);

expectEqual(
	'120 이 나와야해',
	120,
	solution([
		[10, 7],
		[12, 3],
		[8, 15],
		[14, 7],
		[5, 15],
	])
);

expectEqual(
	'133 이 나와야해',
	133,
	solution([
		[14, 4],
		[19, 6],
		[6, 16],
		[18, 7],
		[7, 11],
	])
);
///TESTER
/**
 * ### Expect equal value
 * Can't compare Objects
 */
function expectEqual(testName, a, b) {
	if (a === b) console.log(`✅ Success : ${testName} `);
	else console.log(`🤬 Fail : ${testName}`);
}

/**
 * ### Expect not equal value
 * Can't compare Objects
 */
function expectNEqual(testName, a, b) {
	if (a !== b) console.log(`✅ Success : ${testName} `);
	else console.log(`🤬 Fail : ${testName}`);
}
