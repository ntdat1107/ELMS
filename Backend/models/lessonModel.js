import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    courseFastname: {
        type: String,
        required: true,
        ref: 'Course'
    },  
    lessonName: {
        type: String,
        required: true
    },
    lessonNumber: {
        type: Number,
        required: true
    },
    lessonDescription: {
        type: String,
        required: true
    },
    lessonDuration: {
        type: Number,
        required: true
    },
    lessonUrl: {
        type: String,
        required: true
    }    
}, {
    timestamps: true
})

const Lesson = mongoose.model('Lesson', lessonSchema)

export default Lesson