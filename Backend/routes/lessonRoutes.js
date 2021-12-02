import express from "express";
import { checkIns, protect } from "../middleware/authMiddleware.js";
const router = express.Router()

import { countLesson, createNewLesson, getLesson, getLessonsByFastname, getLessonsByFastnameAndId } from "../controllers.js/lessonController.js"

// @desc Fetch all lessons
// @route GET /api/lessons
// @access Public

router.route('/').get(getLesson)
// @desc Fetch all lessons
// @route GET /api/lessons/
// @access Public
router.route('/:id').get(getLessonsByFastname)
router.route('/:id/:token').get(getLessonsByFastnameAndId)

router.route('/:fastName/create').post(protect, checkIns, createNewLesson)

router.route('/getLesson/countLesson/number').get(protect, countLesson)

export default router