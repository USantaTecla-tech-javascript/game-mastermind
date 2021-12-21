const {PlayMenu} = require ('./playmenu');
class PlayView {

	interact(playController) {
		new PlayMenu(playController).execute();	
	}

}
module.exports.PlayView = PlayView;