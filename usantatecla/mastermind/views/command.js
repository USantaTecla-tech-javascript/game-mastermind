const {Command} = require('../../utils/command.js');

class Commands extends Command {

	playController;

	constructor(title, playController) {
		super(title);
		this.playController = playController;
	}
	
}
module.exports.Commands = Commands;