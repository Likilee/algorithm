// Sort 하는 이유
// 최적해를 구하는 문제를 Greedy 로 해결할 수 있는 조건을 만들어준다.

function solution(n, lost, reserve) {
	lost.sort((a, b) => a - b);
	reserve.sort((a, b) => a - b);

	const filteredLost = lost.filter(
		(item) => !lost.includes(item) || !reserve.includes(item)
	);

	const filteredReserve = reserve.filter(
		(item) => !lost.includes(item) || !reserve.includes(item)
	);

	const final = [];

	while (filteredLost.length !== 0 && filteredReserve.length != 0) {
		if (top(filteredReserve) > top(filteredLost) + 1) {
			filteredReserve.pop();
		} else if (top(filteredLost) > top(filteredReserve) + 1) {
			final.push(filteredLost.pop());
		} else {
			filteredReserve.pop();
			filteredLost.pop();
		}
	}
	return n - final.length - filteredLost.length;
}

// function top(array) {
// 	return
// }

function top(array) {
	return array[array.length - 1];
}
console.log(solution(5, [1, 2, 3, 4], [1, 4, 5]));
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1]));
// console.log(solution(5, [1, 3], [1]));


// function solutionWant(n, lost, reserve) {
// 	return n - lost.filter(리젋으랑똑같은애들).filter(제공못받은애들).length
// }