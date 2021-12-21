const {View} = require('./views/view');
const {Logic} = require('./controllers/logic');

class Mastermind {
	
	logic;
	
	view;
	
	constructor() {
		this.logic = new Logic();
		this.view = new View();
	}

	play() {
		let acceptorController;
		do {
            acceptorController = this.logic.getController();
           
			if (acceptorController != null){
                
				this.view.interact(acceptorController);
			}
		} while (acceptorController != null); 
	}
	
}

let mastermind = new Mastermind();

mastermind.play();


