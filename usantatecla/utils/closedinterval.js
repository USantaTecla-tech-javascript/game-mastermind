class ClosedInterval {

	min;
    max;

	constructor(min,max) {		
		this.min = min;
		this.max = max;
	}

	includes(value) {
		return this.min <= value && value <= this.max;
	}

}
module.exports.ClosedInterval = ClosedInterval;