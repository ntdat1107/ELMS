import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
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
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
