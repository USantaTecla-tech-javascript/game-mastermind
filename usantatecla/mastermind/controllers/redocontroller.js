const {Controller} = require('./controller');
class RedoController extends Controller {

	constructor(session) {
		super(session);
	}

	redo() {
		this.session.redo();
	}

    redoable() {
		return this.session.redoable();
	}

}
module.exports.RedoController = RedoController;