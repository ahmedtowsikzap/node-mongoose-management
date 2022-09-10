const other  = require("./other.js")


// const res = other.sub(5,2)
// console.log(res)

const http = require('http')


const server = http.createServer((req,res) => {

res.end('hellow')
} )

const port = 5000

server.listen(port)
console.log(`server is running at ${port}`);