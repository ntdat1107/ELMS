import { COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS, COURSE_LIST_FAIL,
    COURSE_DETAIL_REQUEST, COURSE_DETAIL_SUCCESS, COURSE_DETAIL_FAIL, 
    COURSE_DETAIL_RATE_REQUEST, COURSE_DETAIL_RATE_SUCCESS, COURSE_DETAIL_RATE_FAIL, 
    COURSE_CREATE_REVIEW_REQUEST, COURSE_CREATE_REVIEW_SUCCESS, COURSE_CREATE_REVIEW_FAIL, } 
    from "../constants/courseConstants"
import axios from 'axios'


export const listCourses = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LIST_REQUEST})

        const { data } = await axios.get(`/api/courses?keyword=${keyword}`)
        dispatch({
            type: COURSE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: null
        })
    }
}
export const createCourseReview = (courseId, token, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: COURSE_CREATE_REVIEW_REQUEST})

        const {
            userLogin: { userInfo},
        } = getState()

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/courses/${courseId}/${token}/reviews`, review, config)

        dispatch({
            type: COURSE_CREATE_REVIEW_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: COURSE_CREATE_REVIEW_FAIL,
            payload: null
        })
    }
}

export const detailCourse = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/courses/${id}`)
        dispatch({
            type: COURSE_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_DETAIL_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })        
    }
}
export const detailCourseRate = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DETAIL_RATE_REQUEST })

        const { data } = await axios.get(`/api/courses/${id}/${token}`)
        dispatch({
            type: COURSE_DETAIL_RATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_DETAIL_RATE_FAIL,
            payload: null
        })        
    }
}