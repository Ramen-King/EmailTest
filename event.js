const handleFile = require('./crud')//?
const events = require('events')//?
const eventEmitter = new events.EventEmitter()//?


let myEventHandler = () => {
   // handleFile.create('test')
    //handleFile.read('test')
    handleFile.update('test', `UPDATED ${new Date}`)
    //handleFile.delete('test-updated')
    //console.log('hello')
}

eventEmitter.on('scream', myEventHandler)

const callEmit = () => {
 return eventEmitter.emit('scream')
}

module.exports.myEventHandler = myEventHandler

module.exports.callEmit = callEmit
