//pending 

//resolved

//rejected

 const myPromise = new Promise((resolve, reject) => {
    const user = true;
    if(!user){
 reject("users is not present in the database!")
    } else {
        setTimeout(() =>
        {
         resolve({name: "john"})
        }, 1000);
    }
   

 });

const userId = [1,2,4,56,7,8];
let userdata = []
for(let i = 0; i< userId.length; i++){
    const user = userId[i]
   userdata.push(myPromise) 
}
Promise.all(userdata).then(res => {
    console.log(res)
})
// console.log(userdata)

 myPromise
 .then(res => console.log(res))
 .catch(err => console.log(err));

 console.log("done")