//matrix
function solution(id_list, report, k) {
	const matrix = Array(id_list.length).fill(0).map(x => Array(id_list.length).fill(0));
	console.dir(matrix);
	report.map((v,i,a) => {
		const toFrom = v.split(" ");
		const fromId = id_list.indexOf(toFrom[0]);
		const toId = id_list.indexOf(toFrom[1]);
		matrix[toId][fromId] = 1;
	})
	const answer = [];
	matrix.map((to) => {
		answer.push(to.reduce((prev, curr) => prev + curr, 0));
	})
	return answer;
}


// CASE1
const id_list1 = ["muzi", "frodo", "apeach", "neo"]
const report1 = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k1 = 2
const result1 = [2,1,1,0]
// // CASE2
// ["con", "ryan"]
// ["ryan con", "ryan con", "ryan con", "ryan con"]
// 3
// [0,0]

console.log(solution(id_list1, report1, k1))