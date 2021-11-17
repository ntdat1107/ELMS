import asyncHandler from "express-async-handler";
import express from "express";
import Announcement from "../models/announcementsModel.js";

const router = express.Router();

//add

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const newAnnouncement = new Announcement(req.body);

        try {
            const savedAnnouncement = await newAnnouncement.save();
            res.status(200).json(savedAnnouncement);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

//get

router.get(
    "/:conversationId",
    asyncHandler(async (req, res) => {
        try {
            const announcements = await Announcement.findById(req.params.conversationId);
            res.status(200).json(announcements);
        } catch (err) {
            res.status(500).json(err);
        }
    })
);

export default router;
