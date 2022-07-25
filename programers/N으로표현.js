function solution(N, number) {
	const dpArray = Array.from({ length: 9 }, (v) => (v = new Set()));

	const getOperationResult = (value1, set, dpIndex) => {
		set.forEach((value2) => {
			dpArray[dpIndex].add(value1 + value2);
			if (value1 - value2 > 0) dpArray[dpIndex].add(value1 - value2);
			if (value1 / value2 > 0) dpArray[dpIndex].add(value1 * value2);
			if (value1 / value2 > 0) dpArray[dpIndex].add(Math.floor(value1 / value2));
		});
	};

	const fillSet = () => {
		for (let i =  1; i <= 8; ++i) {
			const NxN = getNRepetition(N, i);
			dpArray[i].add(NxN);
			for (let j = i - 1; j > 0; --j) {
				for (let k = i - 1; k > 0; --k) {
					if (j + k !== i) continue;
					dpArray[j].forEach((value1) => {
						getOperationResult(value1, dpArray[k], i);
					});
				}
			}
			if (dpArray[i].has(number)) return i;
		}
		return -1;
	};

	return fillSet();
}

const getNRepetition = (n, times) => {
	let result = 0;
	for (let i = 0; i < times; ++i) {
		result += n * 10 ** i;
	}
	return result;
};
console.log(`N: 5, number: 12 return: `, solution(5, 12));
