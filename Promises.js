//pending 

//resolved

//rejected

 const myPromise = new Promise((resolve, reject) => {
    const user = null;
    if(!user){
 reject("users is not present in the database!")
    } else {
        setTimeout(() =>
        {
         resolve("got the data")
        }, 1000);
    }
   

 });

 