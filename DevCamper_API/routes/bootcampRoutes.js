const express = require("express")
const {
    getAllBootCamp,
    getBootCamp,
    createBootCamp,
    updateBootCamp,
    deleteBootCamp
} = require("../controllers/bootCamp");

const router = express.Router();

router.route("/")
    .get(getAllBootCamp)
    .post(createBootCamp);

router.route("/:id")
    .get(getBootCamp)
    .post(updateBootCamp)
    .delete(deleteBootCamp);



module.exports = router