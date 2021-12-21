const {StateValue} = require('./statevalue');
class State {
		
	stateValue;
	
	constructor() {
		this.stateValue = new StateValue().values.INITIAL;
	}
	
	next() {
		this.stateValue ++;
	}
	
    reset() {
		this.stateValue = new StateValue().INITIAL;
	}

	getValueState() {
		return this.stateValue;
	}
	
}
module.exports.State = State;