function safelyGet(object, path) {
	// 입력해주세요
	const pathArray = path.split(".");
	let result = object;
	for (let i = 0; i < pathArray.length; ++i) {
		result = result[pathArray[i]];
		if (result === undefined) {
			return undefined;
		}
	}
	return result;
}

function solution(input, path) {
	const result = safelyGet(JSON.parse(input), path);

	if (result === undefined) {
			return "undefined";
	}

	return JSON.stringify(result);
}


const object1 = {
repository: undefined,
};

const object2 = {
repository: {
	readme: undefined,
},
};

const object3 = {
repository: {
	readme: {
		extension: 'md',
		content: '금융을 쉽고 간편하게',
	}
}
};

console.log(safelyGet(object2, 'repository.readme.extension'))  // -> undefined
console.log(safelyGet(object2, 'repository.readme'))            // -> undefined
console.log(safelyGet(object3, 'repository'))                   // -> { readme: undefined }
