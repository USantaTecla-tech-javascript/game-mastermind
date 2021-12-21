const {Session} = require('../models/session');
const {StateValue} = require('../models/statevalue');
const {PlayController} = require('./playcontroller');
const {StartController} = require('./startcontroller');
const {ResumeController} = require('./resumecontroller');
class Logic {
	
	session;
	
	acceptorControllers;
		
	constructor() {
		this.session = new Session();
        this.acceptorControllers = new Map();
		this.acceptorControllers.set(new StateValue().values.INITIAL, new StartController(this.session));
		this.acceptorControllers.set(new StateValue().values.IN_GAME, new PlayController(this.session));
		this.acceptorControllers.set(new StateValue().values.FINAL, new ResumeController(this.session));
		this.acceptorControllers.set(new StateValue().values.EXIT, null);
	}
	
	getController() {
        //console.log(this.acceptorControllers.get(this.session.getValueState()));
        return this.acceptorControllers.get(this.session.getValueState());
        
  //  return this.acceptorControllers.get(1);
	}
	
}
module.exports.Logic = Logic;