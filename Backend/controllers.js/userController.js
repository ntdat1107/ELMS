import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'



// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    const { accountID, password } = req.body

    const user = await User.findOne({ accountID })
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            accountID: user.accountID,
            email: user.email,
            avatar: user.avatar,
            isAdmin: user.isAdmin,
            isLearner: user.isLearner,
            isIns: user.isIns,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            accountID: user.accountID,
            email: user.email,
            avatar: user.avatar,
            city: user.city,
            country: user.country,
            description: user.description,
            sex: user.sex,
            phoneNumber: user.phoneNumber,
            birthDay: user.birthDay
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
            user.firstName = req.body.firstName || user.firstName
            user.lastName = req.body.lastName || user.lastName
            user.email = req.body.email || user.email
            user.avatar = req.body.avatar || user.avatar
            user.city = req.body.city || user.city
            user.country = req.body.country || user.country
            user.description = req.body.description || user.description
            user.sex = req.body.sex || user.sex
            user.phoneNumber = req.body.phoneNumber || user.phoneNumber
            user.birthDay = req.body.birthDay || user.birthDay
            if (req.body.password) {
                user.password = req.body.password
            }

            const updateUser = await user.save()

            res.json({
                _id: updateUser._id,
                firstName: updateUser.firstName,
                lastName: updateUser.lastName,
                accountID: updateUser.accountID,
                email: updateUser.email,
                avatar: updateUser.avatar,
                city: updateUser.city,
                country: updateUser.country,
                description: updateUser.description,
                sex: updateUser.sex,
                phoneNumber: updateUser.phoneNumber,
                birthDay: updateUser.birthDay,
                token: generateToken(updateUser.password)
            })
        }
    else {
        res.status(401)
        throw new Error('User not found')
    }
})




// @desc    Register a new user
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const { firstName, lastName, email, accountID, password, isAdmin, isLearner, isIns } = req.body

    const accountIdExists = await User.findOne({ accountID })
    const emailExists = await User.findOne({ email })
    if (accountIdExists) {
        res.status(400)
        throw new Error('Username already exists')
    }
    else if (emailExists) {
        res.status(400)
        throw new Error('User email already exists')
    }
    const user = await User.create({
        firstName,
        lastName,
        email,
        accountID,
        password,
        isLearner,
        isAdmin,
        isIns
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: firstName,
            lastName: lastName,
            accountID: user.accountID,
            email: user.email,
            isAdmin: user.isAdmin,
            isLearner: user.isLearner,
            isIns: user.isIns,
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

export { authUser, getUserProfile, updateUserProfile, registerUser }