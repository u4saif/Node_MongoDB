const { response } = require("express");
const BootCamp = require("../models/bootCampModel");
const ErrorResponse = require("../utils/errorResponse.js");


//@desc  Get all Bootcamp
//@route GET api/v1/bootcamps
//@access Private

exports.getAllBootCamp = async (req, res, next) => {
    console.log(req.body);
    try {
        const bootcamps = await BootCamp.find();
        res.status(200).json({
            sucess: true,
            message: bootcamps
        })
    } catch (error) {
        res.status(200).json({
            sucess: true,
            message: error.message
        })
    }

}

//@desc  Get single  Bootcamp
//@route GET api/v1/bootcamps/:id
//@access Private

exports.getBootCamp = async (req, res, next) => {
    try {
        const bootCamp = await BootCamp.findById(req.params.id);
        if (!bootCamp) {
            return next(new ErrorResponse(`The resorce ID ${req.params.id} is invalid`, 401));
        }
        res.status(200).json({
            sucess: true,
            message: bootCamp
        });
    } catch (error) {
        next(new ErrorResponse(`The resorce ID ${req.params.id} doesn't exist.`, 404));
    }

}

//@desc  Create new Bootcamp
//@route POST api/v1/bootcamp
//@access Private

exports.createBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.create(req.body);
        res.status(201).json({
            sucess: true,
            message: bootcamp
        })
    } catch (error) {
        next(error);
    }

}

//@desc  Update  Bootcamp
//@route PUT api/v1/bootcamps/:id
//@access Private

exports.updateBootCamp = async (req, res, next) => {

    try {
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
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: 'Something went wrong'
        })
    }

}

//@desc  Delete new Bootcamp
//@route DELTE api/v1/bootcamps/:id
//@access Private

exports.deleteBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({
            sucess: true,
            data: {}
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: 'Something went wrong'
        })
    }
}