import express from "express";
import { getCourse, getCourseByFastname } from "../controllers.js/courseController.js";
const router = express.Router()


router.route('/').get(getCourse)


router.route('/:id').get(getCourseByFastname)

export default router