import asyncHandler from "express-async-handler";
import express from "express";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

const router = express.Router();

//new conv

router.post(
    "/postLearner",
    asyncHandler(async (req, res) => {
        const { sender, receivers, subject, content, stt } = req.body;
        const users = await User.find({ isLearner: true });

        const newConversation = new Conversation({
            sender,
            receivers,
            subject,
            content,
            stt,
        });

        for (const i = 0; i < users.length; i++) newConversation.receivers.push(users[i]._id);
        await newConversation.save();

        try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

router.post(
    "/postInstructor",
    asyncHandler(async (req, res) => {
        const { sender, subject, content, stt } = req.body;
        const users = await User.find({ isIns: true });
        for (const user of users) receiver.push(user._id);

        const newConversation = new Conversation({
            sender,
            receivers,
            subject,
            content,
            stt,
        });
        try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

//get conv of a user

router.get(
    "/:userId",
    asyncHandler(async (req, res) => {
        try {
            const conversation = await Conversation.find({
                sender: [req.params.userId],
                receivers: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

export default router;
