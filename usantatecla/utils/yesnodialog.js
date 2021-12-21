const {WithConsoleView} = require('./withconsoleview');
const {Console} = require('./console');
class YesNoDialog  extends WithConsoleView {
    constructor(){
        super();
    }

	AFIRMATIVE = 'y';

	NEGATIVE = 'n';
	
	QUESTION = "? ("+this.AFIRMATIVE+"/"+this.NEGATIVE+"): ";

	MESSAGE = "The value must be '" + this.AFIRMATIVE + "' or '"
			+ this.NEGATIVE + "'";

	read(title) {
        let answer = '';
        let ok = null;
		do {
			answer = this.console.readChar(title + this.QUESTION);
			ok = this.isAfirmative(answer) || this.isNegative(answer);
			if (!ok) {
				this.console.writeln(this.MESSAGE);
			}
		} while (!ok);
		return this.isAfirmative(answer);
	}

	isAfirmative(answer) {
		return answer.toLowerCase() == this.AFIRMATIVE;
	}

	isNegative(answer) {
		return answer.toLowerCase() == this.NEGATIVE;
	}

}

module.exports.YesNoDialog = YesNoDialog;