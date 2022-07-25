// node - childrens

class Node {
	constructor(dirNum, dirName) {
		this.dirNum = dirNum;
		this.dirName = dirName;
		this.children = [];
	}
}

function solution(N, relation, dirnames) {
	const root = createTree(N, relation, dirnames);
	return dfs(root);
}

function createTree(N, relation, dirnames) {
	const root = new Node(1, dirnames[0]);
	const nodes = new Array(N).fill(0).map(() => new Node(0, ''));
	nodes[0] = root;

	for (let i = 0; i < relation.length; i++) {
		const [parent, child] = relation[i];
		const parentNode = nodes[parent - 1];
		const childNode = nodes[child - 1];
		parentNode.children.push(childNode);
		parentNode.dirNum = parent;
		parentNode.dirName = dirnames[parent - 1];
		childNode.dirNum = child;
		childNode.dirName = dirnames[child - 1];
	}
	return root;
}

function dfs(node) {
	if (node.children.length === 0) {
		return node.dirName.length;
	}
	let max = 0;
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		const length = dfs(child);
		if (length > max) {
			max = length;
		}
	}
	return max + node.dirName.length + 1;
}



const relation = [[1,2]];
const dirnames = ["root", "abcd"];

console.log(solution(2,relation,dirnames));