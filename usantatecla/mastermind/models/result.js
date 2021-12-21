const {Combination} = require('./combination');
class Result {

	blacks = 0;

	whites = 0;

	constructor(blacks, whites) {
        this.blacks = blacks;
        this.whites = whites;
	}

	isWinner() {
		return this.blacks == new Combination().getWidth();
	}

	getBlacks() {
		return this.blacks;
	}

	getWhites() {
		return this.whites;
	}

	copy() {
		return new Result(this.blacks, this.whites);
	}

}
module.exports.Result = Result;