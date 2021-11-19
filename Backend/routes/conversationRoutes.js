import asyncHandler from "express-async-handler";
import express from "express";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";
import { protect } from "../middleware/authMiddleware.js";
import { postLearner, postInstruc, getSender, getReceiver } from "../controllers.js/conversationController.js";

const router = express.Router();

//new conv

router.route("/postLearner").post(protect, postLearner);

router.route("/postInstruc").post(protect, postInstruc);

//get conv of a user

router.route("/sender/:senderId").get(getSender);
router.route("/rcv/:receiverId").get(getReceiver);

export default router;
