import mongoose from "mongoose";

const announcementSchema = mongoose.Schema(
    {
        conversationId: {
            type: String,
            required: true,
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        stt: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;
