import express from "express";

const router = express.Router()

import { getLesson, getLessonsByFastname, getLessonsByFastnameAndId } from "../controllers.js/lessonController.js"

// @desc Fetch all lessons
// @route GET /api/lessons
// @access Public

router.route('/').get(getLesson)
// @desc Fetch all lessons
// @route GET /api/lessons/
// @access Public
router.route('/:id').get(getLessonsByFastname)
router.route('/:id/:token').get(getLessonsByFastnameAndId)
export default router