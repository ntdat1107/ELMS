import { LESSON_LIST_REQUEST, LESSON_LIST_SUCCESS, LESSON_LIST_FAIL,
    LESSON_DETAIL_REQUEST, LESSON_DETAIL_SUCCESS, LESSON_DETAIL_FAIL } 
    from "../constants/lessonConstants"
import axios from 'axios'


export const listLessons = () => async (dispatch) => {
    try {
        dispatch({ type: LESSON_LIST_REQUEST})

        const { data } = await axios.get(`/api/lesson/`)
        dispatch({
            type: LESSON_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_LIST_FAIL,
            payload: null
        })
    }
}

export const detailCourse = (id) => async (dispatch) => {
    try {
        dispatch({ type: LESSON_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/lesson/${id}`)
        dispatch({
            type: LESSON_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_DETAIL_FAIL,
            payload: null
        })        
    }
}