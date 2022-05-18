const { response } = require("express");
const BootCamp = require("../models/bootCampModel");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/asyncHandler");


//@desc  Get all Bootcamp
//@route GET api/v1/bootcamps
//@access Private

exports.getAllBootCamp = asyncHandler(async (req, res, next) => {
    const bootcamps = await BootCamp.find();
    res.status(200).json({
        sucess: true,
        count: bootcamps.length,
        message: bootcamps
    })
});

//@desc  Get single  Bootcamp
//@route GET api/v1/bootcamps/:id
//@access Private

exports.getBootCamp = asyncHandler(async (req, res, next) => {

    const bootCamp = await BootCamp.findById(req.params.id);
    if (!bootCamp) {
        return next(new ErrorResponse(`The resorce ID ${req.params.id} is invalid`, 401));
    }
    res.status(200).json({
        sucess: true,
        message: bootCamp
    });
})

//@desc  Create new Bootcamp
//@route POST api/v1/bootcamp
//@access Private

exports.createBootCamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.create(req.body);
    res.status(201).json({
        sucess: true,
        message: bootcamp
    })
});

//@desc  Update  Bootcamp
//@route PUT api/v1/bootcamps/:id
//@access Private

exports.updateBootCamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!bootcamp) {
        return res.status(400).json({
            sucess: false
        });
    }
    res.status(200).json({
        sucess: true,
        message: bootcamp
    })

})

//@desc  Delete new Bootcamp
//@route DELTE api/v1/bootcamps/:id
//@access Private

exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return res.status(400).json({ sucess: false });
    }
    res.status(200).json({
        sucess: true,
        data: {}
    })
})