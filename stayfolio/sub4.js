const solution = (number) => {
	const sumOfDigits = (number) => {
		if (number / 10 < 1) return number;
		return (number % 10) + sumOfDigits(Math.floor(number / 10));
	};

	const getFruitNumber = (number) => {
		let result = number - sumOfDigits(number);
		while (result > 100) {
			result = result - sumOfDigits(result);
		}
		return result;
	};

	return getFruitNumber(number);
};

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
console.log(solution(92));
console.log(solution(999913));

const getApple = (number) => {
	return 'apple';
};
// 1000a + 100b + 10c + d  === 999a + 99b + 9c + (a + b + c + d)
