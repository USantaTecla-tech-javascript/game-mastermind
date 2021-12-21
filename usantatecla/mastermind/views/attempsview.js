const {MessageView} = require('./messageview');
class AttemptsView {

	playController;

	constructor(proposalController) {
		this.playController = proposalController;
	}
// TODO AQUI HAY ALGO RARO PILAS
	writeln() {
		new MessageView().writeln(this.playController.getAttempts());
	}

}
module.exports.AttemptsView = AttemptsView;