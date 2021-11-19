import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import User from '../models/userModel.js'



//@dest     Fetch all courses of user
//@route    GET /api/mycourses/:id
const getUserCourses = asyncHandler(async(req, res) => {
    const userNow = await User.findById(req.user._id)
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
    const courseNow = await Course.findOne({fastName: req.params.fastName})
    if (courseNow) {
        let ans = []
        for (let i=0; i<courseNow.learnerList.length; i++) {
            ans.push(await User.findById(courseNow.learnerList[i]))
        }
        res.json(ans)
    }
    else {
        res.status(404)
        throw new Error('Course not found')
    }
})

const createNewCourse = asyncHandler(async(req, res) => {
    const { name, image, category, description, fastName } = req.body

    const courseExists = await Course.findOne({ fastName })
    const userAuthor = await User.findById( req.user._id )
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
        await course.save()
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

const deleteCourse = asyncHandler(async(req, res) => {
    const course = await Course.findOne({fastName: req.params.fastName})
    const users = await User.find({})
        
    if (course) {
        for (let i=0; i<users.length; i++) {
            if (users[i].hasCourse.indexOf(course._id) !== -1) {
                users[i].hasCourse = users[i].hasCourse.filter(item => !item.equals(course._id))
                await users[i].save()
            }
        }
        await course.remove()
        res.json({ message: 'Course removed' })
    }
    else {
        res.status(404)
        throw new Error('Course not found')
    }
})


const getAllMyLearnersID = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    if (!user.isIns) {
        res.status(201)
        throw new Error('You are not an instructor')
    }
    const idList = []
    for (let i=0; i<user.hasCourse.length; i++) {
        const course = await Course.findById(user.hasCourse[i])
        if (course && course.learnerList) course.learnerList.map(id => {
            idList.push(id)
        })
    }
    res.json(idList)
})

const enrollCourse = asyncHandler(async(req, res) => {
    const user = req.user
    const course = req.course
    user.hasCourse.push(course._id)
    await user.save()
    course.learnerList.push(user._id)
    await course.save()
    res.json({message: "Enroll success"})
})

export { getUserCourses, getLearners, createNewCourse, getMyCourse, 
    deleteCourse, getAllMyLearnersID, enrollCourse }