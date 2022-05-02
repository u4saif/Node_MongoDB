const express = require("express")

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: 'Show Allbootcamps'
    })
});

router.get("/:id", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Show bootcamps ${req.params.id}`
    })
});

router.post("/:id", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `create new bootcamps`
    })
});
router.put("/:id", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Update bootcamps ${req.params.id}`
    })
});

router.delete("/:id", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Delete bootcamps ${req.params.id}`
    })
});
module.exports = router