const {YesNoDialog} = require('../../utils/yesnodialog');
const {MessageView} = require('./messageview');
class ResumeView {

	interact(resumeController) {
		resumeController.resume(new YesNoDialog().read(new MessageView().RESUME));
	}
}

module.exports.ResumeView = ResumeView;