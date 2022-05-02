const BootCamp = require("../models/bootCampModel");

//@desc  Create new Bootcamp
//@route POST api/v1/bootcamps
//@access Private

exports.createBootCamp = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        sucess: true,
    })
}