const TOP = 1;
const PARENT = (i) => Math.floor(i / 2);
const LEFT = (i) => i * 2;
const RIGHT = (i) => i * 2 + 1;

class PQueue {
	#heap;
	#cmp;
	swap(aPos, bPos) {
		const temp = this.#heap[bPos];
		this.#heap[bPos] = this.#heap[aPos];
		this.#heap[aPos] = temp;
	}

	higher(aPos, bPos) {
		if (this.#heap[aPos][1] == this.#heap[bPos][1])
			return this.#heap[aPos][0] < this.#heap[bPos][0];
		return this.#heap[aPos][1] < this.#heap[bPos][1];
	}

	constructor(cmp = this.higher) {
		this.#heap = [[0, 0]];
		this.#cmp = cmp;
	}

	size() {
		return this.#heap.length - 1;
	}

	isEmpty() {
		return this.size() === 0;
	}

	peek() {
		return this.#heap[TOP];
	}

	push(...elements) {
		elements.forEach((element) => {
			this.#heap.push(element);
			for (let i = this.size(); i > 1; i = PARENT(i)) {
				if (!this.#cmp(i, PARENT(i))) break;
				this.swap(i, PARENT(i));
			}
		});
	}

	pop() {
		const result = this.peek();
		this.swap(TOP, this.size());
		this.#heap.pop();
		let cur = TOP;
		while (
			(LEFT(cur) <= this.size() && this.#cmp(LEFT(cur), cur)) ||
			(RIGHT(cur) <= this.size() && this.#cmp(RIGHT(cur), cur))
		) {
			const maxChild =
				RIGHT(cur) <= this.size() && this.#cmp(RIGHT(cur), LEFT(cur))
					? RIGHT(cur)
					: LEFT(cur);
			this.swap(cur, maxChild);
			cur = maxChild;
		}
		return result;
	}
}

function solution(jobs) {
	const jobCount = jobs.length;
	let answer = 0;
	let time = 0;
	const pq = new PQueue();
	jobs = jobs.sort(([a1], [b1]) => b1 - a1);
	while (!pq.isEmpty() || jobs.length > 0) {
		// 지금 큐에 있는 작업하나 처리하기
		if (!pq.isEmpty()) {
			const currentJob = pq.peek();
			time += currentJob[1];
			answer += time - currentJob[0];
			pq.pop();
			// console.log(`작업 : (${currentJob})\n현재시간 : ${time}\n추가시간 : ${time - currentJob[0]}\n`);
		} else {
			time = jobs[jobs.length - 1][0];
		}
		// 지금 대기 중인애들 대기큐에 다 넣기
		while (jobs.length > 0 && jobs[jobs.length - 1][0] <= time) {
			pq.push(jobs.pop());
		}
	}
	return Math.floor(answer / jobCount);
}

const case2 = [
	[0, 6],
	[2, 8],
	[3, 7],
	[7, 1],
	[11, 11],
	[19, 25],
	[30, 15],
	[32, 6],
	[40, 3],
];
const case3 = [
	[0, 10],
	[4, 10],
	[15, 2],
	[5, 11],
];
const case4 = [
	[24, 10],
	[18, 39],
	[34, 20],
	[37, 5],
	[47, 22],
	[20, 47],
	[15, 34],
	[15, 2],
	[35, 43],
	[26, 1],
];
const case5 = [
	[24, 10],
	[28, 39],
	[43, 20],
	[37, 5],
	[47, 22],
	[20, 47],
	[15, 34],
	[15, 2],
	[35, 43],
	[26, 1],
];

const case6 = [[2000, 1000]] ;
const case7 = [[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]];
console.log(solution(case6));
