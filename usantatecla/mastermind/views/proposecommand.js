const {Commands} = require('./command');
const {MessageView} = require('./messageview');
const {ProposedCombinationView} = require('./proposeedcombinationview');
const {ErrorView} = require('./errorview');
const {GameView} = require('./gameview');

class ProposeCommand extends Commands {

	constructor(playController) {
		super(new MessageView().PROPOSE_COMMAND, playController);
	}

	execute() {
		let error;
		do {
			let colors = new ProposedCombinationView(this.playController).read();
			error = this.playController.addProposedCombination(colors);
			if (error != null) {
				new ErrorView(error).writeln();
			}
		} while (error != null);
		new GameView(this.playController);
	}

	isActive() {
		return true;
	}

}
module.exports.ProposeCommand = ProposeCommand;