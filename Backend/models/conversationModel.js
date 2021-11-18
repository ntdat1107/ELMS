const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
