import express from "express";
import { createNewCourse, deleteCourse, getLearners, getMyCourse, getUserCourses } from "../controllers.js/myCourseController.js";
import { checkIns, protect } from "../middleware/authMiddleware.js";
const router = express.Router()


router.route('/').get(protect, getUserCourses)

router.route('/getcourseby/:fastName').get(protect, checkIns, getMyCourse)

router.route('/learners/:fastName').get(protect, checkIns, getLearners)

router.route('/newcourse').post(protect, createNewCourse)

router.route('/:fastName').delete(protect, checkIns, deleteCourse)
export default router