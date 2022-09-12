const fs = require('fs')

const readstream = fs.createReadStream('./data.txt')

readstream.on('data', (chunck)=> {

    console.log('.............');
    console.log(chunck);
})

readstream.on('open', () => {
    console.log('stream is open');
})


setTimeout(() => {
    readstream.pause()
    console.log("stream is paused");
}, 15)

setTimeout(()=> {
readstream.resume()
console.log('streaming stated again');
}, 8000)