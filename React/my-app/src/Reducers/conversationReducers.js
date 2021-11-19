import { CONVERSATION_LIST_REQUEST, CONVERSATION_LIST_SUCCESS, CONVERSATION_LIST_FAIL } from "../constants/conversationConstants.js";

export const conversationReducer = (state = { conversationList: [] }, action) => {
    switch (action.type) {
        case CONVERSATION_LIST_REQUEST:
            return { loading: true, conversationList: [] };
        case CONVERSATION_LIST_SUCCESS:
            return { loading: false, conversationList: action.payload };
        case CONVERSATION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
