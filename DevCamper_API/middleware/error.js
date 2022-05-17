errorHandler = (err, req, res, next) => {
    //console the error
    //console.log(err.stack);

    res.status(err.statusCode).json({
        sucess: false,
        error: err.message
    })
};

module.exports = errorHandler;