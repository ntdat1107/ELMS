import axios from 'axios'
import { MY_COURSE_FAIL, MY_COURSE_REQUEST, MY_COURSE_SUCCESS } from '../constants/myCourseConstants'

export const getMyCourses = (id) => async(dispatch) => {
    try {
        dispatch({ type: MY_COURSE_REQUEST })
        const { data } = await axios.get(`/api/mycourses/${id}`)
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