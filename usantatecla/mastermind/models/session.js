const {State} = require('./state');
const {Game} = require('./game');
const {Registry} = require('./registry');

class Session {

	state;
	
	game;
	
	registry;
	
	constructor() {
		this.state = new State();
		this.game = new Game();
		this.registry = new Registry(this.game);
	}

	next() {
		this.state.next();		
	}

	addProposedCombination(colors) {
		this.game.addProposedCombination(colors);
		this.registry.registry();
	}

	undoable() {
		return this.registry.undoable();
	}

	redoable() {
		return this.registry.redoable();
	}

	undo() {
		this.registry.undo(this.game);
	}

	redo() {
		this.registry.redo(this.game);
    }
    
    clearGame() {
		this.game.clear();
		this.state.reset();	
		this.registry.reset();
	}

	isWinner() {
		return this.game.isWinner();
	}

	isLooser() {
		return this.game.isLooser();
	}

	getWidth() {
		return this.game.getWidth();
	}

	getAttempts() {
		return this.game.getAttempts();
	}

	getColors(position) {
		return this.game.getColors(position);
	}

	getBlacks(position) {
		return this.game.getBlacks(position);
	}

	getWhites(position) {
		return this.game.getWhites(position);
	}

	getValueState() {
		return this.state.getValueState();
	}
}
module.exports.Session = Session;