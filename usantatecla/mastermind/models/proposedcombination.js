const {Combination} = require ('./combination');
const {Color} = require('../types/color');

class ProposedCombination extends Combination {

	constructor(colors) {
        super();
		this.colors = colors;
	}

	contains(color, position) {
        if (arguments.length == 1){
            for (let i = 0; i < this.colors.length; i++) {
                if (this.colors[i] == color) {
                    return true;
                }
            }
            return false;
        }
        
        else {
            return this.colors[position] == color;
        }
    }
    
	
	copy() {
		let colors = new Array();
		for(let color of this.colors) {
			colors.push(color);
		}
		return new ProposedCombination(colors);
	}

}
module.exports.ProposedCombination = ProposedCombination;
