import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import User from '../models/userModel.js'



//@dest     Fetch all courses of user
//@route    GET /api/mycourses/:id
const getUserCourses = asyncHandler(async(req, res) => {
    const userNow = req.user
    if (userNow) {
        if (userNow.hasCourse.length == 0) res.json([])
        else {
            let arr = []
            for (let i=0; i<userNow.hasCourse.length; i++) {
                arr.push(await Course.findById(userNow.hasCourse[i]))
            }
            res.json(arr)
        }
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})


const getLearners = asyncHandler(async(req, res) => {
    const listLearners = await User.find({isLearner: true})
    const courseNow = await Course.findOne({fastName: req.params.fastName})
    if (listLearners) {
        let ans = []
        for (let i=0; i<listLearners.length; i++) {
            if (listLearners[i].hasCourse.indexOf(courseNow._id) !== -1) ans.push(listLearners[i])
        }
        res.json(ans)
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})

const createNewCourse = asyncHandler(async(req, res) => {
    const { userID, name, image, category, description, fastName } = req.body

    const courseExists = await Course.findOne({ fastName })
    const userAuthor = await User.findById( userID )
    const admin = await User.findOne({ isAdmin: true })
    if ( courseExists ) {
        res.status(400)
        throw new Error('Pathname already exists')
    }
    const course = await Course.create({
        authorName: userAuthor.lastName,
        name,
        image,
        category,
        description,
        fastName,
        userAdmin: admin._id 
    })
    if (course) {
        userAuthor.hasCourse.push(course._id)
        await userAuthor.save()
        res.status(201).json({
            _id: course._id,
            name: course.name,
            category: course.category,
            description: course.description,
            fastName: course.fastName,
            rateScore: course.rateScore,
            rateNum: course.rateNum,
            authorID: userAuthor._id,
            list: userAuthor.hasCourse
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid course data')
    }
})

const getMyCourse = asyncHandler(async(req, res) => {
    const course = await Course.findOne({fastName: req.params.fastName})
    if (course) {
        res.json(course)
    }
    else {
        res.status(404)
        throw new Error('Course not found')
    }
})

export { getUserCourses, getLearners, createNewCourse, getMyCourse }