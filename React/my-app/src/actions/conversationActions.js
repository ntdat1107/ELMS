import { CONVERSATION_LIST_REQUEST, CONVERSATION_LIST_SUCCESS, CONVERSATION_LIST_FAIL } from "../constants/conversationConstants.js";
import axios from "axios";

export const listconversations = () => async (dispatch) => {
    try {
        dispatch({ type: CONVERSATION_LIST_REQUEST });
        const { data } = await axios.get("/api/");
    } catch (error) {}
};
