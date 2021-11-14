import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/Users.js'
import courses from './data/Courses.js'
import User from './models/userModel.js'
import Course from './models/courseModel.js'
import Enroll from './models/enrollModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Enroll.deleteMany()
        await User.deleteMany()
        await Course.deleteMany()
        
        const createUsers = await User.insertMany(users)

        const insUser = createUsers[0]._id

        const sampleCourse = courses.map(course => {
            return { ...course, user: insUser }
        })

        await Course.insertMany(sampleCourse)
        console.log(`Data imported!!`.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}


const destroyData = async () => {
    try {
        await Enroll.deleteMany()
        await User.deleteMany()
        await Course.deleteMany()
        
        console.log(`Data destroyed!!`.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}