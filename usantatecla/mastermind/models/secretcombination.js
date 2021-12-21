const {Combination} = require ('./combination');
const {Color} = require('../types/color');
const {Result} = require('./result');
class SecretCombination extends Combination {

	constructor() {
        super();
        const color = new Color();
        this.colors.push(color.values.BLUE);
        this.colors.push(color.values.GREEN);
        this.colors.push(color.values.ORANGE);
        this.colors.push(color.values.PURPLE);
        this.colors.push(color.values.RED);
        this.colors.push(color.values.YELLOW);
		
		for (let i = 0; i < color.length() - this.getWidth(); i++) {
			this.colors.splice(~~(Math.random() * (color.length()-1)),1);
		}
		this.colors.sort(() => Math.random() - 0.5);
	}

	getResult(proposedCombination) {
		let blacks = 0;
		for (let i = 0; i < this.colors.length; i++) {
			if (proposedCombination.contains(this.colors[i], i)) {
				blacks++;
			}
		}
		let whites = 0;
		for (let i = 0; i < this.colors.length; i++) {
			if (proposedCombination.contains(this.colors[i])) {
				whites++;
			}
		}
		return new Result(blacks, whites - blacks);
	}

}
module.exports.SecretCombination = SecretCombination;