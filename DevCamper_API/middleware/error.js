const ErrorResponse = require("../utils/errorResponse");

errorHandler = (err, req, res, next) => {
    //console the error
    //console.log(err.stack);

    let error = { ...err };
    error.message = err.message;
    //Custom error messages

    if (err.name == "CastError") {
        const message = `The resorce ID ${req.params.id} doesn't exist.`
        error = new ErrorResponse(message, 404);
    }

    //Dublicate key
    if (err.code == 11000) {
        console.log("-----", error);
        const message = `Dublicated filed value entered`
        error = new ErrorResponse(message, 400);
        console.log(error);
    }

    //Validation error message 
    if (err.name == "ValidationError") {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        sucess: false,
        error: error.message || 'server error'
    })
};

module.exports = errorHandler;