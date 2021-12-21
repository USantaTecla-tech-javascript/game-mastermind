const {Controller} = require('./controller');
const {Error} = require ('../types/error');
const {Combination} = require('../models/combination');

class ProposalController extends Controller {

	constructor(session) {
		super(session);
	}

	addProposedCombination(colors) {
		let error = null;
		if (colors.length != new Combination().getWidth()) {
			error = new Error().WRONG_LENGTH;
		} else {
			for (let i = 0; i < colors.length; i++) {
				if (colors[i] == null) {
					error = new Error().WRONG_CHARACTERS;
				} else {
					for (let j = i+1; j < colors.length; j++) {
						if (colors[i] == colors[j]) {
							error = new Error().DUPLICATED;
						}
					}
				}				
			}
		}
		if (error == null){
			this.session.addProposedCombination(colors);
			if (this.session.isWinner() || this.session.isLooser()) {
				this.session.next();
			}
		}
		return error;	
	}

	isWinner() {
		return this.session.isWinner();
	}

	isLooser() {
		return this.session.isLooser();
	}
	
	getAttempts() {
		return this.session.getAttempts();
	}

	getColors(position) {
		return this.session.getColors(position);
	}

	getBlacks(position) {
		return this.session.getBlacks(position);
	}

	getWhites(position) {
		return this.session.getWhites(position);
	}

}
module.exports.ProposalController = ProposalController;
