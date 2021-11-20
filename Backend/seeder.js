import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/Users.js'
import courses from './data/Courses.js'
import User from './models/userModel.js'
import Course from './models/courseModel.js'
import Conversation from './models/conversationModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Course.deleteMany()
        await Conversation.deleteMany()
        const createUsers = await User.insertMany(users[0])

        const adminUser = createUsers[0]._id

        const sampleCourse = courses.map(course => {
            return { ...course, userAdmin: adminUser }
        })
        const courseList = await Course.insertMany(sampleCourse)
        let sampleUser = users.map(user => {
            const listCourseTemp = []
            for (let i=0; i<courseList.length; i++) {
                if (courseList[i].authorName == user.lastName) listCourseTemp.push(courseList[i]._id)
            }
            return { ...user, hasCourse: listCourseTemp}
        })
        sampleUser = sampleUser.slice(1, users.length)
        await User.insertMany(sampleUser)
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