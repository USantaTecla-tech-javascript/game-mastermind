const {AcceptorController} = require ('./aceptorcontroller');
const {ProposalController} = require('./proposalcontroller');
const {UndoController} = require('./undocontroller');
const {RedoController} = require('./redocontroller');
class PlayController extends AcceptorController {

	proposalController;

	undoController;

	redoController;

	constructor(session) {
		super(session);
		this.proposalController = new ProposalController(this.session);
		this.undoController = new UndoController(this.session);
		this.redoController = new RedoController(this.session);
	}

	addProposedCombination(colors) {
		return this.proposalController.addProposedCombination(colors);
	}

	undo() {
		this.undoController.undo();
	}

	redo() {
		this.redoController.redo();
	}

	undoable() {
		return this.undoController.undoable();
	}

    redoable() {
		return this.redoController.redoable();
	}

	isWinner() {
		return this.proposalController.isWinner();
	}

	isLooser() {
		return this.proposalController.isLooser();
	}

	getAttempts() {
		return this.proposalController.getAttempts();
	}

	getColors(position) {
		return this.proposalController.getColors(position);
	}

	getBlacks(position) {
		return this.proposalController.getBlacks(position);
	}

	getWhites(position) {
		return this.proposalController.getWhites(position);
	}

	accept(controllersVisitor) {
		controllersVisitor.visitPlayController(this);
	}

}
module.exports.PlayController = PlayController;