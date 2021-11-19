import Conversation from "../models/conversationModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//POST new conv for All Learners
const postLearner = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const learners = await User.find({ isLearner: true });

    const { subject, content, stt } = req.body;
    const newConversation = await Conversation.create({
        sender: user._id,
        subject,
        content,
        stt,
    });
    if (newConversation) {
        for (let i = 0; i < learners.length; i++) newConversation.receivers.push(learners[i]._id);
        await newConversation.save();
        res.status(201).json({
            _id: newConversation._id,
            sender: newConversation.sender,
            receivers: newConversation.receivers,
            subject: newConversation.subject,
            content: newConversation.content,
        });
    } else {
        res.status(400);
        throw new Error("Invalid data");
    }
});

//POST new conv for All Instructors

const postInstruc = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const instrucs = await User.find({ isIns: true });

    const { subject, content, stt } = req.body;
    const newConversation = await Conversation.create({
        sender: user._id,
        subject,
        content,
        stt,
    });
    if (newConversation) {
        for (let i = 0; i < instrucs.length; i++) newConversation.receivers.push(instrucs[i]._id);
        await newConversation.save();
        res.status(201).json({
            _id: newConversation._id,
            sender: newConversation.sender,
            receivers: newConversation.receivers,
            subject: newConversation.subject,
            content: newConversation.content,
        });
    } else {
        res.status(400);
        throw new Error("Invalid data");
    }
});

//GET conversation of Sender
const getSender = asyncHandler(async (req, res) => {
    const conversationsender = await Conversation.find({
        sender: req.params.senderId,
    });
    if (conversationsender) res.status(200).json(conversationsender);
    else res.status(500).json(err);
});

//GET conversation of Receiver
const getReceiver = asyncHandler(async (req, res) => {
    const conversationreceivers = await Conversation.find({
        receivers: { $in: [req.params.receiverId] },
    });
    if (conversationreceivers) res.status(200).json(conversationreceivers);
    else res.status(500).json(err);
});

export { postLearner, postInstruc, getSender, getReceiver };
