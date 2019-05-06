class Instruction {
  constructor({desc, index}) {
    this.desc = desc; // description
    this.expectedState = {username: '', state: {}}
    this.index = index;
  }

  async run() {
    // TODO:
    // run based on desc (should we make this a natural language processed step?)

    // compare the state with the expectedState (not necessary, sometimes the behavior does not need validation)
    // if not matched, throw exception
  }
}

class RunTimeExecption {
  constructor({i, expected, actual}) {
    this.instructionIndex = i;
  }

  print() {
    let msg = `User ${this.userName} expected to ${this.expected}, but got ${this.actual} instead.`;
    if (this.instructionIndex > 0) {
      msg += `(Exception caught in step ${this.instructionIndex})`;
    }
    console.log(msg);
  }

}

export {Instruction, RunTimeExecption};
