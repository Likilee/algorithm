function solution(numbers) {
    const arr = numbers.split('');
    const combination = [];
    const answer = new Set();
    const visited = new Array(arr.length).fill(false);

    function dfs() {
        if (combination.length === arr.length) {
            const number = parseInt(combination.join());
            if (isPrime(number)) answer.add(number);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            combination.push(arr[i]);
            const number = parseInt(combination.join(""));
            if (isPrime(number)) answer.add(number);
            dfs();
            combination.pop();
            visited[i] = false;
        }
    }
    dfs();
    return answer.size;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    const sqrt = Math.sqrt(number);
    for (let i = 2; i <= sqrt; ++i) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
