const {Controller} = require('./controller');
class UndoController extends Controller {

	constructor(session) {
		super(session);
	}

	undo() {
		this.session.undo();
	}

	undoable() {
		return this.session.undoable();
	}

}
module.exports.UndoController = UndoController;
