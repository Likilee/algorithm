// 1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.
const getQuarterFrom = (month) => {
	const isValidMonth = month >= 1 && month <= 12 && Number.isInteger(month);

	if (isValidMonth === false) return 0;
	return Math.ceil(month / 3);
};

console.log(getQuarterFrom(-1));
console.log(getQuarterFrom(1));
console.log(getQuarterFrom(2));
console.log(getQuarterFrom(3));
console.log(getQuarterFrom(4));
console.log(getQuarterFrom(5));
console.log(getQuarterFrom(6));
console.log(getQuarterFrom(7));
console.log(getQuarterFrom(8));
console.log(getQuarterFrom(9));
console.log(getQuarterFrom(10));
console.log(getQuarterFrom(11));
console.log(getQuarterFrom(12));
console.log(getQuarterFrom(13));
console.log(getQuarterFrom(14));
