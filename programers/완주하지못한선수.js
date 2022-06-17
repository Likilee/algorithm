function solution(participant, completion) {
	const pMap = new Map();
	const cMap = new Map();

	for (let i = 0; i < participant.length; ++i) {
		let samename = pMap.get(participant[i]);
		samename = samename ? samename + 1 : 1;
		pMap.set(participant[i], samename);
	}
	for (let i = 0; i < completion.length; ++i) {
		let samename = cMap.get(completion[i]);
		samename = samename ? samename + 1 : 1;
		cMap.set(completion[i], samename);
	}
	for (let [key, value] of pMap) {
		if (cMap.get(key) != value) return key;
	}
}