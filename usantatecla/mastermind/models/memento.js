const {ProposedCombination} = require ('./proposedcombination');
const {Result} = require('./result');

class Memento {

	proposedCombinations;

	results;

	attempts;

	constructor(attempts) {
		this.attempts = attempts;
		this.proposedCombinations = new Array();
		this.results = new Array();
	}

	set(proposedCombination, result) {
		this.proposedCombinations.push(proposedCombination);
		this.results.push(result);
	}
	
	getProposedCombination(position){
		return this.proposedCombinations[position];
	}
	
	getResult(position){
		return this.results[position];
	}
	
    getSize() {
		return this.proposedCombinations.length;
	}
	
	getAttempts(){
		return this.attempts;
	}

}
module.exports.Memento = Memento;