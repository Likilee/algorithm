function solution(fetchPaper) {
	const fetchResult = fetchPaper;
	const evaluateFetchResult = () => {
		if (typeof fetchResult === Promise)
			new Error();
	}
	setTimeout(evaluateFetchResult, 1000);
}