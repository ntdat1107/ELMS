import express from "express";
import { getCourse, getCourseByFastname } from "../controllers.js/courseController.js";
import { createNewCourse, getLearners, getUserCourses } from "../controllers.js/myCourseController.js";
const router = express.Router()


router.route('/:id').get(getUserCourses)

router.route('/learners/:fastName').get(getLearners)

router.route('/newcourse').post(createNewCourse)
export default router