function solution(answers) {
	const poja1 = [1, 2, 3, 4, 5];
	const poja2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const poja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	let corrects = [0, 0, 0];
	let answer = [];

	answers.map((answer, index) => {
		if (poja1[index % poja1.length] === answer) ++corrects[0];
		if (poja2[index % poja2.length] === answer) ++corrects[1];
		if (poja3[index % poja3.length] === answer) ++corrects[2];
	});
	const maxCorrect = Math.max.apply(null, corrects);
	for (let i = 0; i < 3; ++i) {
		if (corrects[i] == maxCorrect) answer.push(i + 1);
	}
	return answer;
}

console.log(solution([1, 3]));
