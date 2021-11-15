import { COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS, COURSE_LIST_FAIL,
    COURSE_DETAIL_REQUEST, COURSE_DETAIL_SUCCESS, COURSE_DETAIL_FAIL } 
    from "../constants/courseConstants"
import axios from 'axios'


export const listCourses = () => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LIST_REQUEST})

        const { data } = await axios.get('/api/managecourse')
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

export const detailCourse = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/managecourse/${id}`)
        dispatch({
            type: COURSE_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_DETAIL_FAIL,
            payload: null
        })        
    }
}