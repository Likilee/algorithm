// 스택으로 처리하는 문제
// 중복을 만나면 pop 실행하며 count,
// pop이 실행되지 않으면 중복 당첨 없음
// 1억, O(n) 이하로 처리할 수 있는지 생각해보자.

function solution(arr) {
	const winningLog = new Map();
	let answer = 100000;

	for (let i = 0; i < arr.length; i++) {
		const client = arr[i];
		if (winningLog.has(client)) {
			const span = i - winningLog.get(client);
			if (span < answer) {
				answer = span;
			}
		}
		winningLog.set(client, i);
	}
	return answer === 100000 ? -1 : answer;
}

console.log(solution([2, 1, 3, 1, 4, 2, 1, 3]));
