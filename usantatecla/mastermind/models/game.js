const {SecretCombination} = require('./secretcombination');
const {ProposedCombination} = require('./proposedcombination')
const {Memento} = require('./memento');
class Game {

	MAX_LONG = 10;

	secretCombination = new SecretCombination();

	proposedCombinations = new Array();

	results = new Array();

	attempts = 0;

	constructor() {
		this.clear();
	}

	clear() {
		this.secretCombination = new SecretCombination();
		this.proposedCombinations = new Array();
		this.results = new Array();
        this.attempts = 0;
	}

	addProposedCombination(colors) {
		let proposedCombination = new ProposedCombination(colors);
		this.proposedCombinations.push(proposedCombination);
        this.results.push(this.secretCombination.getResult(proposedCombination));
		this.attempts++;
	}
	
	createMemento() {
		let memento = new Memento(this.attempts);
		for (let i = 0; i < this.proposedCombinations.length; i++) {
			memento.set(this.proposedCombinations[i].copy(), this.results[i].copy());
		}
		return memento;
	}

	set(memento) {
		this.attempts = memento.getAttempts();
		this.proposedCombinations = new Array();
		this.results = new Array();
		for (let i = 0; i < memento.getSize(); i++) {
			this.proposedCombinations.push(memento.getProposedCombination(i).copy());
			this.results.push(memento.getResult(i).copy());
		}
	}

	isLooser() {
		return this.attempts == this.MAX_LONG;
	}
	
	isWinner() {
		if (this.attempts == 0) {
			return false;
		}
		return this.results[this.attempts-1].isWinner();
	}

	getAttempts() {
		return this.attempts;
	}

	getColors(position) {
		return this.proposedCombinations[position].colors;
	}

	getBlacks(position) {
		return this.results[position].getBlacks();
	}

	getWhites(position) {
		return this.results[position].getWhites();
	}

	getWidth() {
		return this.secretCombination.getWidth();
	}


}
module.exports.Game = Game;