// - 알파벳은 총 24개
// - n : 스트링길이 1000000
// - 전체 순회하며 알파뱃 카운트 로직 충분
// - 순회하며 알파벳 카운트 증가시킨다. // 증가시키며 maxCount도 확인
// - maxCount와 일치하는 알파벳을 순차적으로 string에 집어넣는다.

function solution(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const alpahArray = new Array(alphabet.length).fill(0);
	let maxCount = 0;
	s = s.toLowerCase();

	for (let i = 0; i < s.length; i++) {
		const index = alphabet.indexOf(s[i]);
		alpahArray[index]++;
		if (alpahArray[index] > maxCount)
			maxCount = alpahArray[index];
	}
	let answer ="";
	for (let i = 0; i < alpahArray.length; i++) {
		if (alpahArray[i] === maxCount)
			answer += alphabet[i];
	}
	return answer;
}

console.log(solution('BbA'));
