function createQueryString(object) {
	if (Object.keys(object).length === 0) return '';

	const queryTokens = [];

	for (const key in object) {
		const value = object[key];
		if (value === null || value === undefined)
			continue;
		if (Array.isArray(value)) {
			queryTokens.push(value.map((sub) => `${key}=${sub}`).join('&'));
		} else {
			const encodedValue = encodeURIComponent(value);
			queryTokens.push(`${key}=${encodedValue}`);
		}
	}

	return queryTokens.length === 0 ? '' : '?' + queryTokens.join('&');
}

function solution(input) {
	var object = JSON.parse(input);
	var answer = createQueryString(object);
	return answer;
}

const object1 = {
	foo: 1,
	bar: null,
	baz: undefined,
	quux: 'foo',
};

const object2 = {
	foo: null,
	a: 'a to b',
	bar: '',
}
console.log(createQueryString(object1));
console.log(createQueryString(object2));
