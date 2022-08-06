// 가장 무식한 방법은?
// 1개 단위 부터 500개 단위까지 다해보기
// 한번 검사할 때 시간 복잡도는?
// string length = n
// 1 ~ n / 2 unit 만큼 순회
// O(n2) 이지만 n  max 1000 이므로 무난할듯.
// 문제 오해. 무조건 맨 앞에서부터 압축해야하는문제였음..

function solution(s) {
	let min = s.length;
	for (let unit = 1; unit <= s.length / 2; ++ unit) {
		min = Math.min(min, compress2(s, unit));
	}
	return min;
}

// 스트링과 단위 숫자를 받아서 검사 후 스트링 길이를 리턴하는 함수 만들자
// 1~500 까지 해당 함수 호출하자.

// 패턴 큐 또는 포인터 사용해서 에 유닛 수만큼 넣고 앞으로 가자~
// 지렁이처럼 나가면서 풀어보자.
// 패턴 시작포인터 하나.
// 패턴 커런트 포인터 하나.
// 패턴 비교 포인터 하나.
const compress = (str, unit) => {
	let length = 0;
	let patternCnt = 0;
	let sameCnt = 0;
	let front = 0;
	let back = unit;

	while (back < str.length) {
		if (str[front] === str[back]) {
			sameCnt += 1;
		}
		else if (str[front] !== str[back] && patternCnt > 0) {
			length += unit + 1;
			patternCnt = 0;
			front = back;
			back = front + unit;
			continue;
		}
		else {
			++length;
		}
		if (sameCnt === unit) {
			sameCnt = 0;
			patternCnt += 1;
		}
		++front;
		++back;
	}
	if (patternCnt > 0)
		length += unit + 1;
	else {
		length += sameCnt + str.length - front;
	}
	return length
};

// samecnt + 1, if (sameCnt === unit) patternCnt += 1; sameCnt = 0;
// 포인터 두개로 가능한가?
// unit 만큼 일치 하는지 카운터로 판단.
// aa aaaabbbbb  sameCnt: 1, patternCnt = 1
// a aa bbbbb sameCnt: 1, patternCnt = 2
// aa ab bbb sameCnt: 0, -> patternCnt = 0, length += (patternCnt + 1) * unit,  3a
// aaa bb bb sameCnt: 1, -> patternCnt = 1
// aaab bb b sameCnt: 1, -> patternCnt = 2
// aaabb bb sameCnt: 1, -> patternCnt = 3
// aaabbb bc defg sameCnt: 0, -> patternCnt = 0, length += (patternCnt + 1) * unit, 3a4d
// aaabbbb cd efg sameCnt: 0, length += 1;
// aaabbbbc de f sameCnt: 0, length += 1;


// case1. a ab baccc
//case3. abc/abc/abc/a/e/f/adc/adc 같은 겨우.

// 무조건 앞에서부터 자르는거라면,,
// 포인터 이동 규칙을 변경해야할듯.
// samecnt + 1, if (sameCnt === unit) patternCnt += 1; sameCnt = 0;
// 포인터 두개로 가능한가?
// unit 만큼 일치 하는지 카운터로 판단.
// aa aaaabbbbb  sameCnt: 1, patternCnt = 1
// a aa bbbbb sameCnt: 1, patternCnt = 2
// aa ab bbb sameCnt: 0, -> patternCnt = 0, length += (patternCnt + 1) * unit,  3a
// aaa bb bb sameCnt: 1, -> patternCnt = 1
// aaab bb b sameCnt: 1, -> patternCnt = 2
// aaabb bb sameCnt: 1, -> patternCnt = 3
// aaabbb bc defg sameCnt: 0, -> patternCnt = 0, length += (patternCnt + 1) * unit, 3a4d
// aaabbbb cd efg sameCnt: 0, length += 1;
// aaabbbbc de f sameCnt: 0, length += 1;

const compress2 = (str, unit) => {
	let length = 0;
	let patternCnt = 0;
	let sameCnt = 0;
	let front = 0;
	let back = unit;
	while (back < str.length) {

	}

};

console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));

// ababcdcd ababcdcd
// unit 단위로 검사하다가. 아니면 length 추가하고 점프해야함..

// aba bcd cda bab cdc d unit 3 , sameCnt == 0, lenght += unit, front = front + (unit - front % unit) (다음유닛 시작점), back = front + unit;
// abab cdcd abab cdcd
// ababcdcd ababcdcd def sameCnt === unit,
