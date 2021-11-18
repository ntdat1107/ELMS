import axios from 'axios'
import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS,
    MY_COURSE_REQUEST, MY_COURSE_SUCCESS, MY_COURSE_FAIL,
    MY_ONE_COURSE_REQUEST, MY_ONE_COURSE_SUCCESS, MY_ONE_COURSE_FAIL } from '../constants/myCourseConstants'

export const getMyCourses = () => async(dispatch, getState) => {
    try {
        dispatch({ type: MY_COURSE_REQUEST })

        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/mycourses`, config)
        dispatch({ 
            type: MY_COURSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MY_COURSE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getMyCourseByFastName = (fastName) => async(dispatch, getState) => {
    try {
        dispatch({ type: MY_ONE_COURSE_REQUEST })

        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/mycourses/getcourseby/${fastName}`, config)
        dispatch({ 
            type: MY_ONE_COURSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MY_ONE_COURSE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const addCourse = ( userID, name, image, category, description, fastName ) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_COURSE_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post( '/api/mycourses/newcourse', { userID, name, image, 
            category, description, fastName }, config )

        dispatch({
            type: ADD_COURSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_COURSE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}