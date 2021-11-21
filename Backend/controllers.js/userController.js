import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { accountID, password } = req.body;

    const user = await User.findOne({ accountID });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            isAdmin: user.isAdmin,
            isLearner: user.isLearner,
            isIns: user.isIns,
            hasCourse: user.hasCourse,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            accountID: user.accountID,
            password: user.password,
            email: user.email,
            avatar: user.avatar,
            city: user.city,
            country: user.country,
            description: user.description,
            sex: user.sex,
            phoneNumber: user.phoneNumber,
            birthDay: user.birthDay,
            hasCourse: user.hasCourse,
        });
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const users = await User.find({})
    if (user) {
        for (let i=0; i<users.length; i++) {
            if (!users[i]._id.equals(req.user._id) && users[i].email == req.body.email) {
                res.status(401)
                throw new Error("Email duplicated")
            }
        }
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.avatar = req.body.avatar || user.avatar;
        user.city = req.body.city || user.city;
        user.country = req.body.country || user.country;
        user.description = req.body.description || user.description;
        user.sex = req.body.sex || user.sex;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
        user.birthDay = req.body.birthDay || user.birthDay;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updateUser = await user.save();

        if (user.isIns) {
            const listCourses = user.hasCourse;
            for (let i = 0; i < listCourses.length; i++) {
                const course = await Course.findById(listCourses[i]);
                course.authorName = user.lastName;
                await course.save();
            }
        }

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
            token: generateToken(updateUser.password),
        });
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

// @desc    Register a new user
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        accountID,
        password,
        isAdmin,
        isLearner,
        isIns,
    } = req.body;

    const accountIdExists = await User.findOne({ accountID });
    const emailExists = await User.findOne({ email });
    if (accountIdExists) {
        res.status(400);
        throw new Error("Username already exists");
    } else if (emailExists) {
        res.status(400);
        throw new Error("User email already exists");
    }
    const user = await User.create({
        firstName,
        lastName,
        email,
        accountID,
        password,
        isLearner,
        isAdmin,
        isIns,
    });
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
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const getAllUserList = asyncHandler(async (req, res) => {
    const allUserList = await User.find({});
    if (allUserList) {
        res.json(allUserList);
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});
const getLearnerUserList = asyncHandler(async (req, res) => {
    const allLearnerList = await User.find({ isLearner: true });
    if (allLearnerList) {
        res.json(allLearnerList);
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});
const getInsUserList = asyncHandler(async (req, res) => {
    const allInsList = await User.find({ isIns: true });
    if (allInsList) {
        res.json(allInsList);
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

const getUserByID = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

const deleteUserByID = asyncHandler(async (req, res) => {
    const userList = await User.find({})
    const user = await User.findById(req.params.id);
    if (user) {
        if (user.isIns) {
            for (let i = 0; i < user.hasCourse.length; i++) {
                const course = await Course.findById(user.hasCourse[i])
                for (let j=0; j<userList.length; j++) {
                    userList[j].hasCourse = userList[j].hasCourse.
                    filter(item => !item.equals(course._id))
                    await userList[j].save
                }
                await course.remove()
            }
        }
        else if (user.isLearner) {
            for (let i = 0; i < user.hasCourse.length; i++) {
                const course = await Course.findById(user.hasCourse[i])
                course.learnerList = course.learnerList.filter(item => !item.equals(user._id))
                await course.save()
            }
        }
        await user.remove();
        res.json({ message: "User removed" });
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

const deleteLearnerByIDandFastName = asyncHandler(async(req, res) => {
    const course = await Course.findOne({fastName: req.params.fastName})
    const learner = await User.findById(req.params.id)

    if (course && learner) {
        course.learnerList = course.learnerList.filter(item => !item.equals(learner._id))
        await course.save()
        learner.hasCourse = learner.hasCourse.filter(item => !item.equals(course._id))
        await learner.save()
        res.json({ message: "User has been kicked"})
    }
    else {
        res.status(201)
        throw new Error("User or Course not found!")
    }
})

const resetPass = asyncHandler(async(req, res) => {
    const user = await User.findOne({accountID: req.body.userName, email: req.body.email})
    if (user) {
        user.password = req.body.password
        await user.save()
        res.status(200).json(req.body.password)
    }
    else {
        res.status(401)
        throw new Error("Username or email invalid!")
    }
})

export {
    authUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
    getAllUserList,
    getLearnerUserList,
    getInsUserList,
    getUserByID,
    deleteUserByID,
    deleteLearnerByIDandFastName,
    resetPass
};
