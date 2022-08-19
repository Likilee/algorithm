const getFirstSkipedPositiveIntegerFrom = (array) => {
	const deDuplicatedAndSorted = [...new Set(array.sort())];

	for (let index = 0; index < deDuplicatedAndSorted.length; ++index) {
		const value = deDuplicatedAndSorted[index];
		if (index !== value) return index;
	}
	return deDuplicatedAndSorted.length;
};

const array = [3, 2, 1, 6, 5, 5, 5];

console.log(solution([0, 1, 2, 4]));
console.log(solution([0, 1, 2, 3, 4, 5, 6]));
