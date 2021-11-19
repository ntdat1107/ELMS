import axios from 'axios'
import { ADD_COURSE_FAIL, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS,
    MY_COURSE_REQUEST, MY_COURSE_SUCCESS, MY_COURSE_FAIL,
    MY_ONE_COURSE_REQUEST, MY_ONE_COURSE_SUCCESS, MY_ONE_COURSE_FAIL, ENROLL_COURSE_REQUEST, ENROLL_COURSE_FAIL, ENROLL_COURSE_SUCCESS, MY_LEARNER_REQUEST, MY_LEARNER_FAIL, MY_LEARNER_SUCCESS, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAIL } from '../constants/myCourseConstants'

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

export const addNewCourse = 
    ( name, image, category, description, fastName ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_COURSE_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post( '/api/mycourses/newcourse', { name, image, 
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

export const enrollNewCourse = (fastName) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENROLL_COURSE_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.post(`/api/mycourses/enroll/${fastName}`, config)

        dispatch({
            type: ENROLL_COURSE_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: ENROLL_COURSE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getMyLearnerID = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MY_LEARNER_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/mycourses/getlearners`, config)

        dispatch({
            type: MY_LEARNER_SUCCESS,
            payload: data
        })
    }
    catch (errorLearner) {
        dispatch({
            type: MY_LEARNER_FAIL,
            payload: errorLearner.response && errorLearner.response.data.message
            ? errorLearner.response.data.message
            : errorLearner.message,
        })
    }
}

export const deleteCourseNow = (fastName) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_COURSE_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/mycourses/${fastName}`, config)

        dispatch({
            type: DELETE_COURSE_SUCCESS
        })
    }
    catch(error) {
        dispatch({
            type: DELETE_COURSE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}