class User {
  constructor({name, token, state}) {
    this.name = name;
    this.token = token;
    this.state = state || {};
  }

  async perform(behavior) {
    await behavior.performBy(this);
  }
}

export {User};
