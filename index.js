/**
  A test bench should have some of the following modules.

  * [User] - simulated user, each user should have:
    name - to be refered to when called by
    token
    state - state is modified during running behaviors


  * [Referee] - who watches the users state, step by step following the proceed of as the testing; Orders the users to run certain behavior; Controls the test flow
    Each referee should have:
      Instruction[] instructions
      String[] snapshots - after each instruction, take a snapshot of this.users
      Map users

      start() - runs this.instructions asyncly and one at a time, if exception is caught, append instructions index to it, and print the exception
      register(User[] users) - register the name of each user


  * [Instruction] - each instruction running is assumed to be async
    "User A do behavior0, (user B and C should have state0 and state1)"

    An instruction must order one party do at least one step.

    It might require party X to behave certain state. If such requirement is imposed, and the requirement does not meet the actual state, an exception is throwed.

    It might change the state of some user. (It is recommended that it changes the state every time)

  * [Behavior]
    It specifies how one user will do somthing, and how state is changed to the user after the behavior is finished

  * [Exception] - contains information that is similar to:
    "User X got state.foo == 'bar', expected: user X state.foo == 'foo'. Exception raised during process N."

  * [Request] - build on axios - handles http request

*/

/**
  The test bench is designed to run in node.js
  What if we let that run in wxapp dev tool? (What is the point?)
  Then we should rewrite async function in promise.
*/

const {Request} = require('./modules/basic/request');

(async () => {
  try {
    const res = await Request.request({
      url: 'v1/goods/0/1/15',
      token: '',
      params: {
        name: "项目"
      }
    })
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
})();
