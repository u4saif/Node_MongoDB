const express = require("express")
const {
    getAllBootCamp,
    getBootCamp,
    createBootCamp,
    updateBootCamp,
    deleteBootCamp
} = require("../controllers/bootCamp");

const router = express.Router();

//include other resourse routes
const courses = require("./coursesRoute");
//Re-route the resourse route
router.use("/:bootcampId/courses", courses);

router.route("/")
    .get(getAllBootCamp)
    .post(createBootCamp);

router.route("/:id")
    .get(getBootCamp)
    .post(updateBootCamp)
    .delete(deleteBootCamp);



module.exports = router