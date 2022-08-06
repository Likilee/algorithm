/*
 * `codeOwnersMap`과 `directory`를 입력받아
 * `directory`의 코드 주인 목록을 반환하는 함수를 작성하세요.
 */
function solution(codeOwnersMap, directory) {
	const paths = directory.split('/');
	return getOwner(codeOwnersMap, paths, 0);
}

function getOwner(dir, paths, i) {
	const nextDir = dir[paths[i]];
	if (Array.isArray(nextDir)) return nextDir; // is Owner Array
	return getOwner(nextDir, paths, i + 1);
}

const codeOwnersMap = {
	scripts: ['배수진'],
	services: {
		'business-ledger': ['하이', '김을동'],
	},
};

console.log(solution(codeOwnersMap, 'scripts'));
console.log(solution(codeOwnersMap, 'business-ledger'));
