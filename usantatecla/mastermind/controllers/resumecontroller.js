const {AcceptorController} = require ('./aceptorcontroller');
class ResumeController extends AcceptorController {

	constructor(session) {
		super(session);
	}
	
	resume(newGame) {
		if (newGame) {
			this.session.clearGame();
		} else {
			this.session.next();
		}
	}

	accept(controllersVisitor) {
		controllersVisitor.visitResumeController(this);
	}

}
module.exports.ResumeController = ResumeController;
