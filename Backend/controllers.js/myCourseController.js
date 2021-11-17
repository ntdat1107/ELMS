import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import User from '../models/userModel.js'



//@dest     Fetch all courses of user
//@route    GET /api/mycourses/:id
const getUserCourses = asyncHandler(async(req, res) => {
    const userNow = await User.findById(req.params.id)
    if (userNow) {
        if (userNow.hasCourse.length == 0) res.json([])
        else {
            let arr = []
            for (let i=0; i<userNow.hasCourse.length; i++) {
                let courseTemp = await Course.findById(userNow.hasCourse[i])
                arr.push(courseTemp)
            }
            res.json(arr)
        }
    }
    else {
        res.status(404)
        throw new Error('User not found!')
    }
})


export { getUserCourses }