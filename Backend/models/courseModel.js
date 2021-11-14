import mongoose from 'mongoose'


const ratingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rateScore: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})


const courseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    author: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: [ratingSchema],
    rateScore: {
        type: Number,
        required: true,
        default: 0
    },
    rateNum: {
        type: Number,
        required: true,
        default: 0
    },
    typeCourse: {
        type: String,
        required: true,
        default: "New"
    },
    fastName: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

const Course = mongoose.model('Course', courseSchema)

export default Course