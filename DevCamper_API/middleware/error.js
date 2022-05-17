errorHandler = (err, req, res, next) => {
    //console the error
    console.log(err.stack);

    res.status(500).json({
        sucess: false,
        error: err.message
    })
};

module.exports = errorHandler;