const { response } = require("express");
const BootCamp = require("../models/bootCampModel");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/asyncHandler");


//@desc  Get all Bootcamp
//@route GET api/v1/bootcamps
//@access Private

exports.getAllBootCamp = asyncHandler(async (req, res, next) => {

    //copy query
    const reqQuery = { ...req.query }

    //remove select fileds
    const removeFileds = ["select", "sort"];

    //LoopOver to remove the fields
    removeFileds.forEach(filed => delete reqQuery[filed]);

    //making string from query 
    let queryString = JSON.stringify(reqQuery);
    //creating oprator
    queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g, value => `$${value}`);

    //Finding resources
    query = BootCamp.find(JSON.parse(queryString));

    //select field
    if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields);

    }
    //sort applied
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        if (sortBy) {
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createAt');
        }

    }
    //Adding Pagination object 
    const pagination = {};
    if (req.query.page) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await BootCamp.countDocuments();
        query = query.skip(startIndex).limit(limit);

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            }
        }
        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            }
        }
    }

    const bootcamps = await query;
    res.status(200).json({
        sucess: true,
        count: bootcamps.length,
        pagination,
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