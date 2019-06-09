const events = require('events')//?
const eventEmitter = new events.EventEmitter()//?

// Create an event handler
let myEventHandler = () => {
    console.log('I hear a scream!')
}

// Assign the even handler to an event
eventEmitter.on('scream', myEventHandler)//?
// fire the 'scream' event
eventEmitter.emit('scream')//?
