import axios from "axios";
import { CREATE_CVS_FAIL, CREATE_CVS_REQUEST, CREATE_CVS_SUCCESS } from "../constants/conversationConstants.js";


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