const ME = 0;
const OPPONENT = 1;
const WIN_SCORE = 3;
const DRAW_SCORE = 1;
const LOSE_SCORE = 0;

const getTotalScore = (points) => {
	const judgeScore = (pointStr) => {
		const point = pointStr.split(':');
		if (point[ME] > point[OPPONENT]) return WIN_SCORE;
		else if (point[ME] === point[OPPONENT]) return DRAW_SCORE;
		else return LOSE_SCORE;
	};

	return points.reduce((scoreSum, point) => (scoreSum += judgeScore(point)), 0);
};

console.log(getTotalScore(['3:1', '2:2', '1:3']));
