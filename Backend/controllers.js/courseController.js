import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import {Review} from '../models/courseModel.js'
import User from '../models/userModel.js'



// @desc    Fetch all course
// @route   GET /api/managecourse
// @access  Public
const getCourse = asyncHandler(async(req, res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const courses = await Course.find({ ...keyword })
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
// @desc    Creat new review
// @route   POST /api/courses/:id/:token/reviews
// @access  Private
const createCourseReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body
    const course = await Course.findOne({fastName: `${req.params.id}`})
    const userLearner = await User.findById( req.user._id )
    if (course) {
        const alreadyReviewed = course.ratings.find(r => r.user.toString() === req.user._id.toString())
        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Course already reviewed')
        }

        const review = await Review.create({
            rating: Number(rating),
            comment,
            user: userLearner._id,
            name: userLearner.firstName + ' ' + userLearner.lastName
        })

        course.ratings.push(review)

        course.rateNum = course.ratings.length

        course.rateScore = course.ratings.reduce((acc, item) => item.rating + acc, 0) / course.ratings.length

        await course.save()
        res.status(201).json({message: 'Review added'})
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})

const getCourseByQuery = asyncHandler(async(req, res) => {
    const query = {};


    if (req.query.search) {
        query.name = {
            $regex: req.query.search,
            $options: 'i'
        },
        query.authorName = {
            $regex: req.query.search,
            $options: 'i'
        },
        query.category = {
            $regex: req.query.search,
            $options: 'i'
        }

    }

    try {
        let courses = await Course.find({$or:[{name: query.name},{authorName:query.authorName}, {category: query.category}]})
        res.json(courses)
    } catch (error) {
        res.status(500).send("Error to find course")
    }

})


export {
    getCourse,
    getCourseByFastname,
    createCourseReview,
    getCourseByQuery
}