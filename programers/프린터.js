
//문제 분석
//- 로케이션에 해당하는 애만 관심이 있다.
//- 고려1. 타겟 값보다 우선순위 높은 애들은 무조건 먼저 인쇄될 것이니, 이들의 순서는 상관없고 갯수만 관심있다.
//- 고려2. 결국 같은 우선순위인 애들끼리의 순서만 알면 된다.
//- 같은 우선순위인 애들간의 정렬

//Step1 한번 순회 하면서 priorities 갯수 배열을 만든다. -> 스택을 만든다. O(2n);
//Step2 우선순위 스택의 탑과 비교하며, 같지 않으면 큐의 뒤로 미룬다. 같으면 큐와, 스택을 모두 팝해서 result 배열로 옮긴다.  O(n)
//Step3 완성된 result 배열에서 target location 요소가 몇번째에 있는지 확인해서 리턴한다.

//Step2
function solution(priorities, location) {
	const arr = priorities.map((priority, index) => [priority, index]);
	const printQ = [];

	while (true) {
		const firstElement = arr.shift();
		const hasHigherPriority = arr.some((element) => element[0] > firstElement[0]);

		if (hasHigherPriority)
			arr.push(firstElement);
		else {
			printQ.push(firstElement);
			if (firstElement[1] == location)
				break;
		}
	}
	return printQ.length;
}

const priorities = [2, 1, 3, 2];
const location = 2;

const priorities2 = [1,1,9,1,1,1];
const location2 = 5;
console.log(solution(priorities2, location2));
