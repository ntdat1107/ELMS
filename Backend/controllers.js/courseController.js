import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import User from '../models/userModel.js'



// @desc    Fetch all course
// @route   GET /api/managecourse
// @access  Public
const getCourse = asyncHandler(async(req, res) => {
    const courses = await Course.find({})
    res.json(courses)
})


// @desc    Fetch single course by fastName
// @route   GET /api/managecourse/:id
// @access  Public
const getCourseByFastname = asyncHandler(async (req, res) => {
    const courseNow = await Course.findOne({fastName: `${req.params.id}`})
    if (courseNow) {
        res.json(courseNow)
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})


export {
    getCourse,
    getCourseByFastname
}