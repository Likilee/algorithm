// n! 까지 값을 담은 배열을 만들어둔다.
// 각 자리에 올 숫자의 Idx를 찾는 알고리즘을 사용한다. k / (n-1)! 를 올림한 뒤 -1을 하면 배열의 남아있는 숫자 중 몇 번 째 숫자가 현재 위치에 오는지 알 수 있다.
// splice 함수는 start 인자가 음수인 경우, 배열의 끝부터 반대로 인덱스를 처리하는 것을 이용하자.
// k 가 0 이면 pickId는 -1 이 된다. 즉 위, splice 의 성질에 의해 pickedNumber는 마지막 요소가 된다.
function solution(n, k) {
	const factorials = createFact(n);
	const array = Array.from({ length: n }, (_, i) => i + 1);
	const answer = [];
	while (array.length !== 1) {
		const pickIdx = Math.ceil(k / factorials[array.length - 1]) - 1;
		const pickedNumber = array.splice(pickIdx, 1)[0];
		answer.push(pickedNumber);
		k = k % factorials[array.length];
	}
	return [...answer, ...array];
}

function createFact(size) {
	const factorials = Array.from({length: size + 1}, () => 1);
	for (let i = 1; i < size + 1; ++i) {
		factorials[i] = factorials[i - 1] * i;
	}
	return factorials;
}

console.log(solution(4,6));