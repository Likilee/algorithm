const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));
const getLcm = (num1, num2) => (num1 * num2) / getGcd(num1, num2);

console.log(getGcd(12, 16), getLcm(12, 16));