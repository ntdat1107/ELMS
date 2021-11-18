import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'
import { json } from 'express'

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
        
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})


const checkIns = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isIns) {
        const course = await Course.findOne({fastName: req.params.fastName})
        if(course && req.user.hasCourse.indexOf(course._id) !== -1) {
            next()
        }
        else {
            res.status(401)
            throw new Error('This course is not existed or you are not author')
        }
    }
    else {
        res.status(401)
        throw new Error('Not authorized as an instructor')
    }
})

export { protect, checkIns }