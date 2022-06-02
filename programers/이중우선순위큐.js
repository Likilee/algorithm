const TOP = 1;
const PARENT = (i) => Math.floor(i / 2);
const LEFT = (i) => i * 2;
const RIGHT = (i) => i * 2 + 1;

class PQueue {
	#heap;
	#cmp;

	constructor(cmp = this.higher) {
		this.#heap = [0];
		this.#cmp = cmp;
	}

	size() {
		return this.#heap.length - 1;
	}
	isEmpty() {
		return this.size() === 0;
	}
	peekFront() {
		return this.#heap[TOP];
	}
	peekBack() {
		return this.#heap[this.size()];
	}
	push(...elements) {
		elements.forEach((element) => {
			this.#heap.push(element);
			for (let i = this.size(); i > 1; i = PARENT(i)) {
				if (!this.#cmp(i, PARENT(i))) break;
				this.swap(i, PARENT(i));
			}
			// top 두개 비교 해서 swap
			const last = this.size();
			if (last > 1 && this.#cmp(last, last - 1)) {
				this.swap(last, last - 1);
			}
		});
	}

	popFront() {
		if (this.size() == 0)
			return  ;
		const result = this.peekFront();
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
		const last = this.size();
		if (last > 1 && last > cur) {
			this.swap(last, cur);
		}
		return result;
	}

	popBack() {
		if (this.size() > 0)
		return this.#heap.pop();
	}

	swap(aPos, bPos) {
		const temp = this.#heap[bPos];
		this.#heap[bPos] = this.#heap[aPos];
		this.#heap[aPos] = temp;
	}

	higher(aPos, bPos) {
		return this.#heap[aPos] > this.#heap[bPos];
	}
	print() {
		console.log('Data: ', this.#heap);
	}
}

function solution(operations) {
	const queue = new PQueue();

	operations.map((v) => {
		const op = v.split(' ');
		switch(op[0]) {
			case 'I':
				queue.push(Number(op[1]));
				break;
			case 'D':
				if(op[1] == '1')
					queue.popFront();
				else
					queue.popBack();
				break;
			default:
				break;
		}
	});
	if (queue.isEmpty())
		return [0, 0];
	else {
		return [queue.peekFront(), queue.peekBack()]
	}
}

console.log(solution(["I 10", "I 9", "I 8", "I 7", "D -1", "D 1", "D -1", "D 1", "I 1", "I 11", "I 100000", "D -1","D -1","D -1","D -1","D -1","D -1"]));
