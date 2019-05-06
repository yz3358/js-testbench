class Referee {
  constructor() {
    this.instructions = [];
    this.users = new Map();
    this.snapshots = [];
  }

  register(users) {
    this.users = new Map(
      users.map(u => [u.name, u])
    )
  }

  learnInstructions(instructions) {
    this.instructions = instructions;
  }

  async start() {
    // const iterator = this.instructions[Symbol.iterator]();

    this.instructions.forEach((instruction, i) => {
      try {
        await instruction.run(this.users);
        this.takeSnapshot();
      } catch(exception) {
        exception.addInfo(instruction);
        exception.print();
        console.log(this.snapshots);
      }
    })

  }

  takeSnapshot() {
    this.snapshots.push(
      JSON.stringify(this.users)
    );
  }

}
