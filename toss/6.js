const 세자리이상연속됨 = /012|123|234|345|456|567|789|890|901|987|876|765|654|543|321|210|109|098/
const 모두같음 = /^(.)\1*$/

function solution(pin) {
	console.log(pin.match(모두같음));
	console.log(pin.match(세자리이상연속됨));
	if (pin.match(모두같음) || pin.match(세자리이상연속됨))
		return false;
	return true;
}

console.log(solution('4121'));