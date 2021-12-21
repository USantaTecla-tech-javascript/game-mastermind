class Controller {
	
	session;

	constructor(session) {
		this.session = session;
	}
	
	getWidth() {
		return this.session.getWidth();
	}

}
module.exports.Controller = Controller;