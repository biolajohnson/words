module.exports = class Node {
  constructor(stringDef) {
    this.title = "";
    this.description = "";
    this.stringDef = stringDef;
  }

  processing() {
    const beforeProcess = this.stringDef.replace(".", "");
    const theProcess = beforeProcess.split(":");
    this.title = theProcess[0];
    this.description = theProcess[1];
  }
};
