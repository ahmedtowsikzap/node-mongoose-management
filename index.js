// const other  = require("./other.js")


// const res = other.sub(5,2)
// console.log(res)

const http = require('http')
const url = require('url')


const server = http.createServer((req,res) => {

const address_url = 'http://localhost:5000/contact?name=ahmed&country=bangladesh';
const parsed_url = url.parse(address_url,true)
const queryObj = parsed_url.query
console.log(queryObj);
 }
)
// console.log(url);
const port = 5000

server.listen(port)
console.log(`server is running at ${port}`);

// /contact?name=towsik&country=bangladesh
// /admin
// /home