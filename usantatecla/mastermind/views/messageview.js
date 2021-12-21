const {Console} = require('../../utils/console');

class MessageView{ 

	ATTEMPTS = "#attempts attempt(s): ";
	SECRET = "*"; 
	RESUME = "Do you want to continue"; 
	RESULT =  "--> #blacks blacks and #whites whites";
	PROPOSED_COMBINATION = "Propose a combination: ";
	TITLE = "----- MASTERMIND -----";
	WINNER = "You've won!!! ;-)";
	LOOSER = "You've lost!!! :-(";
	PROPOSE_COMMAND = "Propose Combination";
	UNDO_COMMAND = "Undo previous Proposal";
	REDO_COMMAND = "Redo previous Proposal";
	NEW_LINE = "";

	message;

	console;

	constructor(message) {
		this.message = message;
		this.console = new Console();
	}

	getMessage() {
		return this.message;
	}

	writeln$0() {
        this.console.writeln(this.message);
      }
      writeln$1(attempts) {
        this.console.writeln( attempts + " attempt(s): ");
      }
      writeln$2(blacks, whites) {
        this.console.writeln("--> blacks: " + blacks + " and whites: " + whites);
      }
      writeln(...args$) {
        switch (args$.length) {
          case 0:
            return this.writeln$0(...args$);
          case 1:
            return this.writeln$1(...args$);
          case 2:
            return this.writeln$2(...args$);
        }
      }

	write() {
		this.console.write(this.message);
	}

}
module.exports.MessageView = MessageView;