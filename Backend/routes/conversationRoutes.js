import express from "express";
import { createConversation, getReceiveList, 
        getSendList } from "../controllers.js/conversationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.route('/create/:fastName').post(protect, createConversation)

router.route('/getsend').get(protect, getSendList)

router.route('/getreceive').get(protect, getReceiveList)

export default router;
