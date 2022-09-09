function multiple(){
    console.log("multiple function");
}
function errorHandler(error){
    const {name, message, stack} = error;
    logger.error({
        name,
        message,
        stack
    });
 
    console.log("internel server error");
}

module.exports = {
    errorHandler,
    multiple
}