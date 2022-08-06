function solution(paths) {
	const pathStack = [];
	const reverts = ['.', '..', '...'];
	const tokenizedPaths = paths
		.reduce((pv, cv) => [...pv, ...cv.split('/')], [])
		.filter((value) => value !== '');
	console.log(tokenizedPaths);
	tokenizedPaths.forEach((path) => {
		const revert = reverts.findIndex((element) => element === path);
		if (revert >= 0) {
			for (let i = 0; i < revert; ++i) pathStack.pop();
		} else {
			pathStack.push(path);
		}
	});
	return (
		'/' +
		pathStack
			.join('/')
			.replace(/\/+/g, '/')
			.replace(/^\/|\/$/g, '')
	);
}

// console.log(solution(['/foo', 'bar', '...', '.', 'ab']));
console.log(solution(['/foo', 'bar', '/baz', '...', 'ab/']));
// console.log(solution(["/foo", "...", "...", "abcd/", "abc/def/"]));
// console.log(solution(["///foo", "...", "...", "/abcd/", "abc/def///"]));
// console.log(solution(["///foo", "/abcd/ddf/../das/", "abc/def///", '..']));
// console.log(solution(['/',".."]));
//
