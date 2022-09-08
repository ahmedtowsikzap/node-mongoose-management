const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("success")
    },1000 )
});

 async function getData(){

  const res = await promise;
  console.log(res);
}
 
getData()

fetch("")
.then(res => res.json())
.then(data => console.log(data))


async function getUser(){
const res = await fetch("");
const user = await res.json();

const userID = await fetch("https://jsonplaceholder.typicode.com/users")
const products = userID.json();
}