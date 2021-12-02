import express from "express";
import {
    createNewCourse,
    deleteCourse,
    enrollCourse,
    getAllMyLearnersID,
    getLearners,
    getMyCourse,
    getUserCourses,
    updateCourse,
} from "../controllers.js/myCourseController.js";
import { checkIns, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getUserCourses)
.put(protect, updateCourse)

router.route("/getcourseby/:fastName").get(protect, checkIns, getMyCourse);

router.route("/learners/:fastName").get(protect, getLearners);

router.route("/newcourse").post(protect, createNewCourse);

router.route("/:fastName").delete(protect, checkIns, deleteCourse)

router.route("/getlearners").get(protect, getAllMyLearnersID);

router.route("/enroll").post(enrollCourse);

export default router;
