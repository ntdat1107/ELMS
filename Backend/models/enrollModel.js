// import mongoose from 'mongoose'


// const enrollSchema = mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User'
//     },
//     enrollCourse: {
//         author: {
//             type: String,
//             required: true
//         },
//         name: {
//             type: String,
//             required: true
//         },
//         image: {
//             type: String,
//             required: true
//         },
//         description: {
//             type: String,
//             required: true
//         },
//         rateScore: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         rateNum: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         course: {
//             type: mongoose.Schema.Types.ObjectId,
//             required: true,
//             ref: 'Course'
//         }
//     }
// })



// const Enroll = mongoose.model('Enroll', enrollSchema)
// export default Enroll