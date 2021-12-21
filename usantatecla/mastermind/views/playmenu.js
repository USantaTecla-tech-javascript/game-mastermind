//TODO COMPLETAR

const{Menu} = require('../../utils/menu');
const{ProposeCommand} = require('./proposecommand');
const{UndoCommand} = require('./undocommand');
const{RedoCommand} = require('./redocommand');
class PlayMenu extends Menu {

	constructor(playController) {
        super();
		this.addCommand(new ProposeCommand(playController));
		this.addCommand(new UndoCommand(playController));
		this.addCommand(new RedoCommand(playController));
	}

}
module.exports.PlayMenu = PlayMenu;