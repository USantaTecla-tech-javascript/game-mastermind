const {MessageView} = require('./messageview');
const {GameView} = require('./gameview');
const {Commands} = require('./command');
class UndoCommand extends Commands {

	constructor(playController) {
		super(new MessageView().UNDO_COMMAND, playController);
	}

	
	execute() {
		this.playController.undo();
		new GameView(this.playController);
	}

	
	isActive() {
		return this.playController.undoable();
	}
	
}

module.exports.UndoCommand = UndoCommand;