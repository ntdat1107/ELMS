import e, { response } from "express";
import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import Lesson from "../models/lessonModel.js"
import User from "../models/userModel.js";



const getLesson = asyncHandler(async(req, res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const courses = await Lesson.find({ ...keyword })
    res.json(courses)
})

const getLessonsByFastname = asyncHandler(async (req, res) => {
    const lessons = await Lesson.find({courseFastname: `${req.params.id}`})
    if (lessons) {
        res.json(lessons)
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})

const getLessonsByFastnameAndId = asyncHandler(async (req, res) => {
    const lessons = await Lesson.findOne
    ({courseFastname: `${req.params.id}`, lessonNumber: `${req.params.token}`})
    // const lesson = await lessons.find({lessonNumber: `${req.params.token}`})
    if (lessons) {
        res.json(lessons)
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})

const createNewLesson = asyncHandler(async (req, res) => {
    const { lessonName, lessonDescription, lessonUrl } = req.body
    let lessons = await Lesson.find({})
    lessons = lessons.filter(item => item.courseFastname == req.params.fastName)
    const len = lessons.length + 1
    const lessonExist = await Lesson.findOne({courseFastname: req.params.fastName, 
        lessonNumber: len})
    if (lessonExist) {
        res.status(400).json('Lesson Number is existed in this course!!')
    }
    else {
        const lesson = await Lesson.create({
            courseFastname: req.params.fastName,
            lessonName,
            lessonNumber: len,
            lessonDescription,
            lessonUrl
        })
        if (lesson) {
            await lesson.save()
            res.status(201).json(lesson)
        }
        else {
            res.status(400).json("Invalid data")
        }
    }
})

const countLesson = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    let count = 0
    for (let i = 0; i < user.hasCourse.length; i++) {
        const course = await Course.findById(user.hasCourse[i])
        const lessonList = await Lesson.find({courseFastname: course.fastName})
        count = count + lessonList.length
    }
    res.json(count)
})

export {
    getLesson,
    getLessonsByFastname,
    getLessonsByFastnameAndId,
    createNewLesson,
    countLesson
}
