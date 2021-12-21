const {WithConsoleView} = require('../../utils/withconsoleview');
const {ColorView} = require('./colorview');
const {MessageView} = require('./messageview');

class ProposedCombinationView extends WithConsoleView {
	
	playController;
	
	constructor(playController) {
        super();
		this.playController = playController;
	}
	
	write(position) {
		for (let color of this.playController.getColors(position)) {
			new ColorView(color).write();
		}
	}

	read() {
		let characters = this.console.readString(new MessageView().PROPOSED_COMBINATION);
		let colors = new Array();
		for (let i=0; i<characters.length; i++) {
			colors.push(new ColorView().getInstance(characters.charAt(i)));
		}
		return colors;
	}
	
}

module.exports.ProposedCombinationView = ProposedCombinationView;