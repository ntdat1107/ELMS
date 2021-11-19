import expressAsyncHandler from "express-async-handler";
import Lesson from "../models/lessonModel.js"



const getLesson = expressAsyncHandler(async(req, res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const courses = await Lesson.find({ ...keyword })
    res.json(courses)
})

const getLessonsByFastname = expressAsyncHandler(async (req, res) => {
    const lessons = await Lesson.find({courseFastname: `${req.params.id}`})
    if (lessons) {
        res.json(lessons)
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})

const getLessonsByFastnameAndId = expressAsyncHandler(async (req, res) => {
    const lessons = await Lesson.findOne({courseFastname: `${req.params.id}`, lessonNumber: `${req.params.token}`})
    // const lesson = await lessons.find({lessonNumber: `${req.params.token}`})
    if (lessons) {
        res.json(lessons)
    }
    else {
        res.status(404)
        throw new Error('Course not found!!')
    }
})


export {
    getLesson,
    getLessonsByFastname,
    getLessonsByFastnameAndId
}
