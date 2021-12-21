const {Commands} = require('./command');
const {MessageView} = require('./messageview');
const {GameView} = require('./gameview');
class RedoCommand extends Commands{
	
	constructor(playController) {
        super(new MessageView().REDO_COMMAND, playController);
    }
	execute() {
		this.playController.redo();
		new GameView(this.playController);
	}

	isActive() {
		return this.playController.redoable();
	}

}
module.exports.RedoCommand = RedoCommand;