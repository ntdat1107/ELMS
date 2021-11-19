import {
    CONVERSATION_SENDER_LIST_REQUEST,
    CONVERSATION_SENDER_LIST_SUCCESS,
    CONVERSATION_SENDER_LIST_FAIL,
    CONVERSATION_RCV_LIST_REQUEST,
    CONVERSATION_RCV_LIST_SUCCESS,
    CONVERSATION_RCV_LIST_FAIL,
} from "../constants/conversationConstants.js";

export const conversationsenderReducer = (state = { conversationsenderList: [] }, action) => {
    switch (action.type) {
        case CONVERSATION_SENDER_LIST_REQUEST:
            return { loading: true, conversationList: [] };
        case CONVERSATION_SENDER_LIST_SUCCESS:
            return { loading: false, conversationList: action.payload };
        case CONVERSATION_SENDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const conversationrcvReducer = (state = { conversationrcvList: [] }, action) => {
    switch (action.type) {
        case CONVERSATION_RCV_LIST_REQUEST:
            return { loading: true, conversationList: [] };
        case CONVERSATION_RCV_LIST_SUCCESS:
            return { loading: false, conversationList: action.payload };
        case CONVERSATION_RCV_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
