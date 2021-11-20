import { CREATE_CVS_FAIL, CREATE_CVS_REQUEST, CREATE_CVS_SUCCESS, GET_RECEIVE_CVS_FAIL, GET_RECEIVE_CVS_REQUEST, GET_RECEIVE_CVS_SUCCESS, GET_SEND_CVS_FAIL, GET_SEND_CVS_REQUEST, GET_SEND_CVS_SUCCESS } from "../constants/conversationConstants.js";


export const createCvsReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CVS_REQUEST:
            return { loading: true }
        case CREATE_CVS_SUCCESS:
            return { loading: false, CvsInfo: action.payload }
        case CREATE_CVS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getCvsSendReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SEND_CVS_REQUEST:
            return { loading: true }
        case GET_SEND_CVS_SUCCESS:
            return { loading: false, cvsSendList: action.payload }
        case GET_SEND_CVS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getCvsReceiveReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RECEIVE_CVS_REQUEST:
            return { loading: true }
        case GET_RECEIVE_CVS_SUCCESS:
            return { loading: false, cvsReceiveList: action.payload }
        case GET_RECEIVE_CVS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}