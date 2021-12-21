const {Console} = require('./console');
class WithConsoleView {

	console;

	 constructor() {
		this.console = new Console();
	}
	
}

module.exports.WithConsoleView = WithConsoleView;