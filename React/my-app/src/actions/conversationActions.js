import axios from "axios";
import {
    CONVERSATION_SENDER_LIST_REQUEST,
    CONVERSATION_SENDER_LIST_SUCCESS,
    CONVERSATION_SENDER_LIST_FAIL,
    CONVERSATION_RCV_LIST_REQUEST,
    CONVERSATION_RCV_LIST_SUCCESS,
    CONVERSATION_RCV_LIST_FAIL,
} from "../constants/conversationConstants.js";

export const listconversationsSender = (id) => async (dispatch) => {
    try {
        dispatch({ type: CONVERSATION_SENDER_LIST_REQUEST });

        const { data } = await axios.get(`/api/conversations/sender/${id}`);

        dispatch({
            type: CONVERSATION_SENDER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CONVERSATION_SENDER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const listconversationsRcv = (id) => async (dispatch) => {
    try {
        dispatch({ type: CONVERSATION_RCV_LIST_REQUEST });

        const { data } = await axios.get(`/api/conversations/rcv/${id}`);

        dispatch({
            type: CONVERSATION_RCV_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CONVERSATION_RCV_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
