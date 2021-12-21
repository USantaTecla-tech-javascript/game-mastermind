const {MessageView} = require('./messageview')
class SecretCombinationView {

	controller;

	constructor(controller) {
		this.controller = controller;
	}

	writeln() {
		for (let i = 0; i < this.controller.getWidth(); i++) {
			new MessageView(new MessageView().SECRET).write();
		}
		new MessageView(new MessageView().NEW_LINE).writeln();
	}

}
module.exports.SecretCombinationView = SecretCombinationView;