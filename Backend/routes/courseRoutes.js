import express from "express";
import { getCourse, getCourseByFastname, createCourseReview } from "../controllers.js/courseController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()


router.route('/').get(getCourse)
router.route('/:id/reviews').post(protect, createCourseReview)


router.route('/:id').get(getCourseByFastname)

export default router