const handleFile = require("./crud"); //?
const events = require("events"); //?
const eventEmitter = new events.EventEmitter();
const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

let myEventHandler = () => {
  // maybe async would be a better approach...
  handleFile.create("test", `Hello world, it is ${new Date()}`);
  setTimeoutPromise(2000)
    .then(() => handleFile.read("test"))
    .catch(err => console.log(err));
  setTimeoutPromise(2000)
    .then(() => handleFile.update("test", `UPDATED ${new Date()}`))
    .catch(err => console.log(err));
  setTimeoutPromise(5000)
    .then(() => handleFile.delete("test"))
    .catch(err => console.log(err));
};

eventEmitter.on("scream", myEventHandler);

const theForce = () => {
  return eventEmitter.emit("scream");
};

module.exports.myEventHandler = myEventHandler;

module.exports.theForce = theForce;
