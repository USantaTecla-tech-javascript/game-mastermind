const {MessageView} = require('./messageview');
const {SecretCombinationView} = require('./secretcombinationview');
const {ProposedCombinationView} = require('./proposeedcombinationview');
const {AttemptsView} = require('./attempsview');
const {ResultView} = require('./resultview');
class GameView {

	constructor(playController) {
		new MessageView(new MessageView().NEW_LINE).writeln();
		new AttemptsView(playController).writeln();
		new SecretCombinationView(playController).writeln();
		for (let i = 0; i < playController.getAttempts(); i++) {
			new ProposedCombinationView(playController).write(i);
			new ResultView(playController).writeln(i);
		}
		if (playController.isWinner()) {
			new MessageView(new MessageView().WINNER).writeln();
		} else if (playController.isLooser()) {
			new MessageView(new MessageView().LOOSER).writeln();
		}
	}
	
}
module.exports.GameView = GameView;