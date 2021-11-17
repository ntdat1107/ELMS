import mongoose from "mongoose";

const announcementSchema = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        receiver: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        ],
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
