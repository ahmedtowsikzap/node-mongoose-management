const other  = require("./other.js")


// const res = other.sub(5,2)
// console.log(res)

const http = require('http')


const server = http.createServer((req,res) => {

 if(req.url === "/"){
    res.writeHead(200, {"Content-Type" : 'text/html'})
    res.write('<p>this one is home page </p>')
    res.end()
 }
 else if (req.url === "/contact"){
    res.writeHead(200, {"Content-Type" : 'text/html'})
    res.write('<p>this one is contact page & form </p>')
    res.end()
 }
     
} )

const port = 5000

server.listen(port)
console.log(`server is running at ${port}`);