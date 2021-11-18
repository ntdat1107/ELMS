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


export { getUserCourses, getLearners }