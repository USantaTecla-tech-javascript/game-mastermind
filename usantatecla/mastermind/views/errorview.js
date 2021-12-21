const {WithConsoleView} = require('../../utils/withconsoleview');
const {ColorView} = require('./colorview');
class ErrorView extends WithConsoleView{

	MESSAGES = [
		"Repeated colors",
		"Wrong colors, they must be: " + new ColorView().allInitials(), 
		"Wrong proposed combination length" ];

	error;

	constructor(error) {
        super();
		this.error = error;
	}
	
	writeln() {
        if(this.error == 'DUPLICATED')
        this.console.writeln(this.MESSAGES[0]);
        if(this.error == 'WRONG_CHARACTERS')
        this.console.writeln(this.MESSAGES[1]);
        if(this.error == 'WRONG_LENGTH')
        this.console.writeln(this.MESSAGES[2]);
	}	
	
}
module.exports.ErrorView = ErrorView;