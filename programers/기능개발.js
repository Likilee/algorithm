//Step1. progresses 배열과, speeds 배열을 순회하며, remainDays 배열 생성
//Step2. pop 기준 그룹 묶는 배열로 추리기
function solution(progresses, speeds) {
	return deployJobs(remains(progresses, speeds));
}

function remains(progresses, speeds) {
	return progresses.map((value, index, array) => {
		return Math.ceil((100 - value) / speeds[index]);
	});
}

function deployJobs(remains) {
	const result = [];
	let count = 1;
	let pivot = remains[0];
	for (let index = 1; index < remains.length; index++) {
		const element = remains[index];

		if (element > pivot) {
			pivot = element;
			result.push(count);
			count = 0;
		}
		++count;
	}
	result.push(count);
	return result;
}

// TEST
const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(remains(progresses, speeds));
console.log(solution(progresses, speeds));