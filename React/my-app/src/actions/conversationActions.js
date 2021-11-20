import axios from "axios";
import { CREATE_CVS_FAIL, CREATE_CVS_REQUEST, CREATE_CVS_SUCCESS, GET_RECEIVE_CVS_FAIL, GET_RECEIVE_CVS_REQUEST, GET_RECEIVE_CVS_SUCCESS, GET_SEND_CVS_FAIL, GET_SEND_CVS_REQUEST, GET_SEND_CVS_SUCCESS } from "../constants/conversationConstants.js";


export const createNewCvs = (subject, content, fastName) => async(dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_CVS_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/conversations/create/${fastName}`, 
            { subject, content }, config)
        dispatch({
            type: CREATE_CVS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_CVS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getSendCvs = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_SEND_CVS_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/conversations/getsend`, config)
        dispatch({
            type: GET_SEND_CVS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SEND_CVS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getSendCvs = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_RECEIVE_CVS_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/conversations/getsend`, config)
        dispatch({
            type: GET_RECEIVE_CVS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_RECEIVE_CVS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}