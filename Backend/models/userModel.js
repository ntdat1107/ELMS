import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isIns: {
        type: Boolean,
        required: true,
        default: false
    },
    avatar: {
        type: String,
        default: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
    },
    sex: {
        type: String,
    },
    birthDay: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String
    },
    description: {
        type: String,
    },
    hasCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User