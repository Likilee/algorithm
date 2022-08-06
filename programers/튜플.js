//100만개의 집합을 가지고 있다.
// 튜플의 크기 === 가장 요소가 많은 집합의 크기
// 튜플의 순서 등장하는 모든 요소들의 등장 빈도 수를 확인한다.
// 빈도수가 높은 원소부터 줄세우면 끝!

/* 정규식 상수 */
const BRACE = /}|{/g;

function solution(s) {
	const AppearanceCount = s
		.replace(BRACE, '')
		.split(',')
		.reduce((pv, cv) => {
			pv[cv] = (pv[cv] || 0) + 1;
			return pv;
		}, {});

	const tuple = Object.entries(AppearanceCount)
	.sort(([_, a], [__, b]) => b - a)
	.map((v) => parseInt(v[0]));

	return tuple;
}

const s1 = '{{2},{2,1},{2,1,3},{2,1,3,4}}';
const s2 = '{{1,2,3},{2,1},{1,2,4,3},{2}}';

console.log(solution(s1));
