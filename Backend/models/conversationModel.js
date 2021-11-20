import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiverName: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
