// id_list 에 담긴 사람들이 자신이 신고한 사람 중 k 번 이상 신고당한 사람의 수를 리턴
// 유저마다 신고자 배열을 들고 있으면, report 분석 후, id_list 배열 인덱스에 메일을 보내면 될듯

// 데이터1. id_list -["muzi", "frodo", "apeach", "neo"],
// 데이터2. 중복없는 신고 결과 배열 reported - [['apeach'], [muzi, apeach], [], [frodo, muzi]]
//					id_list.length 와 같은 크기를 갖는 Set 배열을 만들자.
function solution(id_list, report, k) {
	const reportersPerUser = Array.from(
		{ length: id_list.length },
		(v) => new Set()
	);
	for (const element of report) {
		const [reporter, respondent] = element.split(' ');
		reportersPerUser[id_list.indexOf(respondent)].add(reporter);
	}
	return reportersPerUser.reduce(
		(prev, curr) => {
			if (curr.size >= k) {
				[...curr].map((v) => prev[id_list.indexOf(v)]++);
			}
			return prev;
		},
		Array.from({ length: id_list.length }, () => 0)
	);
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
	'muzi frodo',
	'apeach frodo',
	'frodo neo',
	'muzi neo',
	'apeach muzi',
];

console.log(solution(id_list, report, 2));
