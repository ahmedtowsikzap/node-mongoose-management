const event = require('events')

const eventEmitter = new  event.EventEmitter()

// Creating an event handler


const shoutag = () =>{

    console.log('Im shouting like an alien');
}

//assign the handler to an event

eventEmitter.on('shout', shoutag)

//firing the event

eventEmitter.emit('shout')

