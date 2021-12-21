const {MessageView} = require('./messageview');

class ResultView {
	
	playController;
	
	constructor(playController){
		this.playController = playController;
	}

	writeln(position) {
		new MessageView().writeln(this.playController.getBlacks(position), this.playController.getWhites(position));
	}

}

module.exports.ResultView = ResultView;