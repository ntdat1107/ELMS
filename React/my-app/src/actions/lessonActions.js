import { LESSON_LIST_REQUEST, LESSON_LIST_SUCCESS, LESSON_LIST_FAIL,
    LESSON_DETAIL_REQUEST, LESSON_DETAIL_SUCCESS, LESSON_DETAIL_FAIL, CREATE_LESSON_REQUEST, CREATE_LESSON_SUCCESS, CREATE_LESSON_FAIL, COUNT_LESSON_REQUEST, COUNT_LESSON_SUCCESS, COUNT_LESSON_FAIL } 
    from "../constants/lessonConstants"
import axios from 'axios'


export const listLessons = (courseFastname) => async (dispatch) => {
    try {
        dispatch({ type: LESSON_LIST_REQUEST})

        const { data } = await axios.get(`/api/lessons/${courseFastname}`)
        dispatch({
            type: LESSON_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const detailLesson = (courseFastname, courseNum) => async (dispatch) => {
    try {
        dispatch({ type: LESSON_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/lessons/${courseFastname}/${courseNum}`)
        dispatch({
            type: LESSON_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_DETAIL_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })        
    }
}


export const addNewLesson = 
    ( lessonName, lessonDescription, lessonUrl, fastName ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_LESSON_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/lessons/${fastName}/create`, 
        { lessonName, lessonDescription, lessonUrl }, config )

        dispatch({
            type: CREATE_LESSON_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: CREATE_LESSON_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const countNumberLesson = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COUNT_LESSON_REQUEST
        })
        const { userLogin: { userInfo } } = getState() 

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const data = await axios.get(`/api/lessons/getLesson/countLesson/number`, config)

        dispatch({
            type: COUNT_LESSON_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COUNT_LESSON_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}