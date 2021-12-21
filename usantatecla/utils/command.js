const {WithConsoleView} = require('./withconsoleview');
 class Command extends WithConsoleView {

    title = null;
	
	constructor(title) {
        super();
		this.title = title;
	}

	 execute(){
        

     };

	 isActive(){
        
        
    }

	 getTitle() {
		return this.title;
	}

}
module.exports.Command = Command;
