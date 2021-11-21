import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    courseFastname: {
        type: String,
        required: true
    },  
    lessonName: {
        type: String,
        required: true
    },
    lessonNumber: {
        type: Number,
        required: true,
        default: 0,
    },
    lessonDescription: {
        type: String,
        required: true
    },
    lessonDuration: {
        type: Number,
        required: true,
        default: 0
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