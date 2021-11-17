import express from "express";
import { getCourse, getCourseByFastname } from "../controllers.js/courseController.js";
import { getUserCourses } from "../controllers.js/myCourseController.js";
const router = express.Router()


router.route('/:id').get(getUserCourses)

export default router