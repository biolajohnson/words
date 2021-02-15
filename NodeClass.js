module.exports = class Node {
  constructor(stringDef) {
    this.title = "";
    this.description = "";
    this.stringDef = stringDef;
  }

  processing() {
    const theProcess = this.stringDef.split(":");
    this.title = theProcess[0];
    this.description = theProcess[1];
  }
};
