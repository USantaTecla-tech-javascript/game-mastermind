const {PlayView} = require('./playview');
const {StartView} = require('./starview');
const {ResumeView} = require('./resumeview');
const {ControllersVisitor} = require('../controllers/controllersvisitor');
const { StartController } = require('../controllers/startcontroller');
const { PlayController } = require('../controllers/playcontroller');
const {ResumeController} = require('../controllers/resumecontroller');
class View extends ControllersVisitor {
	
	startView;

	playView;

	resumeView;

	constructor() {
        super();
		this.startView = new StartView();
		this.playView = new PlayView();
		this.resumeView = new ResumeView();
	}

	interact(acceptorController) {
		acceptorController.accept(this);
	}

	
    visitStartController(startController) {

        this.startView.interact(startController);
  
	}

	
	visitPlayController(playController) {
		this.playView.interact(playController);
	}

	
	visitResumeController(resumeController) {
		this.resumeView.interact(resumeController);
	}

}

module.exports.View = View;