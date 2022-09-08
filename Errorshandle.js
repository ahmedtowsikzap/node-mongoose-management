async function getData(){
    try{
        undefined.find();
    } catch (error) {
        errorHandler(error)
    }
}

getData();


function errorHandler(error){
    const {name, message, stack} = error;
    logger.error({
        name,
        message,
        stack
    });
 
    console.log("internel server error");
}

console.log("Done!")
