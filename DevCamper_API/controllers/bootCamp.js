const BootCamp = require("../models/bootCampModel");


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
        const id = req.path.replace("/", "");
        const bootCamp = await BootCamp.findById(id);
        if (!bootCamp) {
            res.status(400).json({
                sucess: true,
                message: 'invalid ID '
            });
            return;
        }
        res.status(200).json({
            sucess: true,
            message: bootCamp
        });
    } catch (error) {
        res.status(500).json({
            sucess: true,
            message: "error occured"
        })
    }

}

//@desc  Create new Bootcamp
//@route POST api/v1/bootcamps/:id
//@access Private

exports.createBootCamp = async (req, res, next) => {
    console.log(req.body);
    try {
        const bootcamp = await BootCamp.create(req.body);
        res.status(201).json({
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

//@desc  Update  Bootcamp
//@route PUT api/v1/bootcamps/:id
//@access Private

exports.updateBootCamp = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        sucess: true,
        message: `Update existing bootcamps`
    })
}

//@desc  Delete new Bootcamp
//@route DELTE api/v1/bootcamps/:id
//@access Private

exports.deleteBootCamp = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        sucess: true,
        message: `delete the bootcamps`
    })
}