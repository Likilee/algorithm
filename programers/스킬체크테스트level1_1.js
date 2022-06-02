function solution(n) {

	const answer = [];
	for (let rest = n; rest > 0;) {
			answer.push(rest % 10);
			rest = Math.floor(rest / 10);
	}
	return answer;
}

console.log(solution(12345));