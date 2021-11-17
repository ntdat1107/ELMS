import express from "express";
import { getCourse, getCourseByFastname } from "../controllers.js/courseController.js";
import { getLearners, getUserCourses } from "../controllers.js/myCourseController.js";
const router = express.Router()


router.route('/:id').get(getUserCourses)

router.route('/learners/:id').get(getLearners)

export default router