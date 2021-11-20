import asyncHandler from "express-async-handler";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

const getReceivers = asyncHandler(async(req, res) => {
    const conversation = Conversation.findById(req.params.id)
    if (conversation) {
        let listReceiver = []
    }
    else {
        res.status(404)
        throw new Error('Conversation not found')
    }
})