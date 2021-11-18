import asyncHandler from "express-async-handler";
import express from "express";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";
import { protect } from "../middleware/authMiddleware.js";
import { postLearner } from "../controllers.js/conversationController.js";

const router = express.Router();

//new conv

router.route('/postLearner').post(protect, postLearner)

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
