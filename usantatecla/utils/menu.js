const {WithConsoleView} = require('./withconsoleview');
const {ClosedInterval} = require('./closedinterval');

class Menu extends WithConsoleView {

	OPTION = "----- Choose one option -----";
	commandList = null;

	constructor() {
        super();
        this.commandList = new Array();
	}

	execute() {
        let commands = new Array();
        let error = false;
        let option = 0;
		for (let i = 0; i < this.commandList.length; i++) {
			if (this.commandList[i].isActive()) {
				commands.push(this.commandList[i]);
			}
		}
		do {
			error = false;
			this.console.writeln();
            this.console.writeln(this.OPTION);
			for (let i = 0; i < commands.length; i++) {
				this.console.writeln((i + 1) + ") " + commands[i].getTitle());
			}
			option = this.console.readInt("") - 1;
			if (!new ClosedInterval(0, commands.length-1).includes(option)) {
				error = true;
			} 				
		} while (error);
		commands[option].execute();
	}

	addCommand(command) {
		this.commandList.push(command);
	}

}
module.exports.Menu = Menu;