const {WithConsoleView} = require('../../utils/withconsoleview');

class ColorView extends WithConsoleView{

	INITIALS = ['r', 'b', 'y', 'g', 'o', 'p' ];

	color;

	constructor(color) {
        super();
		this.color = color;
	}

	allInitials() {
		let result = "";
		for (let character of this.INITIALS) {
			result += character;
		}
		return result;
	}

	getInitial() {
		return this.INITIALS[this.color-1];
	}

	getInstance(character) {
		for (let i = 0; i < this.INITIALS.length; i++) {
			if (this.INITIALS[i] == character) {
				return i+1;
			}
		}
		return null;
	}

	write() {
		this.console.write(this.INITIALS[this.color-1]);
	}

}
module.exports.ColorView = ColorView;