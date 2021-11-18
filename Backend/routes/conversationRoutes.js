import asyncHandler from "express-async-handler";
import express from "express";
import Conversation from "../models/conversationModel.js";

const router = express.Router();

//new conv

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { subject, content, stt } = req.body;
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
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
                members: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

// get conv includes two userId

router.get(
    "/find/:firstUserId/:secondUserId",
    asyncHandler(async (req, res) => {
        try {
            const conversation = await Conversation.findOne({
                members: { $all: [req.params.firstUserId, req.params.secondUserId] },
            });
            res.status(200).json(conversation);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

export default router;