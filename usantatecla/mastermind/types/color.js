class Color {
	   
    values = {
        RED:     1,
        BLUE:    2,
        YELLOW:  3,
        GREEN:   4,
        ORANGE:  5,
        PURPLE:  6
      };


	length() {
		return Object.keys(this.values).length;
	}
	
}
module.exports.Color = Color;