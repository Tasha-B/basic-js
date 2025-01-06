const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
		return chainMaker;
  },
  removeLink(position) {
		if (typeof position !== 'number' || position <= 0 || position > this.links.length - 1) {
			this.links = []
			throw new Error("You can't remove incorrect link!");
		}
			this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
   this.links.reverse();
	 return chainMaker;
  },
  finishChain() {
 finish = this.links.join('~~');
 this.links.length = 0;
 this.links = [];
return finish
  }
};

module.exports = {
  chainMaker
};
