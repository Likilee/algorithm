// 이분 탐색을 통한 접근을 사용한다.
// 소요 시간을 기준으로, 최소 시간 최대 시간을 만들고, 중앙 값일 때 총 처리 가능 인원수를 계산한다.
// 총 처리가능 인원수 > 인원 수 인 경우 : 더 적은 시간안에 처리가 가능하다는 뜻이므로, right = mid - 1,
// 총 처리가능 인원수 < 인원 수 인 경우 : 더 많은 시간이 필요하다는 뜻이므로, left = mid + 1

function solution(n, times) {
	let [left, right] = [1, Math.max(...times) * n];
	let mid = 0;
	console.log(left, right);

	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		const canServeCount = times.reduce(
			(acc, time) => (acc += Math.floor(mid / time)),
			0
		);
		if (canServeCount < n) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left;
}

console.log(solution(6, [4, 5, 6]));
console.log(solution(6, [7, 10]));
