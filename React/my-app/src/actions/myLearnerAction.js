import axios from 'axios'
import { MY_LEARNER_FAIL, MY_LEARNER_REQUEST, MY_LEARNER_SUCCESS } from '../constants/myLearnerConstants'

export const getMyLearner = (fastName) => async(dispatch) => {
    try {
        dispatch({
            type: MY_LEARNER_REQUEST
        })
        const { data } = await axios.get(`/api/mycourses/learners/${fastName}`)
        
        dispatch({
            type: MY_LEARNER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MY_LEARNER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}