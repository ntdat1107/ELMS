import mongoose from 'mongoose'


const ratingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rating: {type: Number, required: true },
    comment: {type: String, required: true },
    name: {type: String, required: true },
}, {
    timestamps: true
})


const courseSchema = mongoose.Schema({
    userAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    learnerList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    authorName: {
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
const Review = mongoose.model('Review', ratingSchema)

export {Review}

export default Course