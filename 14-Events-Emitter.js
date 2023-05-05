const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on: Liste4n for an event
//emit: emit an event

customEmitter.on('response', () => {
    console.log('data received')
}) //passing the callbacks to the

customEmitter.emit('response') //what exactly is the response event

//Order is important...cant emit before listening
//Events are a core building block of node...what exactly is events???

// Output:
// PS F:\NodeJs> node 14-Events-Emitter.js
// data received