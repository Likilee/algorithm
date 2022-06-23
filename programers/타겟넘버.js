function solution(numbers, target) {
	return getAnswer(numbers, 0, target, 0);
}

function getAnswer(numbers, index, target, sum) {
	if (numbers.length === index) {
		if (sum === target) {
			return 1;
		}
        return 0;
	}
	return (
		getAnswer(numbers, index + 1, target, sum + numbers[index]) +
		getAnswer(numbers, index + 1, target, sum - numbers[index])
	);
}