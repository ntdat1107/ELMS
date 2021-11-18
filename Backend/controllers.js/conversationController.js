import Conversation from "../models/conversationModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const postLearner = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    const learners = await User.find({isLearner: true})

    const { subject, content, stt } = req.body
    const newConversation = await Conversation.create({
        sender: user._id,
        subject,
        content,
        stt
    })
    if (newConversation) {
        for (let i = 0; i < learners.length; i++) newConversation.receivers.push(learners[i]._id)
        await newConversation.save()
        res.status(201).json({
            _id: newConversation._id,
            sender: newConversation.sender,
            receivers: newConversation.receivers,
            subject: newConversation.subject,
            content: newConversation.content
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

export {postLearner}