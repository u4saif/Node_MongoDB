const { response } = require("express");
const course = require("../models/courseModel");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/asyncHandler");

//@desc  Get all courses
//@route GET api/v1/courses
//@route GET api/v1/bootcamps/:bootcampId/courses
//@access Public

exports.getCourses = asyncHandler(async (req, res, next) => {
    let query;
    if (req.params.bootcampId) {
        console.log(req.params);
        query = course.find({ bootcamp: req.params.bootcampId });
    } else {
        query = course.find().populate({ path: 'bootcamp', select: "name description" });
    }
    const couses = await query;
    res.status(200).json({
        status: true,
        count: couses.length,
        data: couses
    })
})