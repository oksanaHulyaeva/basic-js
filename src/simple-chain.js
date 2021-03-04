const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    arguments.length === 0 ? this.chain.push('( )~~') : this.chain.push('( ' + String(value) + ' )~~');
		return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position > this.chain.length || position-1 < 0 ) {
      this.chain.length = 0;
      throw new Error();
    } else {
      this.chain.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[this.chain.length -1] = this.chain[this.chain.length -1].slice(0, -2);
    let complitedChain = this.chain.join('');
    this.chain.length = 0;
    return complitedChain;
  }
};

module.exports = chainMaker;
