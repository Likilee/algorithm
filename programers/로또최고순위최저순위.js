// 이 문제는, 0 을 제외한 나머지의 일치 갯수 와 0 갯수를 알면 끝

function solution(lottos, win_nums) {
	const rank = [6,6,5,4,3,2,1];
	const count = lottos.reduce(
		(pv, cv) => {
			cv === 0 ? ++pv[1] : win_nums.includes(cv) ? ++pv[0] : 0;
			return pv;
		},
		[0, 0]
	);

	return [rank[count[0] + count[1]], rank[count[0]]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
