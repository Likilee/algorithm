// 7, 70, 45
// 7, 2.3, 9

function solution(progresses, speeds) {
	const remains = progresses.map((v, i) => {return Math.ceil( (100 - v) / speeds[i])});
	const answer = [];
	let max = remains[0];
	let count = 1;
	for (let i = 1; i < remains.length; ++i) {
		if (remains[i] > max) {
			answer.push(count);
			max = remains[i];
			count = 0;
		}
		++count;
	}
	answer.push(count);
	return answer;
}

function assert(name, actual, expected) {
	if (actual === expected) {
		console.log('✅ OK - ', name);
	} else {
		console.log('❌ FAIL - ', name);
		console.log(`actual: ${actual}`);
		console.log(`expected: ${expected}`);
	}
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
let result = [2, 1];
assert('Test1', solution(progresses, speeds), result);

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];
result = [1, 3, 2];
assert('Test2', solution(progresses, speeds), result);
