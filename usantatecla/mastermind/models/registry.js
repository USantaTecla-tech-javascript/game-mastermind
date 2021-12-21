const {Memento} = require('./memento');
class Registry {
	
	mementoList;
	
	game;
	
	firstPrevious = 0;
	
	constructor(game) {
		this.game = game;
		this.mementoList = new Array();
		this.mementoList.splice(0, 0, this.game.createMemento());
		this.firstPrevious = 0;
	}

	registry() {
		for (let i = 0; i < this.firstPrevious; i++) {
			this.mementoList.splice(0,1);
		}
		this.firstPrevious = 0;
		this.mementoList.splice(this.firstPrevious, 0, this.game.createMemento());
	}

	undo(game) {
		this.firstPrevious++;
		game.set(this.mementoList[this.firstPrevious]);
	}

	redo(game) {
		this.firstPrevious--;
		game.set(this.mementoList[this.firstPrevious]);
	}

	undoable() {
		return this.firstPrevious < this.mementoList.length - 1;
	}

	redoable() {
		return this.firstPrevious >= 1;
	}

	reset() {
		this.mementoList = new Array();
		this.mementoList.splice(this.firstPrevious, 0, this.game.createMemento());
		this.firstPrevious = 0;
	}

}
module.exports.Registry = Registry;