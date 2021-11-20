import asyncHandler from "express-async-handler";
import Conversation from "../models/conversationModel.js";
import Course from "../models/courseModel.js";
import User from "../models/userModel.js";

const createConversation = asyncHandler(async(req, res) => {
    let receivers = [], receiverName
    if (req.params.fastName == "toLearners") {
        receivers = await User.find({isLearner: true})
        receiverName = "All Learners"
    } else if (req.params.fastName == "toInstructors") {
        receivers = await User.find({isIns: true})
        receiverName = "All Instructors"
    } else {
        const course = await Course.findOne({fastName: req.params.fastName})
        for (let i=0; i<course.learnerList.length; i++) {
            const temp = await User.findById(course.learnerList[i])
            receivers.push(temp)
        }
        receiverName = course.name
    }
    if (receivers && receivers.length > 0) {
        const { subject, content } = req.body
        const sender = await User.findById(req.user._id)
        const newConversation = await Conversation.create({
            subject,
            content,
            sender: req.user._id,
            receiverName
        })
        if (newConversation) {
            await newConversation.save()
            sender.sendList.push(newConversation._id)
            await sender.save()
            receivers.map(receive => {
                receive.receiveList.push(newConversation._id)
                receive.save()
            })
            res.status(201).json(newConversation)
        }
    }
    else {
        res.status(404)
        throw new Error('Receiver not found or not exist')
    }
})

const getSendList = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    let listCvs = []
    for (let i=0; i<user.sendList.length; i++) {
        const cvs = await Conversation.findById(user.sendList[i])
        listCvs.push(cvs)
    }
    res.status(200).json(listCvs)
})

const getReceiveList = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    let listCvs = []
    for (let i=0; i<user.receiveList.length; i++) {
        const cvs = await Conversation.findById(user.receiveList[i])
        listCvs.push(cvs)
    }
    res.status(200).json(listCvs)
})

export { createConversation, getSendList, getReceiveList }