import express from "express";
import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

const router = express.Router()


// @desc    Fetch all course
// @route   GET /api/managecourse
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const courses = await Course.find({})
    res.json(courses)
}))


// @desc    Fetch single course by fastName
// @route   GET /api/managecourse/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const courseNow = await Course.findOne({fastName: `${req.params.id}`})
    if (courseNow) {
        res.json(courseNow)
    }
    else {
        res.status(404).json({message: 'Course not found'})
    }
}))



export default router