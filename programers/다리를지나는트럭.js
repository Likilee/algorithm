// 통과한 트럭 배열이 꽉찰 때 까지 반복진행
// 틱 당 이터레이션 1회,
// 틱 당 대기 -> wait, go, arrive 배열 변화주기

// 첫 통과 내 솔루션!
function solution(bridge_length, weight, truck_weights) {
	const numOftrucks = truck_weights.length;
	const waitStack = truck_weights.reverse();
	const goQueue = [];
	const arriveStack = [];
	let time = 0;
	let onLoad = 0;

	while (arriveStack.length !== numOftrucks) {
		++time;
		if (goQueue.length > 0) {
			const frontTruckPos = time - goQueue[0][1];
			if (frontTruckPos >= bridge_length) {
				const arriveTruck = goQueue.shift();
				arriveStack.push(arriveTruck[0]);
				onLoad -= arriveTruck[0];
			}
		}
		const canGo = weight - onLoad >= waitStack[waitStack.length - 1];
		if (canGo) {
			const goTruck = waitStack.pop();
			goQueue.push([goTruck, time]);
			onLoad += goTruck;
		}
	}
	return time;
}

// 다른분의 솔루션 참고! (시간을 매틱 돌지 않고 점프하는 방식, arrive stack 사용하지 않고)
function solution2(bridge_length, weight, truck_weights) {
	const queue = [[0, 0]];
	let weightOnBridge = 0;
	let time = 0;

	while (queue.length > 0 || truck_weights.length > 0) {
		const isTimeToPass = queue[0][1] === time;
		if (isTimeToPass) weightOnBridge -= queue.shift()[0];
		if (weight - weightOnBridge >= truck_weights[0]) {
			weightOnBridge += truck_weights[0];
			queue.push([truck_weights.shift(), time + bridge_length]);
		} else if (queue[0]) {
			time = queue[0][1] - 1;
		}
		++time;
	}
	return time;
}

// 🧪 테스트
let bridge_length = 100;
let weight = 100;
let truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution2(bridge_length, weight, truck_weights));
