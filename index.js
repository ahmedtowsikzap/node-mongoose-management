// const other  = require("./other.js")


// const res = other.sub(5,2)
// console.log(res)

const http = require('http')
const url = require('url')
const fs =  require('fs')


const server = http.createServer((req,res) => {
      if(req.url = '/') {
        fs.readFile('data.txt, (err,data) => {
      if(err){

      res.write("failed to read data")
      res.end()
      } else{
        res.write(data)
        res.end()
      }
        })

// console.log(url);
const port = 5000

server.listen(port)
console.log(`server is running at ${port}`);

// /contact?name=towsik&country=bangladesh
// /admin
// /home